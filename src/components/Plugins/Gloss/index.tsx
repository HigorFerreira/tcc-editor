import { MdOutlineAbc } from "react-icons/md";
import { Button } from 'antd';
import { useEffect } from "react";
import GlossClass from '@/components/Plugins/Gloss/class'

export default function Gloss(){

    const inlineToolSurround = (_param: unknown) => {
        const param = _param as CustomEvent<{ context: GlossClass, range: Range }>;
        const { context, range } = param.detail;

        console.log("STATE", context.state);

        if(context.state) return;

        const selectedText = range.extractContents();

        const plugin = document.createElement(context.tag);
        plugin.id = context.pluginId;
        plugin.appendChild(selectedText);
        range.insertNode(plugin);

        context.api.selection.expandToTag(plugin);

        // if(detail.context.pluginId);
        console.log('inlineToolSurround', param);
        console.log({ context, range, selectedText, plugin });
        console.log("-".repeat(20));
    }

    const inlineToolCheckState = (_param: unknown) => {
        const param = _param as CustomEvent<{ context: GlossClass, selection: Selection }>;
        const { context } = param.detail;
        const plugin = context.api.selection.findParentTag(context.tag);
        context.state = Boolean(plugin);
        console.log('inlineToolCheckState', param);
        console.log({ context, plugin });
        console.log("-".repeat(20));
    }

    const inlineToolRenderActions = (_param: unknown) => {
        const param = _param as CustomEvent<{ context: GlossClass }>;
        const { context } = param.detail;
        console.log('inlineToolRenderActions', param);
        console.log({ context });
        console.log("-".repeat(20));
    }

    useEffect(() => {
        document.addEventListener('InlineToolSurround', inlineToolSurround);
        document.addEventListener('InlineToolCheckState', inlineToolCheckState);
        document.addEventListener('InlineToolRenderActions', inlineToolRenderActions);
        return () => {
            document.removeEventListener('InlineToolSurround', inlineToolSurround);
            document.removeEventListener('InlineToolCheckState', inlineToolCheckState);
            document.removeEventListener('InlineToolRenderActions', inlineToolRenderActions);
        }
    }, []);

    return <Button
        type="text"
        title="Abreviações/Siglas"
    >
        <MdOutlineAbc size={60} />
    </Button>
}