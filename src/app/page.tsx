"use client";
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import type EditorJS from '@editorjs/editorjs';

import { FileManangement } from '@/utils';

import MyPlugin from '@/components/EditorJS/MyPlugin'

const Editor = dynamic(
    () => import('@/components/EditorJS/Editor'),
    { ssr: false },
);

type LoadingType = {
    editor: boolean
}

const Container = styled("div")(() => ({
    '.cdx-marker': {
        backgroundColor: 'rgba(245,235,111,0.29)',
        padding: '3px 0',
    }
}));


export default function Home() {

    const [ editor, setEditor ] = useState<EditorJS | null>(null);
    const [ loading, _setLoading ] = useState<LoadingType>({ editor: true });
    const setLoading = (ctx: keyof LoadingType, value: boolean) => _setLoading(prev => ({ ...prev, [ctx]: value }));

    useEffect(() => {
        // if(editor){
        //     const data = JSON.parse(`{"time":1701620131980,"blocks":[{"id":"Sdb8uWaL4r","type":"header","data":{"level":1,"text":"Heading1"}},{"id":"B1T_ka58BG","type":"header","data":{"level":1,"text":"Heaading2cdaca"}}],"version":"2.28.2"}`);
        //     console.log("LOADING DATA:", { data });
        //     editor.render(data);
        // }
    }, [ editor ]);

    const [ wrapperId, setWrapperId ] = useState('initial-plugin-box');

    return (
        <main>
            {/* <TestIcon /> */}
            <div>
                <button onClick={async evt => {
                    const fm = new FileManangement();
                    const data = await editor?.save() as object;
                    await fm.save(data);
                }}>Salvar</button>
            </div>
            <button onClick={() => {
                setWrapperId('MyPlugin');
            }}>
                Inject
            </button>
            <Container>
                {
                    loading.editor
                        ? 'Carregando editor...'
                        : null
                }
                <Editor
                    config={{
                        tools: {
                            'my-plugin': MyPlugin,
                        },
                        autofocus: true,
                    }}
                    onReady={({ editor }) => {
                        setLoading("editor", false);
                        console.log({ editor });
                        setEditor(editor);
                    }}
                    onChange={(api, event) => {
                        console.log("Change event", {
                            api,
                            event,
                        });
                    }}
                    onError={err => {
                        console.log("EDITORJS ERROR");
                    }}
                />
            </Container>
        </main>
    )
}
