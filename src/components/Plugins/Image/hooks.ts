import ImageClass from "@/components/Plugins/Image/class";
import { SetStateAction, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    DataType,
    ImageSetter,
} from "@/components/Plugins/Image/types";

import { useImageStore } from '@/components/Storage'

export function useImage(context?: ImageClass<DataType>){
    const [ ready, setReady ] = useState(false);
    const [ uuid, setUuid ] = useState(uuidv4());
    const [ width, setWidth ] = useState(0.4);
    const [ imageUrl, setImageUrl ] = useState("");
    const [ image, setImage ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ fileType, setFileType ] = useState("");

    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState<Error | null>(null);

    const {
        result,
        addImage,
        putImage,
        getImage,
        delImage,
        clearResult,
        error: imageError,
        loading: imageLoading,
        clearError: clearImageError,
    } = useImageStore();

    useEffect(() => {
        if(result){
            switch(result.operation){
                case 'add':
                    clearResult();
                    break;
                case 'put':
                    clearResult();
                    break;
                case 'get':
                    setImage(result.img?.image??'');
                    clearResult();
                    break;
                case 'delete':
                    clearResult();
                    break;
            }
        }
    }, [ result ]);

    useEffect(() => {
        setLoading(imageLoading);
    }, [ imageLoading ]);

    useEffect(() => {
        if(error){
            console.error("DB IMAGE ERROR", error);
            clearError();
        }
    }, [ error ]);

    useEffect(() => {
        setReady(true);
        
        return () => {
        }
    }, []);

    useEffect(() => {
        (async () => {
            try{
                if(ready){
                    console.log('ready')
                    setLoading(true);

                    if(context?.data?.imageUrl){
                        setImageUrl(context.data.imageUrl);
                    }

                    if(context?.data?.title){
                        setTitle(context.data.title);
                    }
                    if(context?.data?.description){
                        setDescription(context.data.description);
                    }
                    if(context?.data.width !== undefined){
                        setWidth(context.data.width);
                    }

                    if(context?.data?.uuid){
                        setUuid(context.data.uuid);
                        getImage(context.data.uuid);
                    }
                }
            }
            catch(err){
                console.error('Error on image plugin', err);
                setError(err as Error);
            }
            finally{
                setLoading(false);
            }
        })()
    }, [ ready ]);

    //#region Effects
    useEffect(() => {
        (async () => {
            try{
                setLoading(true);
                if(context?.pluginData){
                    context.pluginData = {
                        ...context.pluginData,
                        imageUrl
                    }
                }

                if(imageUrl){
                    const base64ImageUrl = await fetch(imageUrl)
                        .then(res => res.blob())
                        .then(blob => {
                            return new Promise((resolve, reject) => {
                                const reader = new FileReader();
                                reader.onload = () => {
                                    resolve(reader.result);
                                }
                                reader.onerror = reject;
                                reader.readAsDataURL(blob);
                            });
                        });

                    setImage(base64ImageUrl as string);
                }
            }
            catch(err){
                setError(err as Error);
            }
            finally{
                setLoading(false);
            }
        })();
    }, [imageUrl]);

    useEffect(() => {
        (async () => {
            try{
                if(image){
                    setLoading(true);
                    const [ ,type ] = image.match(/^data.*?\/(.*?);/)??[];
                    putImage({
                        uuid,
                        image
                    });
                    setFileType(type);
                }
            }
            catch(err){
                setError(err as Error);
            }
            finally{
                setLoading(false);
            }
        })()
    }, [ image ]);

    useEffect(() => {
        if(context?.pluginData){
            context.pluginData = {
                ...context.pluginData,
                uuid,
            }
        }
    }, [ uuid ]);

    useEffect(() => {
        if(context?.pluginData){
            context.pluginData = {
                ...context.pluginData,
                title,
            }
        }
    }, [ title ]);

    useEffect(() => {
        if(context?.pluginData){
            context.pluginData = {
                ...context.pluginData,
                description,
            }
        }
    }, [ description ]);

    useEffect(() => {
        if(context?.pluginData){
            context.pluginData = {
                ...context.pluginData,
                width,
            }
        }
    }, [ width ]);

    useEffect(() => {
        if(context?.pluginData){
            context.pluginData = {
                ...context.pluginData,
                fileType,
            }
        }
    }, [ fileType ]);

    //#endregion

    const clearError = () => {
        setError(null);
    }

    const clear = () => {
        (async () => {
            try{
                setLoading(true);
                putImage({
                    uuid,
                    image: ''
                });
                setImage('');
                setImageUrl('');
                setTitle('');
                setDescription('');
                setWidth(0.4);
                setFileType('');
            }
            catch(err){
                setError(err as Error);
            }
            finally{
                setLoading(false);
            }
        })();
    }

    const setImageState: ImageSetter = (context, val) => {
        switch(context){
            case 'imageUrl':
                setImageUrl(val as SetStateAction<string>);
                break;
            case 'image':
                setImage(val as SetStateAction<string>);
                break;
            case 'uuid':
                setUuid(val as SetStateAction<string>);
                break;
            case 'title':
                setTitle(val as SetStateAction<string>);
                break;
            case 'description':
                setDescription(val as SetStateAction<string>);
                break;
            case 'width':
                setWidth(val as SetStateAction<number>);
                break;
        }
    }
    
    return {
        state: {
            image,
            imageUrl,
            title,
            description,
            width,
            uuid,
        },
        loading,
        error,
        setImageState,
        clearError,
        clear,
    }

}