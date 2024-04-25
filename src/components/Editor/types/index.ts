import { PropsWithChildren } from 'react';
import type EditorJS from '@editorjs/editorjs';
import type { BlockAPI, ToolSettings } from '@editorjs/editorjs';
import { GenericObject } from "@/types";
import type {
    EditorConfig,
    API,
    BlockMutationEvent,
} from '@editorjs/editorjs';
import BasePlugin from '@/components/Editor/BasePlugin';

export interface EditorBlockConstructorProps {
    api: EditorJS
    block: BlockAPI
    config: GenericObject
    data?: any
    readOnly: boolean
}

export interface EditorContextType {
    editor: EditorJS | null
}

export type EditorProps = PropsWithChildren<{
    config?: Omit<EditorConfig, "tools" | "holder" | "holderId" | "onReady" | "onChange">
    register: RegisterType
    onReady?: (
        params: {
            editor: EditorJS
        }
    ) => void
    onChange?: (
        api: API,
        event: BlockMutationEvent | BlockMutationEvent[]
    ) => void
    onError?: (error: Error) => void
}>

interface RegisterObjType extends Omit<ToolSettings, 'tunes'> {
    component: JSX.Element
}
export interface RegisterType {
    [key: string]: RegisterObjType
}

export interface PluginListItemType {
    excluded: boolean
    plugin: BasePlugin
}