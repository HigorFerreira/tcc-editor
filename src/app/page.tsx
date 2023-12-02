"use client";
import Image from 'next/image';
// import Editor from "@/components/EditorJS/Editor"
import { useState } from 'react';

import Header from '@editorjs/header';
// @ts-ignore
import List from '@editorjs/list';
import ImagePlugin from '@/components/EditorJS/BaseEdidorJSPlugin';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

import MarkerTool from '@/components/EditorJS/MarkerTool';

import { BsPlugin as Plugin } from 'react-icons/bs';
import { BsPlugFill as Plugin2 } from 'react-icons/bs';
import { BlockAPI, API } from '@editorjs/editorjs';
import type EditorJS from '@editorjs/editorjs';

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
}))

export default function Home() {

    const [ loading, _setLoading ] = useState<LoadingType>({ editor: true });
    const setLoading = (ctx: keyof LoadingType, value: boolean) => _setLoading(prev => ({ ...prev, [ctx]: value }));

    return (
        <main>
            {/* <Plugin />
            <Plugin2 /> */}
            <Container>
                {
                    loading.editor
                        ? 'Carregando editor...'
                        : null
                }
                <Editor
                    config={{
                        tools: {
                            header: {
                                // @ts-ignore
                                class: Header,
                                inlineToolbar: ['link'],
                            },
                            list: {
                                class: List,
                                inlineToolbar: true,
                            },
                            image: ImagePlugin,
                            // @ts-ignore
                            marker: MarkerTool,
                        },
                        autofocus: false,
                        placeholder: 'Vamos escrever nosso maravilhoso TCC'
                    }}
                    onReady={({ editor }) => {
                        setLoading("editor", false);
                        console.log({ editor })
                    }}
                    onChange={(api, event) => {
                        console.log("Change event", {
                            api,
                            event,
                        });
                    }}
                />
            </Container>
        </main>
    )
}
