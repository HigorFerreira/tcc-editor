import { PropsWithChildren, useEffect, useState } from "react";
import MarkerToolClass from "@/components/Plugins/MarkerTool/class";
import { SurroundCustomEvent, CheckStateCustomEvent } from "@/components/Editor/InlineBasePlugin/types";

export default function(
    {
        context,
        "data-key": dataKey
    }: PropsWithChildren<{
        context?: MarkerToolClass
        'data-key'?: string
    }>
){
    const [ state, setState ] = useState(false);

    const surrountHandler = (e: SurroundCustomEvent) => {
        const { range, context } = e.detail;
        if(dataKey === context.pluginId){
            console.log('SURROUND', { range, context });
            // @ts-ignore
            window.range = range;

            if(state){
                return;
            }

            const selectedText = range.extractContents();
            const mark = document.createElement(`plugin-${context.name}`);
            mark.appendChild(selectedText);
            range.insertNode(mark);
        }
    }

    const checkStateHandler = (e: CheckStateCustomEvent) => {
        const { selection, context } = e.detail;
        if(dataKey === context.pluginId){
            console.log('CHECK STATE', { selection, context });
            // @ts-ignore
            window.selection = selection;

            const text = selection.anchorNode;

            if(!text){
                return;
            }

            const anchorElement = text instanceof Element ? text : text.parentElement;
            setState(!!anchorElement?.closest(`plugin-${context.name}`));
        }
    }


    useEffect(() => {
        // @ts-ignore
        document.addEventListener('editor-in-line-plugin-surround', surrountHandler);
        // @ts-ignore
        document.addEventListener('editor-in-line-plugin-check-state', checkStateHandler);

        return () => {
            // @ts-ignore
            document.removeEventListener('editor-in-line-plugin-surround', surrountHandler);
            // @ts-ignore
            document.removeEventListener('editor-in-line-plugin-check-state', checkStateHandler);
        }

    }, []);


    return <>
        <style>{`
        plugin-${context?.name??''}{
            background-color: yellow;
        }
        `.trim().replace(/^\s{8}/gm, '')}</style>
        <button title={ context?.pluginId } >M</button>
    </>
}