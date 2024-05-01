import {
    PropsWithChildren,
    useEffect,
    useState,
    createContext,
    useContext,
    ReactNode,
    useRef
} from 'react';
import { createPortal } from 'react-dom';

import {
    Container,
    SpinContainer,
    CardContainer,
    TextEditionContainer,
} from '@/components/Plugins/Image/styles';
import ImageClass from '@/components/Plugins/Image/class';
import Settings from '@/components/Plugins/Image/settings';
import { useImage } from '@/components/Plugins/Image/hooks';
import { DataType } from '@/components/Plugins/Image/types';


import type { UploadProps } from 'antd';
import { message, Upload, Input, Spin, Card } from 'antd';
import { InboxOutlined, LoadingOutlined } from '@ant-design/icons';


const { Dragger } = Upload;
const { Meta } = Card;

//#region
const Context = createContext<Partial<{
    state: ReturnType<typeof useImage>['state'],
    db: ReturnType<typeof useImage>['db'],
    loading: ReturnType<typeof useImage>['loading'],
    error: ReturnType<typeof useImage>['error'],
    setImageState: ReturnType<typeof useImage>['setImageState'],
    clearError: ReturnType<typeof useImage>['clearError'],
    clear: ReturnType<typeof useImage>['clear'],
}>>({});

export function useSetImageState(){
    const { setImageState } = useContext(Context);
    return setImageState;
}

export function useImageState(){
    const { state } = useContext(Context);
    return state;
}

export function useDb(){
	const { db } = useContext(Context);
	return db;
}
export function useLoading(){
	const { loading } = useContext(Context);
	return loading;
}
export function useError(){
	const { error } = useContext(Context);
	return error;
}
export function useClearError(){
	const { clearError } = useContext(Context);
	return clearError;
}
export function useClear(){
	const { clear } = useContext(Context);
	return clear;
}
//#endregion

export default function Image(
    {
        context
    }: PropsWithChildren<{ context?: ImageClass<DataType> }>
){
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const [ ready, setReady ] = useState(false);
    const [ settings, setSettings ] = useState<ReactNode | null>(null);
    const {
        state,
        db,
        loading,
        error,
        setImageState,
        clearError,
        clear,
    } = useImage(context);

    const unmountHandler = (e: Event) => {
        // Trying to remove image from database, (NOT WORKING)
        const evt = e as CustomEvent<{ context: ImageClass<DataType> }>;
        if(evt.detail.context.pluginId === context?.pluginId){
            if(db){
                db.transaction('images', 'readwrite')
                    .objectStore('images')
                    .delete(context.pluginData.uuid)
                    .onerror = () => {
                        console.error('Error while deleting', context.pluginData.uuid, 'from database');
                    }
            }
        }
    }

    const settingsHandler = (e: Event) => {
        const evt = e as CustomEvent<{ context: ImageClass<DataType> }>;
        if(evt.detail.context.settingsId === context?.settingsId){
            setSettings(<Settings context={context} />);
        }
    }

    useEffect(() => {
        setReady(true);
        return () => {
            document.removeEventListener('editor-plugin-unmount', unmountHandler);
            document.removeEventListener('editor-plugin-settings-render', settingsHandler);
        }
    }, []);

    useEffect(() => {
        if(ready){
            document.addEventListener('editor-plugin-unmount', unmountHandler);
            document.addEventListener('editor-plugin-settings-render', settingsHandler);
        }
    }, [ ready ]);

    useEffect(() => {
        if(error){
            console.error(error);
            message.error('Erro');
            clearError();
        }
    }, [ error ]);

    useEffect(() => {
        if(titleRef.current && descriptionRef.current){
            titleRef.current.innerText = state.title;
            descriptionRef.current.innerText = state.description;
            titleRef.current.focus();
        }
    }, [ state.image ]);

    // useEffect(() => {
    //     if(!state.title && titleRef.current){
    //         titleRef.current.innerText = 'Digite um título';
    //     }
    // }, [ state.title ]);

    // useEffect(() => {
    //     if(!state.description && descriptionRef.current){
    //         descriptionRef.current.innerText = 'Digite uma descrição';
    //     }
    // }, [ state.description ]);

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
                console.log('UPLOADING', info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`Arquivo ${info.file.name} carregado com sucesso.`);
            } else if (status === 'error') {
                message.error(`Falha ao carregar ${info.file.name}`);
            }
        },
        onDrop(e) {
            // console.log('Dropped files', e.dataTransfer.files);
            console.log({ e });
        },
    };

    const settingsContainer = document.getElementById(context?.settingsId || '');

    return <Context.Provider value={{
        state,
        db,
        loading,
        error,
        setImageState,
        clearError,
        clear,
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
                <>
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
                </>
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