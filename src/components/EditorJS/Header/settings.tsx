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
            if(context.setters?.plugin)
                // @ts-ignore
                context.setters.plugin(prev => prev+1);
        }}>Add</button>
    </div>
}