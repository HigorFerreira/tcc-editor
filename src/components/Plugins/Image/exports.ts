import { useContext } from 'react';
import { Context } from '@/components/Plugins/Image';

export function useImageState(){
    const { useImage } = useContext(Context);
    return useImage?.state;
}

export function useSetImageState(){
    const { useImage } = useContext(Context);
    return useImage?.setImageState;
}

export function useLoading(){
    const { useImage } = useContext(Context);
    return useImage?.loading;
}

export function useErase(){
    const { useImage } = useContext(Context);
    return useImage?.erase;
}