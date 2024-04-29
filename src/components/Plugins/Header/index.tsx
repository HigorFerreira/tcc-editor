import { FormEvent, PropsWithChildren, useEffect, useRef, useState } from "react";
import HeaderClass from "@/components/Plugins/Header/class";

import {
    HeaderLevelsType,
} from '@/components/Plugins/Header/types';
import {
    Container,
} from '@/components/Plugins/Header/styles';

export default function Header(
    {
        context
    }: PropsWithChildren<{ context?: HeaderClass }>
){
    const ref = useRef<HTMLHeadingElement>(null);

    const [ level, setLevel ] = useState<HeaderLevelsType>(1);
    const [ text, setText ] = useState('');
    const [ ready, setReady ] = useState(false);


    useEffect(() => setReady(true), []);

    useEffect(() => {
        if(ready){
            if(context){
                context.setLevel = setLevel;
            }
            if(ref.current){
                ref.current.focus();
            }
        }
    }, [ ready ]);

    useEffect(() => {
        if(context?.pluginData){
            context.pluginData = {
                ...context.pluginData,
                level,
            }
        }

        if(ref.current){
            ref.current.innerText = text;
        }
    }, [ level ]);



    const inputHandler = (e: FormEvent<HTMLHeadElement>) => {
        setText((e.target as HTMLHeadElement).innerText);
    }


    return <Container>
        {(() => {
            switch(level){
                case 1:
                    return <h1 ref={ref} onInput={inputHandler} contentEditable="true" data-placeholder ></h1>
                case 2:
                    return <h2 ref={ref} onInput={inputHandler} contentEditable="true" data-placeholder ></h2>
                case 3:
                    return <h3 ref={ref} onInput={inputHandler} contentEditable="true" data-placeholder ></h3>
                case 4:
                    return <h4 ref={ref} onInput={inputHandler} contentEditable="true" data-placeholder ></h4>
            }
        })()}
    </Container>

}