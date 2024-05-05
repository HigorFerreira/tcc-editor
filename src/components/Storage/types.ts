import { useBlocksStorage, useImageStore } from "./hooks"

export interface DbImage {
    uuid: string
    image: string
}

export type Operations =
    "add"
    | "put"
    | "get"
    | "delete"


export type ResultType = {
    operation: Operations
    img?: DbImage
    res?: unknown
} | null

export interface EditorSave {
    version: string
    time: number
    blocks: unknown[]
}

export interface DbEditorBlocks {
    id: string
    editor: EditorSave | null
}

export interface ContextType {
    isStorageLoading: boolean
    error: Error | null
    useImageStore: ReturnType<typeof useImageStore>
    useBlocksStorage: ReturnType<typeof useBlocksStorage>
}