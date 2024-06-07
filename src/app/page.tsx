"use client";
import { useEffect, useState } from 'react';
import {
    message,
} from 'antd';

import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import type EditorJS from '@editorjs/editorjs';
import { EditorSave } from '@/components/Storage/types';
import {
    useStorage,
    useBlocksStorage,
} from '@/components/Storage';

import Header from '@/components/Plugins/Header';
import HeaderClass from '@/components/Plugins/Header/class';
import Image from '@/components/Plugins/Image';
import ImageClass from '@/components/Plugins/Image/class';
import MarkerTool from '@/components/Plugins/MarkerTool';
import MarkerToolClass from '@/components/Plugins/MarkerTool/class';
import GlossTool from '@/components/Plugins/Gloss';
import GlossToolClass from '@/components/Plugins/Gloss/class';


// import MarkerTool from '@/app/marker';

// @ts-ignore
import ListClass from '@editorjs/list';


const Editor = dynamic(
    () => import('@/components/Editor'),
    { ssr: false },
);

const Container = styled("div")(() => ({
    '.cdx-marker': {
        backgroundColor: 'rgba(245,235,111,0.29)',
        padding: '3px 0',
    }
}));


export default function Home() {

    const [ editor, setEditor ] = useState<EditorJS | null>(null);
    const [ loading, setLoading ] = useState(true);

    const {
        isStorageLoading,
        error: storageError,
    } = useStorage();

    const {
        result,
        // loading: blocksLoading,
        clearResult,
        putBlock,
        getBlock,
    } = useBlocksStorage();

    useEffect(() => {
        if(!isStorageLoading){
            getBlock();
        }
    }, [ isStorageLoading ]);

    useEffect(() => {
        (async () => {
            if(editor && result){
                await editor.render(result as any);
                // clearResult();
            }
        })();
    }, [ result, editor ]);

    useEffect(() => {
        if(storageError){
            console.error('Storage error', storageError);
            message.error('Erro ao carregar storage');
        }
    }, [ storageError ]);

    return (
        <main>
            <Container>
                {
                    loading
                        ? 'Carregando editor...'
                        : null
                }
                <Editor
                    config={{
                        autofocus: false,
                    }}
                    register={{
                        'header': {
                            component: <Header />,
                            class: HeaderClass,
                        },
                        'list': {
                            class: ListClass,
                        },
                        'image': {
                            component: <Image />,
                            class: ImageClass,
                        },
                        'marker': {
                            component: <MarkerTool />,
                            class: MarkerToolClass,
                        },
                        'gloss': {
                            component: <GlossTool />,
                            class: GlossToolClass,
                        },
                        // 'test-plugin': {
                        //     component: <PluginTest />,
                        //     // @ts-ignore
                        //     class: PluginClass,
                        // },
                    }}
                    onChange={async (api, event) => {
                        const blocks = await api.saver.save();
                        putBlock(blocks as EditorSave);
                    }}
                    onReady={ ({ editor }) => {
                        setLoading(false);
                        setEditor(editor);
                    } }
                />
            </Container>
        </main>
    )
}
