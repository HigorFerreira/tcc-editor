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
    const [ inlinePluginsList, setInlinePluginsList ] = useState<InlinePluginListItemType[]>([]);

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
                    }
                ),
                containerElement
            );
        });
    }, [ pluginsList ]);

    const inlinePluginsRender = useMemo(() => {
        return inlinePluginsList.map(({ excluded, plugin: context }) => {
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
                        ['data-key']: context.pluginId,
                    }
                ),
                containerElement
            );
        });
    }, [ inlinePluginsList ]);

    useEffect(() => {
        // console.log({ pluginsList });
    }, [ pluginsList ]);

    useEffect(() => setReady(true), []);

    useEffect(() => {
        if(ready){
            (async () => {
                try{
                    // console.log("Is ready");

                    document.addEventListener('editor-in-line-plugin-render', e => {
                        setInlinePluginsList(prev => [
                            ...prev,
                            {
                                excluded: false,
                                // @ts-ignore
                                plugin: e.detail.context
                            }
                        ]);
                    });

                    document.addEventListener('editor-in-line-plugin-unmount', e => {
                        setInlinePluginsList(prev => {
                            return prev.map((item) => {
                                const { plugin: { pluginId } } = item;
                                if(
                                    (e as CustomEvent<{ context: InlineBasePlugin }>)
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