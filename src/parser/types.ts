import {
    HeaderBlock,
    ImageBlock,
    ListBlock,
    PageBreakBlock,
    ParagraphBlock,
    TableBlock,
    CodeBlock,
} from '@/parser/plugins/types';

export type {
    HeaderBlock,
    ImageBlock,
    ListBlock,
    PageBreakBlock,
    ParagraphBlock,
    TableBlock,
    CodeBlock,
};

export interface BookRefType {
    type: 'book'
    title: string
    author: string[]
    year: number
    publisher: string
    edition: number
    issn: string
}

export interface MiscRefType {
    type: 'misc'
    title: string
    author: string[]
    year: number
    url: string
    note: string
}

export interface ArticleRefType {
    type: 'article'
    year: number
    volume: number
    number: number
    author: string[]
    title: string
    journal: string
    pages: string
    publisher: string
    doi: string
    edition: number
    issn: string
    date: string
    accessdate: string
    url: string
    note: string
}


export interface GlossaryType {
    type: 'sigla' | 'abreviacao' | 'simbolo'
    short: string
    label: string
}

export interface GlossaryObjectType {
    [key: string]: GlossaryType
}

export interface CodesObjectType {
    [key: string]: CodeBlock
}

export interface RefsObjectType {
    [key: string]: Partial<BookRefType>
        | Partial<MiscRefType>
        | Partial<ArticleRefType>
}

export type Block = Partial<PageBreakBlock>
    | Partial<HeaderBlock>
    | Partial<TableBlock>
    | Partial<ListBlock>
    | Partial<ParagraphBlock>
    | Partial<ImageBlock>
    | Partial<CodeBlock>