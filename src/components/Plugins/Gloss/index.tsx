import { MdOutlineAbc } from "react-icons/md";
import { Button } from 'antd';
import { PropsWithChildren, useEffect, useState } from "react";
import GlossClass from '@/components/Plugins/Gloss/class'
import { createPortal } from "react-dom";

import {
    GlossModal,
} from '@/components/Plugins/Gloss/components/GlossModal';

export default function Gloss({ context }: PropsWithChildren<Partial<{ context: GlossClass }>>){

    const [ state, setState ] = useState(context?.state??false);
    const [ range, setRange ] = useState<Range>();
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const inlineToolSurround = (_param: unknown) => {
        const param = _param as CustomEvent<{ context: GlossClass, range: Range }>;
        const { context, range } = param.detail;

        if(state){
            const plugin = context.api.selection.findParentTag(context.tag);
            const text = range.extractContents();
            
            plugin?.remove();

            range.insertNode(text);
            return;
        }

        setRange(range);
        setIsModalOpen(true);
    }

    const inlineToolCheckState = (_param: unknown) => {
        const param = _param as CustomEvent<{ context: GlossClass, selection: Selection }>;
        const { context } = param.detail;
        const plugin = context.api.selection.findParentTag(context.tag);
        context.state = Boolean(plugin);
        setState(context.state);
    }

    useEffect(() => {
        document.addEventListener('InlineToolSurround', inlineToolSurround);
        document.addEventListener('InlineToolCheckState', inlineToolCheckState);
        return () => {
            document.removeEventListener('InlineToolSurround', inlineToolSurround);
            document.removeEventListener('InlineToolCheckState', inlineToolCheckState);
        }
    }, []);

    return <>
        <Button
            type={
                state
                    ? 'primary'
                    : 'text'
            }
            title="Abreviações/Siglas"
            style={{ padding: 0 }}
        >
            <MdOutlineAbc size={60} />
        </Button>
        <GlossModal
            range={range}
            isModalOpen={isModalOpen}
            onAttach={ (uuid, gloss) => {
                // const pos = document.createTextNode(' ');
                // Injecting plugin
                const plugin = document.createElement(context?.tag??'');
                plugin.id = uuid
                plugin.title = gloss.label;
                plugin.appendChild(
                    document.createTextNode(
                        gloss.short
                    )
                );

                range?.extractContents();
                // range?.insertNode(pos);
                range?.insertNode(plugin);
                range?.collapse(false);
                range?.insertNode(document.createTextNode(''));
                range?.detach();
                
                setIsModalOpen(false);
            } }
        />
        {/* {
            context?.actions &&
            context.state &&
            createPortal(
                <div>Actions aqui</div>,
                context.actions
            )
        } */}
    </>
}