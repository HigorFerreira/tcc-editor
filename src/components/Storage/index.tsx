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
} from './hooks';

export * from './exports';

export const Context = createContext<{
    isStorageLoading: boolean
    error: Error | null
    useImageStore: ReturnType<typeof useImageStore>
}>({
    isStorageLoading: false,
    error: null,
    useImageStore: {
        loading: false,
        error: null,
        result: null,
        clearError: () => {},
        clearResult: () => {},
        getOrCreateImageEntry: () => {},
        putImage: () => {},
        getImage: () => {},
    }
});

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

    useEffect(() => {
        setReady(true);
    }, []);

    useEffect(() => {
        (async () => {
            try{
                setIsStorageLoading(true);
                if(ready){
                    const _db = await openDb("MyTCC", db => {
                        db.createObjectStore('images', { keyPath: 'uuid' });
                        db.createObjectStore('mainBlocks');
                    });

                    setDb(db);
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
        console.log({ db });
    }, [ db ]);

    return <Context.Provider value={{
        useImageStore: _useImageStore,
        isStorageLoading,
        error,
    }}>
        { children }
    </Context.Provider>
}