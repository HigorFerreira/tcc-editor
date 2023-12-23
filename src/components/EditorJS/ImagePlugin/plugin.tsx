"use client"
import { PropsWithChildren, RefObject, useEffect, useRef, useState } from 'react'

import { Input } from 'antd'

import ImagePlugin from '@/components/EditorJS/ImagePlugin'
import { setDataBuilder, escapeHTML } from '@/components/EditorJS/ImagePlugin/utils'
import { 
    Container,
    ContentContainer,
    ImageTitle,
    Caption,
 } from '@/components/EditorJS/ImagePlugin/styles'
import { InputRefsType, SavingType, SetData } from '@/components/EditorJS/ImagePlugin/types'

// import Image from 'next/image'

export default function(
    {
        context
    }: PropsWithChildren<{ context: ImagePlugin }>
){
    const [ renders, setRenders ] = useState(0);
    const [ data, _setData ] = useState<SavingType>(context.stateData);
    const setData = setDataBuilder(_setData);

    // const [ titleHeight, setTitleHeight ] = useState(25);

    const captionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        console.log({ data });
        context.stateData = data;
        context.settingsSetData(() => data);
    }, [ data ]);

    useEffect(() => {
        setRenders(prev => prev+1);
    }, []);

    useEffect(() => {
        if(captionRef.current){
            (captionRef.current as HTMLParagraphElement).innerHTML = data.caption;
        }
        if(titleRef.current){
            (titleRef.current as HTMLParagraphElement).innerText = data.title || "Digite o título da imagem";
        }
    }, [ captionRef, titleRef, data.url ]);

    const calculateElementHeight = (target: HTMLInputElement | HTMLTextAreaElement) => {
        // Temporarily disables scroll to avoid jumpiness
        target.style.overflowY = 'hidden';
        // Reset height to auto before determining the new height
        target.style.height = 'auto';
        // Set the height to the scroll height
        target.style.height = `${target.scrollHeight}px`;
        // Enable scroll if content is long
        target.style.overflowY = '';
    }

    context.setData = setData;

    return <Container>
        <Input
            onPaste={evt => {
                const date = new Date();
                const now = `${
                    date.getDate().toString().padStart(2, "0")
                }/${
                    date.getMonth().toString().padStart(2, "0")
                }/${
                    date.getFullYear().toString().padStart(4, "0")
                }`;
                const url = evt.clipboardData.getData("text");

                setData(prev => ({
                    ...prev,
                    url,
                    accessIn: now,
                    caption: `${
                        escapeHTML('Fonte: Disponível em: <')
                    }${
                        `<a href="${url}">${url}</a>`
                    }${
                        escapeHTML(`>. Acesso em: ${now}`)
                    }`
                }));
            }}
            onChange={ evt => {
                if(!evt.currentTarget.value){
                    setData("url", "");
                }
            } }
            placeholder='Cole o link da imagem aqui'
        />
        {
            data.url &&
            <ContentContainer>
                <ImageTitle
                    contentEditable="true"
                    ref={titleRef}
                    onInput={evt => {
                        setData("title", evt.currentTarget.innerText);
                    }}
                    lang='pt-BR'
                />
                <img width={`${data.width*100}%`} src={data.url} alt={data.title || "Erro ao carregar imagem"} />
                <Caption
                    ref={captionRef}
                    contentEditable="true"
                    onInput={evt => {
                        setData("caption", evt.currentTarget.innerHTML);
                    }}
                    lang='pt-BR'
                />

            </ContentContainer>
        }
    </Container>
}