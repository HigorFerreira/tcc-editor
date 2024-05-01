import { Dispatch, SetStateAction } from "react"

export interface DataType {
    uuid: string
    title: string
    description: string
    width: number
    imageUrl: string
}

export interface ImageSetter {
    (context: 'imageUrl', val: SetStateAction<string>): void
    (context: 'image', val: SetStateAction<string>): void
    (context: 'uuid', val: SetStateAction<string>): void
    (context: 'title', val: SetStateAction<string>): void
    (context: 'description', val: SetStateAction<string>): void
    (context: 'width', val: SetStateAction<number>): void
}

export interface DbImage {
    uuid: string
    image: string
}