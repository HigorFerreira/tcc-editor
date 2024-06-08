import { createColumnHelper, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table";
import { useGlossList } from "@/components/Providers/Gloss";
import { useEffect, useMemo, useState } from "react";
import { List, Skeleton, Tag } from "antd";


type ItemType = ReturnType<typeof useGlossList>[number]

export default function GlossList(
    {
        items,
        query,
    }: {
        items: ItemType[]
        query?: string
    }
){
    const [ filter, setFilter ] = useState(query??'');

    const columnHelper = createColumnHelper<ItemType>();

    const columns = useMemo(() => {
        return [
            columnHelper.accessor('short', {
                cell: info => info.getValue(),
                header: () => <b>Item</b>
            }),
            columnHelper.accessor('label', {
                cell: info => info.getValue(),
                header: () => <b>Descrição</b>
            }),
            columnHelper.accessor('type', { cell: info => info.getValue() }),
            // columnHelper.accessor('indexed', { cell: info => info.getValue() })
            // columnHelper.display({
            //     id: 
            // })
        ]
    }, []);

    const data = useMemo(() => {
        return items as ItemType [];
    }, [ items ]);

    const table = useReactTable({
        columns,
        data,
        getRowId: row => row.uuid,

        // Controler de estados
        state: {
            globalFilter: filter
        },

        // Mudança de estados
        onGlobalFilterChange: setFilter,

        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });



    useEffect(() => {
        setFilter(query??"");
    }, [ query ]);



    
    // return <List
    //     dataSource={table.getRowModel().rows}
    //     renderItem={row => {
    //         return <List.Item>
    //             <Skeleton active>
    //                 <List.Item.Meta
    //                     title={ row.getValue('short') }
    //                     description={ row.getValue('description') }
    //                 />
    //             </Skeleton>
    //         </List.Item>
    //     }}
    // />

    return <div>
        {table.getRowModel().rows.map(row => {
            return <div style={{ display: 'flex', justifyContent: 'space-between' }} key={row.id}>
                <b><span>{ row.getValue('short') }</span></b>
                <span>{ row.getValue('label') }</span>
                <Tag color="geekblue">{ row.getValue('type') }</Tag>
            </div>
        })}
    </div>;
}