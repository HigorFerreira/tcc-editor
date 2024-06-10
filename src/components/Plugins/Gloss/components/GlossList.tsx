import { createColumnHelper, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table";
import { useGlossList } from "@/components/Providers/Gloss";
import { useEffect, useMemo, useState } from "react";
import {
    List,
    Skeleton,
    Tag,
} from "antd";
import { PiTrashSimpleFill as TrashIcon } from "react-icons/pi";
import { FaPen as EditIcon } from "react-icons/fa";
import { red, blue } from '@ant-design/colors';

import {
    useDeleteGloss,
} from '@/components/Providers/Gloss';

import {
    ItemContainer
} from '@/components/Plugins/Gloss/components/style'


type ItemType = ReturnType<typeof useGlossList>[number]

export default function GlossList(
    {
        items,
        query,
        onSelect,
    }: {
        items: ItemType[]
        query?: string
        onSelect?: (uuid: string) => void
    }
){
    const deleteGloss = useDeleteGloss();

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



    
    return <List
        style={{ margin: '12px 0' }}
        dataSource={table.getRowModel().rows}
        renderItem={row => {
            const id = `GlossListItem-${row.id}`;
            return <ItemContainer key={row.id}>
                <input
                    id={id}
                    type="radio"
                    name="gloss"
                    style={{ display: 'none' }}
                    onChange={e => {
                        onSelect && onSelect(row.id);
                    }}
                />
                <label htmlFor={id}>
                    <List.Item
                        actions={[
                            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                <EditIcon
                                    style={{ cursor: 'pointer' }}
                                    size={18}
                                    color={ blue[5] }
                                    title={`Editar ${row.getValue('short')}`}
                                />
                                <TrashIcon
                                    style={{ cursor: 'pointer' }}
                                    size={22}
                                    color={ red[5] }
                                    title={`Remover ${row.getValue('short')}`}
                                    onClick={() => deleteGloss(row.id)}
                                />
                            </div>,
                        ]}
                    >
                        <List.Item.Meta
                            title={ row.getValue('short') }
                            description={ row.getValue('label') }
                        />
                        <Tag color="geekblue">{ row.getValue('type') }</Tag>
                    </List.Item>
                </label>
            </ItemContainer>
        }}
    />

    // return <div>
    //     {table.getRowModel().rows.map(row => {
    //         return <div style={{ display: 'flex', justifyContent: 'space-between' }} key={row.id}>
    //             <b><span>{ row.getValue('short') }</span></b>
    //             <span>{ row.getValue('label') }</span>
    //             <Tag color="geekblue">{ row.getValue('type') }</Tag>
    //         </div>
    //     })}
    // </div>;
}