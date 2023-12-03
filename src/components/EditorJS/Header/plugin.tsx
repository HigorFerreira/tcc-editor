"use client";
import Header from '@/components/EditorJS/Header'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { HeaderLevelsType } from '@/components/EditorJS/Header/types'
import { Container } from '@/components/EditorJS/Header/styles'

export default function Plugin(
    {
        context
    }: PropsWithChildren<{ context: Header }>
){
    const ref = useRef<HTMLHeadingElement>(null);
    const [ renders, setRenders ] = useState(0);
    const [ level, setLevel ] = useState<HeaderLevelsType>(context.level);

    useEffect(() => {
        setRenders(prev => prev+1);
    }, []);

    useEffect(() => {
        if(renders === 1){
            if(ref.current && typeof window !== "undefined" && typeof document !== "undefined"){
                ref.current.focus();

                if(typeof window.getSelection != "undefined" && typeof document.createRange != "undefined"){
                    const range = document.createRange();
                    range.selectNodeContents(ref.current);
                    range.collapse(false); // Collapse the range to the end point of the range
                    const selection = window.getSelection();
                    selection?.removeAllRanges();
                    selection?.addRange(range);
                }
            }
        }
    }, [ renders ]);

    context.setters.level = setLevel;

    return <Container>
        <h1 ref={ref} contentEditable="true" data-placeholder ></h1>
        {/* @ts-ignore */}
        <div>{level}</div>
        <button onClick={() => {
            // @ts-ignore
            setLevel(prev => prev+1);
        }}>Add</button>
    </Container>
}