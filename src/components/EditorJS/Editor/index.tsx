"use client";
import { useRef, useEffect, PropsWithChildren, useState, ReactNode, useMemo, cloneElement } from 'react';
import EditorJS from '@editorjs/editorjs';
import type {
    EditorConfig,
    API,
    BlockMutationEvent,
} from '@editorjs/editorjs';
import { createPortal } from 'react-dom';
import MyPlugin from '../MyPlugin';


function Plugin(
    {
        context
    }: PropsWithChildren<{
        context?: MyPlugin
    }>
){
    useEffect(() => {
        console.log('Plugin react', { context });
    }, [ context ])

    return <h1>This is a plugin render</h1>
}


const Register = {
    'my-plugin': <Plugin />,
} as {[key: string]: JSX.Element}


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
    const [ ready, setReady ] = useState(false);

    const editorRef = useRef<EditorJS | null>(null);
    const editableAreaRef = useRef<HTMLDivElement | null>(null);

    const [ pluginRenderConfig, setPluginRenderConfig ] = useState<{
        id: string
        name: string
        uuid: string
        _this: unknown
    }[]>([]);

    useEffect(() => {
        console.log({pluginRenderConfig});
    }, [ pluginRenderConfig ])
    
    const plugins = useMemo(() => {
        return pluginRenderConfig.map(({ id, name, uuid, _this }) => {
            return createPortal(
                cloneElement(
                    Register[name],
                    { context: _this }
                ),
                document.getElementById(id) as HTMLElement,
            )
        })
    }, [ pluginRenderConfig ])

    useEffect(() => {
        (async () => {
            try{
                setReady(true);

                if(!editorRef.current && editableAreaRef.current){
                    editorRef.current = new EditorJS({
                        ...(config || {}),
                        holder: editableAreaRef.current,
                        onChange: (api, event) => {
                            onChange && onChange(api, event);
                        },
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

    useEffect(() => {
        if(ready){
            console.log('Is ready');
            document.addEventListener('editor-js-plugin-render', (e) => {
                console.log({ e });
                setPluginRenderConfig(prev => [
                    ...prev,
                    // @ts-ignore
                    e.detail
                ]);
            });
        }
    }, [ ready ]);

    return <>
        <div style={{ display: 'none' }}>
            { plugins }
        </div>
        <div ref={ editableAreaRef } />
    </>
}