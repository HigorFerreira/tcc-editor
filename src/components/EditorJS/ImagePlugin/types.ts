import { RefObject } from "react"

export type SavingType = {
    isDownloaded: boolean
    url: string
    path: string
    accessIn: string
    caption: string
    width: number
    title: string
}

export interface SetData {
    (context: "url" | "path" | "accessIn" | "caption" | "title", value: string): void
    (context: "isDownloaded", value: boolean): void
    (context: "width", value: number): void
    (fn: (data: SavingType) => SavingType ): void
}

export type InputRefsType = { title: RefObject<HTMLTextAreaElement>, caption: RefObject<HTMLTextAreaElement> }