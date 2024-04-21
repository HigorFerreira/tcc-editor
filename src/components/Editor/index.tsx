import {
    useEffect,
    useState,
    createContext,
    useRef,
    useMemo,
    cloneElement,
} from "react";

import EditorJS from '@editorjs/editorjs';

import {
    EditorContextType,
    EditorProps,
} from "@/components/Editor/types";

import PluginTest, { PluginClass } from '@/components/Plugins/PluginTest';
import BasePlugin from '@/components/Editor/BasePlugin';
import { createPortal } from "react-dom";

const Register = {
    'test-plugin': {
        class: PluginClass,
        component: <PluginTest />
    }
}

export const Context = createContext<EditorContextType>({
    editor: null
});

export default function Editor(
    {
        onReady,
        onError,
    }: EditorProps
){

    const editor = useRef<EditorContextType['editor']>(null);
    const editorContainerRef = useRef<HTMLDivElement>(null);
    const [ ready, setReady ] = useState(false);

    const [ pluginsList, setPluginsList ] = useState<BasePlugin[]>([]);

    const pluginsRender = useMemo(() => {
        return pluginsList.map((context) => {
            return createPortal(
                cloneElement(
                    Register['test-plugin'].component,
                    { context }
                ),
                document.getElementById(context.pluginId) as HTMLElement
            );
        });
    }, [ pluginsList ]);

    useEffect(() => {
        console.log({ pluginsList });
    }, [ pluginsList ]);

    useEffect(() => setReady(true), []);

    useEffect(() => {
        if(ready){
            (async () => {
                try{
                    console.log("Is ready");

                    document.addEventListener('editor-plugin-render', e => {
                        console.log('editor-plugin-render');
                        console.log({ e });
                        setPluginsList(prev => [
                            ...prev,
                            // @ts-ignore
                            e.detail.context
                        ])
                    });

                    document.addEventListener('editor-plugin-settings-render', e => {
                        console.log('editor-plugin-settings-render');
                        console.log({ e });
                    });

                    document.addEventListener('editor-plugin-unmount', e => {
                        console.log('editor-plugin-unmount');
                        console.log({ e });
                    });

                    if(!editor.current && editorContainerRef.current){
                        console.log("Comming to assing editorjs...");
                        editor.current = new EditorJS({
                            holder: editorContainerRef.current,
                            tools: {
                                'test-plugin': {
                                    // @ts-ignore
                                    class: Register['test-plugin'].class,
                                }
                            },
                            onChange: (api, event) => {
                                console.log({ api, event });
                            }
                        });

                        await editor.current.isReady;

                        onReady && onReady({
                            editor: editor.current
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
            })();
        }
    }, [ ready ]);


    return <Context.Provider value={{
        editor: editor.current
    }}>
        <div style={{ display: 'none' }}>
            { pluginsRender }
        </div>
        <div ref={ editorContainerRef } ></div>
    </Context.Provider>
}