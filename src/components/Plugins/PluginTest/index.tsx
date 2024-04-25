import {
    Dispatch,
    PropsWithChildren,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

import { createPortal } from 'react-dom';
import BasePlugin from '@/components/Editor/BasePlugin';

import { State } from '@/components/Plugins/PluginTest/types';
import Settings from '@/components/Plugins/PluginTest/settings';

const Context = createContext<{
    state: State
    setState: Dispatch<SetStateAction<State>>
}>({ state: { count: 0 }, setState: () => {} });

export function useCount(): [ number, (cb: (prev: number) => number) => void ] {
    const { state, setState } = useContext(Context);

    function setCount(cb: (prev: number) => number){
        setState(prev => {
            return {
                ...prev,
                count: cb(prev.count)
            }
        });
    }

    return [
        state.count,
        setCount
    ]
}

export default function TestPlugin(
    {
        context
    }: PropsWithChildren<{ context?: BasePlugin }>
){
    const [ ready, setReady ] = useState(false);
    
    const [ state, setState ] = useState<State>({
        count: 0,
    });

    const [ settings, setSettings ] = useState<ReactNode | null>(null);

    useEffect(() => {
        // console.log(context);
        setReady(true);
    }, []);

    useEffect(() => {
        if(ready){
            console.log('Plugin ready');
            document.addEventListener('editor-plugin-settings-render', e => {
                if(context?.pluginId === (e as any)?.detail?.context?.pluginId){
                    setSettings(<Settings />);
                }
            });

            // console.log({ pData: context?.pluginData });
            // console.log(context?.pluginId);
        }
    }, [ ready ]);

    useEffect(() => {
        // console.log({ count });
        if(context?.pluginData){
            context.pluginData = {
                ...context.pluginData,
                ...state
            }
        }
    }, [ state ]);

    const settingsContainer = document.getElementById(context?.settingsId || '')

    return <Context.Provider value={{ state, setState }}>
        <p>Count: {state.count}</p>
        <button onClick={() => setState(prev => ({ ...prev, count: prev.count+1 }))} >
            Add
        </button>
        {
            settings && context?.settingsId && settingsContainer &&
            createPortal(
                settings,
                settingsContainer
            )
        }
    </Context.Provider>
}