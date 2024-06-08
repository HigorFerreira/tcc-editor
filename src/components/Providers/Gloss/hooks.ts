import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Context } from '@/components/Providers/Gloss';
import { GlossaryType } from '@/parser/types';

export function useAddAcronm(){
    const { setGloss, setIndexGloss } = useContext(Context);

    function addAcronm(abbrev: Omit<GlossaryType, 'type'>){
        const uuid = uuidv4();
        const { label, short } = abbrev;
        setGloss(prev => ({
            ...prev,
            [uuid]: {
                ...abbrev,
                type: 'sigla'
            }
        }));
        setIndexGloss(prev => ({
            ...prev,
            [uuid]: {
                uuid,
                type: 'sigla',
                label: label.toLowerCase(),
                short: short.toLowerCase(),
                complete: `${short.toLowerCase()} ${label.toLowerCase()}`,
                created_at: new Date(),
            }
        }));
    }

    return addAcronm;
}

export function useAddAbbrev(){
    const { setGloss, setIndexGloss } = useContext(Context);

    function addAbbrev(abbrev: Omit<GlossaryType, 'type'>){
        const uuid = uuidv4();
        const { label, short } = abbrev;
        setGloss(prev => ({
            ...prev,
            [uuid]: {
                ...abbrev,
                type: 'abreviacao'
            }
        }));
        setIndexGloss(prev => ({
            ...prev,
            [uuid]: {
                uuid,
                type: 'abreviacao',
                label: label.toLowerCase(),
                short: short.toLowerCase(),
                complete: `${short.toLowerCase()} ${label.toLowerCase()}`,
                created_at: new Date(),
            }
        }));
    }

    return addAbbrev;
}

export function useGlossList(){
    const { indexGloss, gloss } = useContext(Context);

    return Object
        .keys(indexGloss)
        .map(key => {
            const { created_at, uuid, complete } = indexGloss[key];
            return {
                uuid,
                created_at,
                indexed: complete
            } as {
                uuid: string
                indexed: string
                created_at: Date
            }
        })
        .sort(({ created_at: a }, { created_at: b }) => a.getMilliseconds() - b.getMilliseconds())
        .map(({ uuid, ...rest }) => ({ ...gloss[uuid], uuid, ...rest }))
}

export function useDeleteGloss(){
    const { setGloss, setIndexGloss } = useContext(Context);
    function deleteGloss(uuid: string){
        setGloss(prev => {
            const newObj = Object.assign({}, prev);
            delete newObj[uuid];
            return newObj;
        });
        setIndexGloss(prev => {
            const newObj = Object.assign({}, prev);
            delete newObj[uuid];
            return newObj;
        });
    }

    return deleteGloss
}