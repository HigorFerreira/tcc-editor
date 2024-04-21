import { PropsWithChildren } from 'react'
import type EditorJS from '@editorjs/editorjs'
import type { BlockAPI } from '@editorjs/editorjs'
import { GenericObject } from "@/types"
import type {
    EditorConfig,
    API,
    BlockMutationEvent,
} from '@editorjs/editorjs';

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
    config?: Omit<EditorConfig, "holder" | "holderId" | "onReady" | "onChange">
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