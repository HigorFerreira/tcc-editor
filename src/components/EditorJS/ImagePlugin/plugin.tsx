"use client"
import ImagePlugin from '@/components/EditorJS/ImagePlugin'
import { Container, ImageTitle, Caption } from '@/components/EditorJS/ImagePlugin/styles'
import { PropsWithChildren, RefObject, useEffect, useRef, useState } from 'react'
import { Input } from 'antd'
import { InputRefsType, SavingType, SetData } from '@/components/EditorJS/ImagePlugin/types';
import { setDataBuilder } from '@/components/EditorJS/ImagePlugin/utils'

export default function(
    {
        context
    }: PropsWithChildren<{ context: ImagePlugin }>
){
    const ref = useRef<HTMLElement>(null);
    const [ renders, setRenders ] = useState(0);
    const [ data, _setData ] = useState<SavingType>(context.stateData);
    const setData = setDataBuilder(_setData);

    // const [ titleHeight, setTitleHeight ] = useState(25);

    useEffect(() => {
        console.log({ data });
        context.stateData = data;
        context.settingsSetData(() => data);        
    }, [ data ]);

    useEffect(() => {
        if(renders === 1){
            ref.current?.focus();
        }
    }, [ renders ]);

    useEffect(() => {
        setRenders(prev => prev+1);
    }, []);

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
                    caption: `Fonte: Disponível em: <${url}>. Acesso em: ${now}`
                }));
            }}
            // @ts-ignore
            ref={ref} placeholder='Cole o link da imagem aqui'
        />
        {
            data.url &&
            <div>
                <ImageTitle
                    onChange={({ target: _target }) => {
                        const target = _target as HTMLTextAreaElement
                        if(target){
                            calculateElementHeight(target);
                            setData("title", target.value);
                        }
                    }}
                    rows={1}
                    // height={titleHeight}
                    placeholder="Digite o título da imagem"
                    value={data.title}
                />
                <img width={`${data.width*100}%`} src={data.url} alt={data.title || "Erro ao carregar imagem"} />
                <ImageTitle
                    onChange={({ target: _target }) => {
                        const target = _target as HTMLTextAreaElement
                        if(target){
                            calculateElementHeight(target);
                            setData("caption", target.value);
                        }
                    }}
                    rows={1}
                    // height={titleHeight}
                    placeholder="Digite o título da imagem"
                    value={data.caption}
                />
            </div>
        }
    </Container>
}