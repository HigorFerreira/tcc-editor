export interface PageBreakBlock {
    type: 'page-break'
    id: string
    data: any
}
export interface HeaderBlock {
    type: 'header'
    id: string
    data: {
        level: 1 | 2 | 3 | 4
        text: string
    }
}

export interface ListBlock {
    type: 'list'
    id: string
    data: {
        type: 'bullet' | 'numbered'
        list: string[]
    }
}

export interface ParagraphBlock {
    type: 'paragraph'
    id: string
    data: {
        text: string
    }
}

export interface ImageBlock {
    type: 'image'
    id: string
    data: {
        uuid: string
        width: number
        title: string
        imageUrl: string
        description: string
        fileType: string
    }
}


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
}


export interface GlossaryType {
    type: 'sigla' | 'abreviacao' | 'simbolo'
    short: string
    label: string
}

export interface GlossaryObjectType {
    [key: string]: GlossaryType
}

export interface RefsObjectType {
    [key: string]: Partial<BookRefType>
        | Partial<MiscRefType>
        | Partial<ArticleRefType>
}