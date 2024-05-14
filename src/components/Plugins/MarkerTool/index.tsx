import { PropsWithChildren, useEffect, useState, useCallback } from "react";
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

    const wrap = useCallback((range: Range) => {
        if(!context) throw new Error('Plugin context');
        const selectedText = range.extractContents();
        const mark = document.createElement(context.tag);

        mark.appendChild(selectedText);
        range.insertNode(mark);

        context.api.selection.expandToTag(mark);
    }, [ context, dataKey ]);

    const unwrap = useCallback((range: Range) => {
        if(!context) throw new Error('Plugin context');

        const mark = context.api.selection.findParentTag(context.tag);
        const text = range.extractContents();
        console.log({ text });

        mark?.remove();
        range.insertNode(text);
    }, [ context, dataKey ]);

    const surrountHandler = useCallback((e: SurroundCustomEvent) => {
        const { range, context } = e.detail;
        if(dataKey === context.pluginId){
            console.log({ state });
            if(state){
                unwrap(range);
                return;
            }

            wrap(range);
        }
    }, [ context, dataKey ]);

    const checkStateHandler = useCallback((e: CheckStateCustomEvent) => {
        const { selection, context } = e.detail;
        // PROBLEM HERE
        if(dataKey === context.pluginId){
            const mark = context.api.selection.findParentTag(context.tag);

            setState(!!mark);
        }
    }, [ context, dataKey ]);


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
        <button
            className={context?.api.styles.inlineToolButton}
            style={{ padding: '2px 4px', height: '100%' }}
        >
            M
        </button>
    </>
}