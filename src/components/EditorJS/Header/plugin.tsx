"use client";
import Header from '@/components/EditorJS/Header'
import { PropsWithChildren, useEffect, useState } from 'react'
import { HeaderLevelsType } from '@/components/EditorJS/Header/types'

export default function Plugin(
    {
        context
    }: PropsWithChildren<{ context: Header }>
){
    const [ level, setLevel ] = useState<HeaderLevelsType>(context.level);
    useEffect(() => {
        console.log("Context:", context);
    }, []);

    context.setters = {
        ...context.setters,
        plugin: setLevel
    }

    return <div>
        <h1 className='ce-header'>Higor {level}</h1>
        {/* @ts-ignore */}
        <button onClick={() => setLevel(prev => prev + 1)}>Add</button>
    </div>
}