"use client";
import Header from '@/components/EditorJS/Header'
import { PropsWithChildren } from 'react';

export default function Settings(
    {
        context
    }: PropsWithChildren<{ context: Header }>
){
    return <>
        {
            [1].map((lv, idx) => {
                return <div tabIndex={idx} className='ce-popover-item'>
                    <div className='ce-popover-item__icon'></div>
                    <div className='ce-popover-item__title'>Nível {lv}</div>
                </div>
            })
        }
    </>
}