export interface HeaderBlock {
    type: 'header'
    id: string
    data: {
        level: 1 | 2 | 3 | 4
        text: string
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
}

export interface RefsObjectType {
    [key: string]: Partial<BookRefType>
}