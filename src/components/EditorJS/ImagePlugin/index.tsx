"use client";
import BaseEdidorJSPlugin from '@/components/EditorJS/BaseEdidorJSPlugin'
import ImageEditorPlugin from '@/components/EditorJS/ImagePlugin/plugin'
import ImageSettings from '@/components/EditorJS/ImagePlugin/settings'
import { FunctionComponent, useState } from 'react'
import { SavingType, SetData } from '@/components/EditorJS/ImagePlugin/types'
import { TunesMenuConfigItem } from '@editorjs/editorjs/types/tools';

export default class ImagePlugin extends BaseEdidorJSPlugin {
    public stateData: SavingType
    public setData: SetData = () => {}
    public settingsSetData: SetData = () => {}

    constructor(params: any){
        super(params);
        this.stateData = {
            title: this.data.title || '',
            accessIn: this.data.accessIn || '',
            isDownloaded: this.data.isDownloaded && typeof this.data.isDownloaded === "boolean"
                ? this.data.isDownloaded
                : false,
            path: this.data.path || '',
            url: this.data.url || '',
            caption: this.data.caption || '',
            width: this.data.width || 0.4
        }
    }

    static get toolbox() {
        return {
            title: 'Imagem',
            icon: `<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>`,
        };
    }

    getReactComponent() {
        return <ImageEditorPlugin context={this} />
    }

    getSettingsReactComponent() {
        return <ImageSettings context={this} />
    }

    save(): SavingType {
        return this.stateData
    }
}