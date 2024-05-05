'use client';
import {
    useState,
    useEffect,
    createContext,
    type PropsWithChildren,
} from "react";

import {
    openDb,
} from '@/utils/db';

import {
    useImageStore,
    useBlocksStorage,
} from './hooks';

import {
    ContextType,
} from './types';

import {
    defaultContext,
} from './utils';

export * from './exports';

export const Context = createContext<ContextType>(defaultContext);

export default function Storage(
    {
        children
    }: PropsWithChildren
){
    const [ ready, setReady ] = useState(false);
    const [ isStorageLoading, setIsStorageLoading ] = useState(true);
    const [ error, setError ] = useState<Error | null>(null);

    const [ db, setDb ] = useState<IDBDatabase>();

    const _useImageStore = useImageStore(db);
    const _useBlocksStorage = useBlocksStorage(db);

    useEffect(() => {
        setReady(true);
        return () => {
            // _useBlocksStorage.deleteBlock();
        }
    }, []);

    useEffect(() => {
        (async () => {
            try{
                setIsStorageLoading(true);
                if(ready){
                    const _db = await openDb("MyTCC", db => {
                        db.createObjectStore('images', { keyPath: 'uuid' });
                        db.createObjectStore('mainBlocks', { keyPath: 'id' });
                    });

                    setDb(_db);
                }
            }
            catch(err){
                if(err instanceof Event){
                    setError((err.target as any).error);
                }
                setError(err as Error);
            }
            finally{
                setIsStorageLoading(false);
            }
        })();
    }, [ ready ]);

    useEffect(() => {
        if(db){
            _useBlocksStorage.addBlock(null);
        }
    }, [ db ]);

    useEffect(() => {
        console.log({ result: _useBlocksStorage.result });
    }, [ _useBlocksStorage.result ]);

    return <Context.Provider value={{
        useBlocksStorage: _useBlocksStorage,
        useImageStore: _useImageStore,
        isStorageLoading,
        error,
    }}>
        { children }
    </Context.Provider>
}