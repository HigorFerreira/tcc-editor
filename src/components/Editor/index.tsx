import {
    useEffect,
    useState,
    createContext,
    useRef,
} from "react";

import EditorJS from '@editorjs/editorjs';

import {
    EditorContextType,
    EditorProps,
} from "@/components/Editor/types";

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

    useEffect(() => setReady(true), []);

    useEffect(() => {
        if(ready){
            (async () => {
                try{
                    console.log("Is ready");

                    document.addEventListener('editor-plugin-render', e => {
                        console.log('editor-plugin-render');
                        console.log({ e });
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
                            holder: editorContainerRef.current
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

        </div>
        <div ref={ editorContainerRef } ></div>
    </Context.Provider>
}