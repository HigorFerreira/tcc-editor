import { useEffect, useState } from "react";
import {
    DbImage,
    ResultType,
    DbEditorBlocks,
    EditorSave,
} from './types';
import {
    add,
    put,
    get,
    del,
} from '@/utils/db/helpers';
import { v4 as uuidv4 } from 'uuid';

export function useImageStore(db?: IDBDatabase){
    const [ loading, setloading ] = useState(false);
    const [ error, setError ] = useState<Error | null>(null);
    const [ result, setResult ] = useState<ResultType>(null);

    function clearError(){
        setError(null);
    }

    function clearResult(){
        setResult(null);
    }

    function addImage(img: DbImage){
        setloading(true);
        const req = db?.transaction('images', 'readwrite')
            .objectStore('images')
            .add(img)

        if(req){
            req.onerror = evt => {
                setError((evt.target as any).error);
                setloading(false);
            }

            req.onsuccess = evt => {
                setResult({
                    res: (evt.target as any).result,
                    operation: 'add',
                    img,
                });
                setloading(false);
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
                setResult({
                    res: (evt.target as any).result,
                    operation: 'put',
                    img,
                });
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
                setResult({
                    res: (evt.target as any).result,
                    img: (evt.target as any).result,
                    operation: 'get',
                });
                setloading(false);
            }
        }
    }

    function delImage(uuid: DbImage['uuid']){
        setloading(true);
        const req = db?.transaction('images', 'readwrite')
            .objectStore('images')
            .delete(uuid)

        if(req){
            req.onerror = evt => {
                setError((evt.target as any).error);
                setloading(false);
            }
            req.onsuccess = evt => {
                setResult({
                    img: (evt.target as any).result,
                    res: (evt.target as any).result,
                    operation: 'delete',
                });
                setloading(false);
            }
        }
    }

    return {
        error,
        result,
        loading,
        addImage,
        putImage,
        getImage,
        delImage,
        clearError,
        clearResult,
    }
}

export function useBlocksStorage(db?: IDBDatabase){
    const [ uuid, setUuid ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState<Error | null>(null);
    const [ result, setResult ] = useState<EditorSave | null>(null);

    useEffect(() => {
        if(window !== undefined){
            const savedUuid = localStorage.getItem('blocks-key');
            if(savedUuid){
                setUuid(savedUuid);
                return
            }
            const uuid = uuidv4();
            localStorage.setItem('blocks-key', uuid);
            setUuid(uuid);
        }
    }, []);

    function clearError(){
        setError(null);
    }

    function clearResult(){
        setResult(null);
    }

    function addBlock(blocks: EditorSave | null){
        setLoading(true);
        add<DbEditorBlocks, DbEditorBlocks>({
            db,
            opts: {
                objName: 'mainBlocks',
                mode: 'readwrite',
                obj: {
                    id: uuid,
                    editor: blocks
                },
                onFinally: () => {
                    setLoading(false);
                },
                onError: error => {
                    setError(error);
                },
                onSuccess: result => {
                    console.log('Add result', result);
                    // setResult(result.editor);
                }
            }
        });
    }

    function putBlock(blocks: EditorSave | null){
        setLoading(true);
        put<DbEditorBlocks, DbEditorBlocks>({
            db,
            opts: {
                objName: 'mainBlocks',
                mode: 'readwrite',
                obj: {
                    id: uuid,
                    editor: blocks
                },
                onFinally: () => {
                    setLoading(false);
                },
                onError: error => {
                    setError(error);
                },
                onSuccess: result => {
                    console.log('Put result', result);
                    // setResult(result.editor);
                }
            }
        });
    }

    function getBlock(){
        setLoading(true);
        get<DbEditorBlocks, DbEditorBlocks>({
            db,
            opts: {
                objName: 'mainBlocks',
                key: uuid,
                onFinally: () => {
                    setLoading(false);
                },
                onError: error => {
                    setError(error);
                },
                onSuccess: result => {
                    if(result){
                        setResult(result.editor);
                    }
                }
            }
        });
    }

    function deleteBlock(){
        setLoading(true);
        del<DbEditorBlocks, DbEditorBlocks>({
            db,
            opts: {
                objName: 'mainBlocks',
                key: uuid,
                mode: 'readwrite',
                onFinally: () => {
                    setLoading(false);
                },
                onError: error => {
                    setError(error);
                },
                onSuccess: result => {
                    console.log({ result });
                    // setResult(result.editor);
                }
            }
        });
    }

    return {
        error,
        result,
        loading,
        clearError,
        clearResult,
        deleteBlock,
        addBlock,
        putBlock,
        getBlock,
    }
}