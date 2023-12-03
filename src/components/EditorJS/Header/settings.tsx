"use client";
import Header from '@/components/EditorJS/Header'
import { PropsWithChildren } from 'react';

export default function Settings(
    {
        context
    }: PropsWithChildren<{ context: Header }>
){
    return <div>
        Settings
        <button onClick={() => {
            const setLevel = context.setters.level satisfies Header['setters']['level'];
            // @ts-ignore
            setLevel(prev => prev+1);
        }}>Add</button>
    </div>
}