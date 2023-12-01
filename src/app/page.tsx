"use client";
import Image from 'next/image';
import Editor from "@/components/EditorJS/Editor"
import { useState } from 'react';

import Header from '@editorjs/header';
// @ts-ignore
import List from '@editorjs/list';
import ImagePlugin from '@/components/EditorJS/simple-image';

type LoadingType = {
    editor: boolean
}

export default function Home() {

    const [ loading, _setLoading ] = useState<LoadingType>({ editor: true });
    const setLoading = (ctx: keyof LoadingType, value: boolean) => _setLoading(prev => ({ ...prev, [ctx]: value }));

    return (
        <main>
            <div>
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
                        },
                        autofocus: true,
                        onReady: () => {
                            setLoading("editor", false);
                        }
                    }}
                />
            </div>
        </main>
    )
}
