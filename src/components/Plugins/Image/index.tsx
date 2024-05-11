import {
    PropsWithChildren,
    useEffect,
    useState,
    createContext,
    ReactNode,
    useRef
} from 'react';
import { createPortal } from 'react-dom';

import {
    Container,
    SpinContainer,
    CardContainer,
    TextEditionContainer,
    LoadingContainer,
} from '@/components/Plugins/Image/styles';
import ImageClass from '@/components/Plugins/Image/class';
import Settings from '@/components/Plugins/Image/settings';
import { useImage } from '@/components/Plugins/Image/hooks';
import {
    DataType,
    ContextType,
} from '@/components/Plugins/Image/types';


import type { UploadProps } from 'antd';
import { message, Upload, Input, Spin, Card } from 'antd';
import { InboxOutlined, LoadingOutlined } from '@ant-design/icons';


const { Dragger } = Upload;
const { Meta } = Card;

export * from '@/components/Plugins/Image/exports';

//#region
export const Context = createContext<ContextType>({});
//#endregion

export default function Image(
    {
        context
    }: PropsWithChildren<{ context?: ImageClass<DataType> }>
){
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);

    const [ settings, setSettings ] = useState<ReactNode | null>(null);
    const settingsContainer = document.getElementById(context?.settingsId || '');

    const _useImage = useImage(context);

    const {
        state,
        error,
        loading,
        setImageState,
    } = _useImage;


    const settingsHandler = (e: Event) => {
        const evt = e as CustomEvent<{ context: ImageClass<DataType> }>;
        if(evt.detail.context.settingsId === context?.settingsId){
            setSettings(<Settings context={context} />);
        }
    }

    useEffect(() => {
        if(window !== undefined){
            document.addEventListener('editor-plugin-settings-render', settingsHandler);
        }

        return () => {
            document.removeEventListener('editor-plugin-settings-render', settingsHandler);
        }
    }, []);


    useEffect(() => {
        if(titleRef.current && descriptionRef.current){
            titleRef.current.innerText = state.title;
            descriptionRef.current.innerText = state.description;
            titleRef.current.focus();
        }
    }, [ state.image ]);


    const props: UploadProps = {
        accept: 'image/png, image/jpeg',
        name: 'image',
        multiple: false,
        maxCount: 1,
        showUploadList: false,
        action: file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
    
                reader.onload = () => {
                    const base64Url = reader.result as string;
                    setImageState("title", "Título da imagem");
                    setImageState("description", "Fonte: autoria própria");
                    setImageState("image", base64Url);
                    resolve(base64Url as string);
                };
    
                reader.readAsDataURL(file);
            })
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
            }
            if (status === 'done') {
                message.success(`Arquivo ${info.file.name} carregado com sucesso.`);
            } else if (status === 'error') {
                message.error(`Falha ao carregar ${info.file.name}`);
            }
        },
        onDrop(e) {
        },
    };

    return <Context.Provider value={{
        useImage: _useImage,
    }}>
        <Container>
            {
                loading &&
                <SpinContainer>
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />} />
                </SpinContainer>
            }
            {
                !loading && !state.image &&
                <LoadingContainer>
                    <Input
                        placeholder='Cole o link de uma imagem'
                        onPaste={e => {
                            const url = e.clipboardData.getData('text');
                            const date = new Date();
                            const display_url = url.length > 250
                                ? url.substring(0, 250).concat('...')
                                : url
                            
                            setImageState("title", "Título da imagem");
                            setImageState(
                                "description",
                                `Disponível em: <${display_url}>. Acesso em: ${
                                    date.getDay().toString().padStart(2, '0')
                                } ${
                                    date.toLocaleString('default', { month: 'short' })
                                }. ${
                                    date.getFullYear()
                                }.`
                            );
                            setImageState("imageUrl", url);
                        }}
                    />
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                            Clique ou arraste uma imagem para esta área.
                        </p>
                        <p className="ant-upload-hint">
                            Faça upload de um arquivo de imagem de seu computador,
                            ou copie e cole um link para uma imagem da web. A imagem
                            deve estar no formato png ou jpeg
                        </p>
                    </Dragger>
                </LoadingContainer>
            }
            {
                state.image &&
                <CardContainer>
                    <Card
                        hoverable
                        style={{ width: `${100*state.width}%` }}
                        cover={<img src={state.image} />}
                    >
                        <TextEditionContainer>
                            <div
                                ref={titleRef}
                                contentEditable={true}
                                className='ant-card-meta-title'
                                onInput={e => {
                                    setImageState("title", (e.target as HTMLDivElement).innerText);
                                }}
                                style={{
                                    textOverflow: 'unset',
                                    whiteSpace: 'wrap',
                                }}
                                tabIndex={1}
                            >
                            </div>
                            <div
                                ref={descriptionRef}
                                contentEditable={true}
                                className='ant-card-meta-description'
                                onInput={e => {
                                    setImageState("description", (e.target as HTMLDivElement).innerText);
                                }}
                                tabIndex={2}
                            >
                            </div>
                        </TextEditionContainer>
                        {/* <Meta title={state.title} description={state.description} /> */}
                    </Card>
                </CardContainer>
            }
            {
                settings && settingsContainer &&
                createPortal(
                    settings,
                    settingsContainer
                )
            }
        </Container>
    </Context.Provider>
}