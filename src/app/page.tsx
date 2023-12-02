"use client";
import Image from 'next/image';
// import Editor from "@/components/EditorJS/Editor"
import { useState } from 'react';

import Header from '@editorjs/header';
// @ts-ignore
import List from '@editorjs/list';
import ImagePlugin from '@/components/EditorJS/BaseEdidorJSPlugin';
import dynamic from 'next/dynamic';

import { BsPlugin as Plugin } from 'react-icons/bs';
import { BsPlugFill as Plugin2 } from 'react-icons/bs';
import { BlockAPI, API } from '@editorjs/editorjs';
import type EditorJS from '@editorjs/editorjs'

const Editor = dynamic(
    () => import('@/components/EditorJS/Editor'),
    { ssr: false },
);

type LoadingType = {
    editor: boolean
}

class MarkerTool {
    private api: EditorJS;
    private button: HTMLButtonElement | null;
    private state: boolean;

    constructor(
        {
            api
        }: {
            api: EditorJS
        }
    ){
        this.api = api;
        this.button = null;
        this.state = false;
    }

    static get isInline() {
        return true;
    }

    render(){
        this.button = document.createElement("button");
        this.button.type = "button";
        this.button.textContent = "M";
        this.button.classList.add(this.api.styles.inlineToolButton);

        return this.button;
    }

    surround(range: Range){
        console.log({ range });
        if (this.state) {
            // If highlights is already applied, do nothing for now
            return;
        }

        const selectedText = range.extractContents();
        console.log({ selectedText });

        const mark = document.createElement("MARK");

        // Append to the MARK element selected TextNode
        mark.appendChild(selectedText);

        // Insert new element
        range.insertNode(mark);
    }

    checkState(selection: Selection){
        const text = selection.anchorNode;
        if(!text){
            return;
        }

        const anchorElement = text instanceof Element ? text : text.parentElement;

        this.state = !!anchorElement?.closest('MARK');
    }
}

export default function Home() {

    const [ loading, _setLoading ] = useState<LoadingType>({ editor: true });
    const setLoading = (ctx: keyof LoadingType, value: boolean) => _setLoading(prev => ({ ...prev, [ctx]: value }));

    return (
        <main>
            {/* <Plugin />
            <Plugin2 /> */}
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
            </div>
        </main>
    )
}
