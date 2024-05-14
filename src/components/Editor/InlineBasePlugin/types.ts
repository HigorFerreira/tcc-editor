import InlineBasePlugin from '@/components/Editor/InlineBasePlugin';

export type DetailRenderEventType = {
    context: InlineBasePlugin
}

export type DetailUnmountEventType = {
    uuid: string
    pluginId: string
    name: string
}

export type DetailSurroundEventType = {
    context: InlineBasePlugin
    range: Range
}

export type DetailCheckStateEventType = {
    context: InlineBasePlugin
    selection: Selection
}

export type RenderCustomEvent = CustomEvent<DetailRenderEventType>;

export type UnmountCustomEvent = CustomEvent<DetailUnmountEventType>;

export type SurroundCustomEvent = CustomEvent<DetailSurroundEventType>;

export type CheckStateCustomEvent = CustomEvent<DetailCheckStateEventType>;