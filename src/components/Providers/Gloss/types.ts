import { Dispatch, SetStateAction } from 'react';
import type {
    GlossaryObjectType, GlossaryType
} from '@/parser/types';

export interface GlossaryIndex extends GlossaryType {
    uuid: string
    complete: string
    created_at: Date
}

export interface GlossaryIndexObjectType {
    [key: string]: Partial<GlossaryIndex>
}

export interface ContextType {
    gloss: GlossaryObjectType,
    setGloss: Dispatch<SetStateAction<GlossaryObjectType>>
    indexGloss: GlossaryIndexObjectType
    setIndexGloss: Dispatch<SetStateAction<GlossaryIndexObjectType>>
}