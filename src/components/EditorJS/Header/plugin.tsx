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
        console.log({ setLevel });
    }, []);

    return <div>
        <h1 className='ce-header'>Higor {level}</h1>
        {/* @ts-ignore */}
        <button onClick={() => {
            context.block.dispatchChange();
            console.log("Add clicket");
            // @ts-ignore
            setLevel(prev => prev+1);
        }}>Add</button>
    </div>
}