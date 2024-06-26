import ImageClass from "@/components/Plugins/Image/class";
import { SetStateAction, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    DataType,
    ImageSetter,
} from "@/components/Plugins/Image/types";

import { useImageStore } from '@/components/Providers/Storage'

export function useImage(context?: ImageClass<DataType>){
    const [ ready, setReady ] = useState(false);
    const [ uuid, setUuid ] = useState(context?.data.uuid??uuidv4());
    const [ error, setError ] = useState<Error | null>(null);
    const [ loading, setLoading ] = useState(false);

    const [ imageUrl, setImageUrl ] = useState(context?.data.imageUrl??"");
    const [ image, setImage ] = useState("");

    const [ width, setWidth ] = useState(context?.data.width??0.4);
    const [ title, setTitle ] = useState(context?.data.title??"");
    const [ description, setDescription ] = useState(context?.data.description??"");
    const [ fileType, setFileType ] = useState(context?.data.fileType??"");


    const _useImageStore = useImageStore();

    const {
        result: resultStore,
        error: storeError,
        loading: storeLoading,
        addImage,
        putImage,
        getImage,
        delImage,
        clearError: clearStoreError,
        clearResult: clearStoreResult,
    } = _useImageStore;

    useEffect(() => {
        setReady(true);
    }, []);

    useEffect(() => {
        if(ready){
            if(window !== undefined){
                let random = Math.random();
                let inf = 10;
                let sup = 1000;
                let time = random*(sup - inf) + inf;
                time = parseInt(time.toString());
                setTimeout(() => {
                    getImage(uuid);
                }, time);
            }
        }
    }, [ ready ]);

    useEffect(() => {
        if(storeError){
            setError(storeError);
            clearStoreError();
        }
    }, [ storeError ]);

    useEffect(() => {
        setLoading(storeLoading);
    }, [ storeLoading ]);

    useEffect(() => {
        if(resultStore){
            const {
                operation,
                img,
                res
            } = resultStore;
            if(img?.uuid === uuid){
                switch(operation){
                    case 'add':
                        break;
                    case 'put':
                        break;
                    case 'delete':
                        setWidth(0.4);
                        setTitle("");
                        setDescription("");
                        setFileType("");
                        setImage("");
                        break;
                    case 'get':
                        if(!img){
                            addImage({
                                uuid,
                                image: '',
                            });
                            return;
                        }
                        setImage(img.image);
                        clearStoreResult();
                        break;
                }
            }
        }
    }, [ resultStore ]);

    useEffect(() => {
        if(image){
            const [ ,type ] = image.match(/^data.*?\/(.*?);/)??[];
            putImage({
                uuid,
                image,
            });
            setFileType(type);
        }
    }, [ image ]);

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
                        .then(res => {
                            return res.blob();
                        })
                        .then(blob => {
                            return new Promise((resolve, reject) => {
                                const reader = new FileReader();
                                reader.onload = () => {
                                    resolve(reader.result);
                                }
                                reader.onerror = reject;
                                reader.readAsDataURL(blob);
                            });
                        })
                        .catch(err => {
                            setError(err);
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
    }, [ imageUrl ]);

    useEffect(() => {
        if(context?.pluginData){
            if(uuid !== null && uuid !== undefined) context.pluginData.uuid = uuid;
            if(width) context.pluginData.width = width;
            if(title) context.pluginData.title = title;
            if(description) context.pluginData.description = description;
            if(fileType) context.pluginData.fileType = fileType;
        }
    }, [ uuid, width, title, description, fileType ]);

    const setImageState: ImageSetter = (context, val) => {
        switch(context){
            case 'imageUrl':
                setImageUrl(val as SetStateAction<string>);
                break;
            case 'image':
                setImage(val as SetStateAction<string>);
                break;
            // case 'uuid':
            //     setUuid(val as SetStateAction<string>);
            //     break;
            case 'title':
                setTitle(val as SetStateAction<string>);
                break;
            case 'description':
                setDescription(val as SetStateAction<string>);
                break;
            case 'width':
                setWidth(val as SetStateAction<number>);
                break;
            case 'fileType':
                setFileType(val as SetStateAction<string>);
                break;
        }
    }

    const erase = () => {
        delImage(uuid);
    }

    return {
        error,
        loading,
        state: {
            imageUrl,
            image,
            width,
            title,
            description,
            fileType,
        },
        setImageState,
        erase,
    }
}