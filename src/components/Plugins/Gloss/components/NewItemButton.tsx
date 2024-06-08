import { PropsWithChildren, useState } from "react";
import {
    Button,
    Flex,
    Input,
    Popover,
    message,
} from "antd";

import {
    NewItemButtonButtonProps,
} from '@/components/Plugins/Gloss/components/types'
import { TooltipPlacement } from "antd/es/tooltip";
import { PlusOutlined } from '@ant-design/icons';


export default function(
    {
        label,
        title,
        buttonProps,
        placement,
        placeholders,
        onAdd,
    }: PropsWithChildren<{
        label: string
        title?: string
        buttonProps?: Partial<NewItemButtonButtonProps>
        placement?: TooltipPlacement
        placeholders?: [ string, string ]
        onAdd?: (values: [ string, string ]) => void
    }>
){
    const [ open, setOpen ] = useState(false);
    const [ values, setValues ] = useState<[ string, string ]>([ '', '' ]);

    return <Popover
        open={open}
        onOpenChange={visible => setOpen(visible)}
        trigger={'click'}
        placement={ placement || "top" }
        content={
            <div>
                {
                    title &&
                    <h4 style={{ margin: '0 0 5px 0' }}>
                        { title }
                    </h4>
                }
                <Flex gap={12}>
                    <Input
                        style={{ flex: 1 }}
                        placeholder={placeholders ? placeholders[0]??'' : ''}
                        value={values[0]}
                        onChange={e => {
                            setValues(prev => [ e.target.value, prev[1] ]);
                        }}
                    />
                    <Input
                        style={{ flex: 3 }}
                        placeholder={placeholders ? placeholders[1]??'' : ''}
                        value={values[1]}
                        onChange={e => {
                            setValues(prev => [ prev[0], e.target.value ]);
                        }}
                    />
                    <Button
                        icon={ <PlusOutlined /> }
                        title="Adicionar"
                        type="primary"
                        onClick={() => {
                            if(values[0] && values[1]){
                                onAdd && onAdd(values);
                                setOpen(false);
                                setValues([ '', '' ]);
                            }
                            else{
                                if(placeholders){
                                    message.warning(`Preencha ${
                                        placeholders[0]
                                    } e ${
                                        placeholders[1]
                                    } para adicionar.`);
                                }
                            }
                        }}
                    ></Button>
                </Flex>
            </div>
        }
    >
        <Button
            { ...buttonProps }
            onClick={e => {
                e.preventDefault();
            }}
        >
            { label }
        </Button>
    </Popover>
}