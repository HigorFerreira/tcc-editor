export interface PageBreakBlock {
    type: 'page-break'
    id: string
    data: any
}
export interface HeaderBlock {
    type: 'header'
    id: string
    data: {
        level: 1 | 2 | 3 | 4 | 5
        text: string
    }
}

export interface TableBlock {
    type: 'table'
    id: string
    data: {
        id: string
        title: string
        description: string
        header: string[]
        items: string[][]
        width: number
        column_sizes: number[]
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