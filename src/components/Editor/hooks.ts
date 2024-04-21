import { useContext } from 'react';
import { Context } from '@/components/Editor';

export function useEditor(){
    const { editor } = useContext(Context);
    return editor;
}