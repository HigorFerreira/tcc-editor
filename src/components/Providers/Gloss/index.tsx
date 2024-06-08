'use client';
import {
    type PropsWithChildren,
    createContext,
    useState,
} from "react";

import type {
    GlossaryObjectType
} from '@/parser/types';

import {
    ContextType,
    GlossaryIndexObjectType
} from '@/components/Providers/Gloss/types';


export * from '@/components/Providers/Gloss/hooks';

export const Context = createContext<ContextType>({
    gloss: {},
    indexGloss: {},
    setGloss: () => {},
    setIndexGloss: () => {},
});

export default function Gloss(
    {
        children
    }: PropsWithChildren
){
    const [ gloss, setGloss ] = useState<GlossaryObjectType>({});
    const [ indexGloss, setIndexGloss ] = useState<GlossaryIndexObjectType>({});

    return <Context.Provider value={{
        gloss,
        setGloss,
        indexGloss,
        setIndexGloss,
    }}>
        { children }
    </Context.Provider>
}