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
    PluginListItemType,
    InlinePluginListItemType,
} from "@/components/Editor/types";


import { createPortal } from "react-dom";
import BasePlugin from '@/components/Editor/BasePlugin';
import InlineBasePlugin from "@/components/Editor/InlineBasePlugin";

import {
    RenderCustomEvent,
    UnmountCustomEvent,
} from "@/components/Editor/InlineBasePlugin/types";

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
    const [ inlinePluginsList, setInlinePluginsList ] = useState<InlineBasePlugin[]>([]);

    const pluginsRender = useMemo(() => {
        return pluginsList.map(({ excluded, plugin: context }) => {
            const containerElement = document.getElementById(context.pluginId);
            const component = register[context.name].component;

            if(!component) return null;
            if(excluded) return null;
            if(!containerElement) return null;
            return createPortal(
                cloneElement(
                    component,
                    { 
                        context,
                        key: context.pluginId,
                        "data-key": context.pluginId,
                    }
                ),
                containerElement
            );
        });
    }, [ pluginsList ]);

    const inlinePluginsRender = useMemo(() => {
        return inlinePluginsList.map((item) => {
            const containerElement = document.getElementById(item.pluginId);
            const component = register[item.name].component;

            if(!component) return null;
            if(!containerElement) return null;

            return createPortal(
                cloneElement(
                    component,
                    {
                        context: item,
                        key: item.pluginId,
                        "data-key": item.pluginId,
                    }
                ),
                containerElement
            )
        });
    }, [ inlinePluginsList ]);

    const inlineToolRenderHandler = ({ detail: { context } }: RenderCustomEvent) => {
        setInlinePluginsList(prev => [ ...prev, context ]);
    }

    const inlineToolUnmountHandler = (
        { detail: { pluginId, } }: UnmountCustomEvent
    ) => {
        setInlinePluginsList(prev => {
            return prev.filter(el => el.pluginId !== pluginId);
        });
    }

    useEffect(() => {
        // console.log({ pluginsList });
    }, [ pluginsList ]);

    useEffect(() => {
        console.log({ inlinePluginsList });
    }, [ inlinePluginsList ]);

    useEffect(() => {

        // @ts-ignore
        document.addEventListener('InlineToolRender', inlineToolRenderHandler);
        // @ts-ignore
        document.addEventListener('InlineToolUnmount', inlineToolUnmountHandler);

        setReady(true);

        return () => {
            // @ts-ignore
            document.removeEventListener('InlineToolRender', inlineToolRenderHandler);
            // @ts-ignore
            document.removeEventListener('InlineToolUnmount', inlineToolUnmountHandler);
        }
    }, []);

    useEffect(() => {
        if(ready){
            (async () => {
                try{
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
                                    (e as CustomEvent<{ context: BasePlugin }>)
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
            { inlinePluginsRender }
        </div>
        <div ref={ editorContainerRef } ></div>
    </Context.Provider>
}