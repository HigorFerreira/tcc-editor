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
    const [ level, setLevel ] = useState<HeaderLevelsType>(context.level);
    const [ text, setText ] = useState("");

    useEffect(() => {
        context.text = text;
    }, [ text ]);

    const changeEvet = (evt: Event) => {
        setText((evt.currentTarget as HTMLHeadElement)?.innerHTML || "");
    }

    useEffect(() => {
        context.level = level;
        if(ref.current){
            ref.current.innerHTML = text;
        }
    }, [ level ]);

    useEffect(() => {
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

            ref.current.addEventListener('input', changeEvet);
            ref.current.innerHTML = context.data?.text || ""
            setText(context.data?.text || "");
        }

        return () => {
            ref.current?.removeEventListener("input", changeEvet);
        }
    }, [ ]);

    context.setters.level = setLevel;

    return <Container>
        {
            (() => {
                switch(level){
                    case 1:
                        return <h1 ref={ref} contentEditable="true" data-placeholder ></h1>
                    case 2:
                        return <h2 ref={ref} contentEditable="true" data-placeholder ></h2>
                    case 3:
                        return <h3 ref={ref} contentEditable="true" data-placeholder ></h3>
                    case 4:
                        return <h4 ref={ref} contentEditable="true" data-placeholder ></h4>
                }
            })()
        }
    </Container>
}