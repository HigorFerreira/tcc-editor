import InlineBasePlugin from '@/components/Editor/InlineBasePlugin';

export type DetailRenderEventType<C = InlineBasePlugin> = {
    context: C
}

export type DetailUnmountEventType = {
    uuid: string
    pluginId: string
    name: string
}

export type DetailSurroundEventType<C = InlineBasePlugin> = {
    context: C
    range: Range
}

export type DetailCheckStateEventType<C = InlineBasePlugin> = {
    context: C
    selection: Selection
}

export type RenderCustomEvent<C = InlineBasePlugin> = CustomEvent<DetailRenderEventType<C>>;

export type UnmountCustomEvent = CustomEvent<DetailUnmountEventType>;

export type SurroundCustomEvent<C = InlineBasePlugin> = CustomEvent<DetailSurroundEventType<C>>;

export type CheckStateCustomEvent<C = InlineBasePlugin> = CustomEvent<DetailCheckStateEventType<C>>;