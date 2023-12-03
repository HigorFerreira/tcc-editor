import type EditorJS from '@editorjs/editorjs'
import type { BlockAPI } from '@editorjs/editorjs'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { GenericObject } from "@/types"

export type ComponentWrapperNRoot = {
    wrapper: HTMLElement | null
    root: ReactDOM.Root
}

export type Components = { 
    main: ComponentWrapperNRoot
    settings: ComponentWrapperNRoot
    [key: string]: ComponentWrapperNRoot
}

export interface EditorBlockConstructorProps {
    api: EditorJS
    block: BlockAPI
    config: GenericObject
    data?: any
    readOnly: boolean
}