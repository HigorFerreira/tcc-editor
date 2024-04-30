import ImageClass from "@/components/Plugins/Image/class";
import { openDb } from '@/utils/db';
import { SetStateAction, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    DataType,
    ImageSetter,
    DbImage,
} from "@/components/Plugins/Image/types";

export function useImage(context?: ImageClass<DataType>){
    const [ ready, setReady ] = useState(false);
    const [ uuid, setUuid ] = useState(uuidv4());
    const [ width, setWidth ] = useState(0.4);
    const [ image, setImage ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ db, setDb ] = useState<IDBDatabase | null>(null);

    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState<Error | null>(null);

    useEffect(() => {
        setReady(true);
        
        return () => {
            db?.transaction('images', 'readwrite')
                .objectStore('images')
                .delete(uuid)
        }
    }, []);

    useEffect(() => {
        (async () => {
            try{
                if(ready){
                    console.log('ready')
                    setLoading(true);

                    if(context?.data?.uuid){
                        setUuid(context.data.uuid);
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

                    const _db = await openDb('MyTCC', db => {
                        db.createObjectStore('images', { keyPath: 'uuid' });
                    });

                    setDb(_db);

                    const img = await (() => new Promise((resolve, reject) => {
                        const req = _db.transaction('images')
                            .objectStore('images')
                            .get(uuid);
                        
                        req.onerror = evt => reject(evt);
                        req.onsuccess = evt => {
                            const img = (evt.target as any)?.result as DbImage
                            if(img) resolve(img);
                            else{
                                const defaultImage = {
                                    uuid,
                                    image: ''
                                } satisfies DbImage;

                                const setReq = _db.transaction("images", "readwrite")
                                    .objectStore("images")
                                    .add(defaultImage);

                                setReq.onerror = evt => reject(evt);
                                setReq.onsuccess = evt => {
                                    resolve(defaultImage);
                                }
                            }
                        }
                    }))() as DbImage;

                    // setImage(img.image);
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
                if(image && db){
                    setLoading(true);
                    await (() => new Promise((resolve, reject) => {
                        const img = {
                            uuid,
                            image
                        } satisfies DbImage
                        console.log({ img });
                        const putReq = db.transaction('images', 'readwrite')
                            .objectStore('images')
                            .put(img);
                        
                        putReq.onerror = evt => reject(evt);
                        putReq.onsuccess = evt => resolve((evt.target as any).result);
                    }))();
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

    //#endregion

    const clearError = () => {
        setError(null);
    }

    const clear = () => {
        (async () => {
            try{
                if(db){
                    setLoading(true);
                    await (() => new Promise((resolve, reject) => {
                        const updateReq = db.transaction('images', 'readwrite')
                            .objectStore('images')
                            .put({
                                uuid,
                                image: ''
                            } satisfies DbImage);
                        updateReq.onerror = evt => reject(evt);
                        updateReq.onsuccess = evt => resolve((evt.target as any)?.result)
                    }))();
                    setImage('');
                    setTitle('');
                    setDescription('');
                    setWidth(0.4);
                }
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
            title,
            description,
            width,
            uuid,
        },
        db,
        loading,
        error,
        setImageState,
        clearError,
        clear,
    }

}