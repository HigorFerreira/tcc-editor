import { ContextType } from './types';

export const defaultContext: ContextType = {
    isStorageLoading: false,
    error: null,
    useImageStore: {
        error: null,
        result: null,
        loading: false,
        addImage: () => {},
        putImage: () => {},
        getImage: () => {},
        delImage: () => {},
        clearError: () => {},
        clearResult: () => {},
    },
    useBlocksStorage: {
        result: null,
        error: null,
        loading: false,
        addBlock: () => {},
        clearError: () => {},
        clearResult: () => {},
        deleteBlock: () => {},
        getBlock: () => {},
        putBlock: () => {},
    }
}