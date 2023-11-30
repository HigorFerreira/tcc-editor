"use client";
import { useRef, useEffect, type PropsWithChildren, forwardRef } from 'react';
import EditorJS, { EditorConfig } from '@editorjs/editorjs';

const EditorProvider = forwardRef((
    {
        config
    }: PropsWithChildren<{
        config?: Omit<EditorConfig, "holder">
    }>,
    ref    
) => {

    const editorRef = useRef<EditorJS | null>(null);

    useEffect(() => {
        if(!editorRef.current){
            editorRef.current = new EditorJS({
                holder: 'editorjs',
                ...config
            })
        }
        
        return () => {
            if(editorRef.current && editorRef.current.destroy){
                editorRef.current?.destroy();
                editorRef.current = null;
            }
        }
    }, [])

    return <div
        ref={ instance => {
            if(instance && ref){
                // @ts-ignore
                ref.current = instance;
                // @ts-ignore
                ref.editor = editorRef;
            }
        } }
    >
        {/* <button onClick={async () => {
            console.log(await editorRef.current?.save())
        }}>Save</button> */}
        <div
            id='editorjs'
            // style={{
            //     width: '21cm',
            //     border: '1px solid black',
            //     padding: '25px',
            //     transform: 'scale(1)'
            // }}
        />
    </div>

});

EditorProvider.displayName = "EditorProvider";

export default EditorProvider;