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