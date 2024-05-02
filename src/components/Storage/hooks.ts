import { useState } from "react";
import { DbImage } from './types'

export function useImageStore(db?: IDBDatabase){
    const [ loading, setloading ] = useState(false);
    const [ error, setError ] = useState<Error | null>(null);
    const [ result, setResult ] = useState<DbImage | null>(null);

    function clearError(){
        setError(null);
    }

    function clearResult(){
        setResult(null);
    }

    function getOrCreateImageEntry(uuid: DbImage['uuid']){
        setloading(true);
        const getRequest = db?.transaction('images')
            .objectStore('images')
            .get(uuid);
        
        if(getRequest){
            getRequest.onerror = evt => {
                setError((evt.target as any).error);
                setloading(false);
            }
            getRequest.onsuccess = evt => {
                const img = (evt.target as any)?.result as DbImage
                if(img){
                    setResult(img);
                    setloading(false);
                }
                else{
                    const defaultImage = {
                        uuid,
                        image: ''
                    } satisfies DbImage;
    
                    const setReq = db?.transaction("images", "readwrite")
                        .objectStore("images")
                        .add(defaultImage);
    
                    if(setReq){
                        setReq.onerror = evt => {
                            setError((evt.target as any).error);
                            setloading(false);
                        }
                        setReq.onsuccess = evt => {
                            setResult(defaultImage);
                            setloading(false);
                        }
                    }
                }
            }
        }
    }

    function putImage(img: DbImage){
        setloading(true);
        const putReq = db?.transaction('images', 'readwrite')
            .objectStore('images')
            .put(img);
        
        if(putReq){
            putReq.onerror = evt => {
                setError((evt.target as any).error);
                setloading(false);
            };
            putReq.onsuccess = evt => {
                setResult((evt.target as any).result);
                setloading(false);
            }
        }
    }

    function getImage(uuid: DbImage['uuid']){
        setloading(true);
        const getRequest = db?.transaction('images')
            .objectStore('images')
            .get(uuid);
        
        if(getRequest){
            getRequest.onerror = evt => {
                setError((evt.target as any).error);
                setloading(false);
            }
            getRequest.onsuccess = evt => {
                setResult((evt.target as any).result);
                setloading(false);
            }
        }
    }

    return {
        loading,
        error,
        result,
        clearError,
        clearResult,
        getOrCreateImageEntry,
        putImage,
        getImage,
    }
}