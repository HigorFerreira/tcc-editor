"use client";
import { useRef, useEffect, PropsWithChildren } from 'react';
import EditorJS from '@editorjs/editorjs';
import type {
    EditorConfig,
    API,
    BlockMutationEvent,
} from '@editorjs/editorjs';

export default function Editor(
    {
        config,
        onReady,
        onChange,
        onError,
    }: Omit<PropsWithChildren<{
        config?: Omit<EditorConfig, "holder" | "holderId" | "onReady" | "onChange">
        onReady?: (
            params: {
                editor: EditorJS
            }
        ) => void
        onChange?: (
            api: API,
            event: BlockMutationEvent | BlockMutationEvent[]
        ) => void
        onError?: (error: Error) => void
    }>, "children">
) {

    const editorRef = useRef<EditorJS | null>(null);
    const editableAreaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        (async () => {
            try{
                if(!editorRef.current && editableAreaRef.current){
                    editorRef.current = new EditorJS({
                        ...(config || {}),
                        holder: editableAreaRef.current,
                        onChange: (api, event) => {
                            onChange && onChange(api, event);
                        }
                    });

                    await editorRef.current.isReady;
        
                    onReady && onReady({
                        editor: editorRef.current
                    })
                }
            }
            catch(err){
                if(!err || !(err instanceof Error)){
                    console.error("Editor error: ", { err });
                    err = new Error("Editor error");
                }
                onError && onError(err as Error);
            }
        })()
        
        return () => {
            if(editorRef.current && editorRef.current.destroy){
                editorRef.current?.destroy();
                editorRef.current = null;
            }
        }
    }, []);

    return <>
        <div ref={ editableAreaRef } />
    </>
}