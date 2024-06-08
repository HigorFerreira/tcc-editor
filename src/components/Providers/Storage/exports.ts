import { useContext } from 'react';

import { Context } from '.'

export function useImageStore(){
    const { useImageStore } = useContext(Context);
    return useImageStore;
}

export function useStorage(){
    const { error, isStorageLoading } = useContext(Context);
    return {
        isStorageLoading,
        error
    }
}

export function useBlocksStorage() {
    const { useBlocksStorage } = useContext(Context);
    return useBlocksStorage;
}