"use client";
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import type EditorJS from '@editorjs/editorjs';

import PluginTest from '@/components/Plugins/PluginTest';
import PluginClass from '@/components/Plugins/PluginTest/class';
import Header from '@/components/Plugins/Header';
import HeaderClass from '@/components/Plugins/Header/class';
import Image from '@/components/Plugins/Image';
import ImageClass from '@/components/Plugins/Image/class';

import { FileManangement } from '@/utils';

import MyPlugin from '@/components/EditorJS/MyPlugin'

const Editor = dynamic(
    () => import('@/components/Editor'),
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
                        autofocus: true,
                    }}
                    register={{
                        'header': {
                            component: <Header />,
                            // @ts-ignore
                            class: HeaderClass,
                        },
                        'image': {
                            component: <Image />,
                            // @ts-ignore
                            class: ImageClass,
                        },
                        'test-plugin': {
                            component: <PluginTest />,
                            // @ts-ignore
                            class: PluginClass,
                        },                        
                    }}
                    onChange={(api, event) => {
                        console.log('CHANGE EVENT', { api, event });
                    }}
                    onReady={ editor => {
                        console.log({ editor })
                    } }
                />
            </Container>
        </main>
    )
}
