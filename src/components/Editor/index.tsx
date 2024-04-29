import {
    useRef,
    useMemo,
    useState,
    useEffect,
    cloneElement,
    createContext,
} from "react";

import EditorJS from '@editorjs/editorjs';

import {
    EditorProps,
    EditorContextType,
    PluginListItemType
} from "@/components/Editor/types";

import { createPortal } from "react-dom";
import BasePlugin from '@/components/Editor/BasePlugin';
import PluginClass from "@/components/Plugins/PluginTest/class";

export * from '@/components/Editor/hooks';

export const Context = createContext<EditorContextType>({
    editor: null
});

export default function Editor(
    {
        onChange,
        onReady,
        onError,
        register,
        config,
    }: EditorProps
){

    const editor = useRef<EditorContextType['editor']>(null);
    const editorContainerRef = useRef<HTMLDivElement>(null);
    const [ ready, setReady ] = useState(false);

    const [ pluginsList, setPluginsList ] = useState<PluginListItemType[]>([]);

    const pluginsRender = useMemo(() => {
        return pluginsList.map(({ excluded, plugin: context }) => {
            const containerElement = document.getElementById(context.pluginId);

            if(excluded) return null;
            if(!containerElement) return null;
            return createPortal(
                cloneElement(
                    register[context.name].component,
                    { 
                        context,
                        key: context.pluginId,
                    }
                ),
                containerElement
            );
        });
    }, [ pluginsList ]);

    useEffect(() => {
        // console.log({ pluginsList });
    }, [ pluginsList ]);

    useEffect(() => setReady(true), []);

    useEffect(() => {
        if(ready){
            (async () => {
                try{
                    // console.log("Is ready");

                    document.addEventListener('editor-plugin-render', e => {
                        // console.log('editor-plugin-render');
                        // console.log({ e });
                        setPluginsList(prev => [
                            ...prev,
                            {
                                excluded: false,
                                // @ts-ignore
                                plugin: e.detail.context
                            }
                        ]);
                    });

                    document.addEventListener('editor-plugin-settings-render', e => {
                        // console.log('editor-plugin-settings-render');
                        // console.log({ e });
                    });

                    document.addEventListener('editor-plugin-unmount', e => {
                        setPluginsList(prev => {
                            return prev.map((item) => {
                                const { plugin: { pluginId } } = item;
                                if(
                                    (e as CustomEvent<{ context: PluginClass }>)
                                        .detail.context.pluginId === pluginId
                                ){
                                    return {
                                        ...item,
                                        excluded: true
                                    }
                                }
                                return item;
                            })
                        });
                    });

                    if(!editor.current && editorContainerRef.current){
                        // console.log("Comming to assing editorjs...");
                        editor.current = new EditorJS({
                            ...config,
                            holder: editorContainerRef.current,
                            tools: Object.keys(register).reduce((prev, key) => {
                                const { component, ...restOfProps } = register[key];
                                return {
                                    ...prev,
                                    [key]: restOfProps
                                };
                            }, {}),
                            onChange: (api, event) => {
                                onChange && onChange(api, event);
                            },
                            data: JSON.parse('{"time":1714356669977,"blocks":[{"id":"p3ma9MO-Ws","type":"header","data":{"level":1,"text":"Heading level 1"}},{"id":"-bkpwJInfq","type":"paragraph","data":{"text":"This is heading one"}},{"id":"m68s68t6IY","type":"header","data":{"level":2,"text":"Heading level 2"}},{"id":"WzIgNQ5js1","type":"paragraph","data":{"text":"This is level two"}},{"id":"F1Ffj8eoaU","type":"header","data":{"text":"Heading level 3","level":3}},{"id":"XuBgVTOqMZ","type":"paragraph","data":{"text":"This is level tree"}},{"id":"inWGqnyxTK","type":"header","data":{"level":4,"text":"Heading level 4"}},{"id":"sZq2a0ZU9K","type":"paragraph","data":{"text":"This is level four"}}],"version":"2.29.1"}')
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