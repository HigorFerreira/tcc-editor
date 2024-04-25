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

import { v4 as uuidv4 } from 'uuid';
import { createPortal } from 'react-dom';
import BasePlugin from '@/components/Editor/BasePlugin';

import Settings from '@/components/Plugins/PluginTest/settings'

export class PluginClass extends BasePlugin {
    getName(): string {
        return 'test-plugin'
    }

    getUuid(): string {
        return uuidv4();
    }
}

const Context = createContext<{
    count: number
    setCount: Dispatch<SetStateAction<number>>
}>({ count: 0, setCount: () => {} });

export function useCount(): [ number, Dispatch<SetStateAction<number>> ] {
    const { count, setCount } = useContext(Context);
    return [ count, setCount ];
}

export default function TestPlugin(
    {
        context
    }: PropsWithChildren<{ context?: BasePlugin }>
){
    const [ ready, setReady ] = useState(false);
    const [ count, setCount ] = useState(0);

    const [ settings, setSettings ] = useState<ReactNode | null>(null);

    useEffect(() => {
        // console.log(context);
        setReady(true);
    }, []);

    useEffect(() => {
        if(ready){
            console.log('Plugin ready')
            document.addEventListener('editor-plugin-settings-render', e => {
                if(context?.pluginId === (e as any)?.detail?.context?.pluginId){
                    setSettings(<Settings />);
                }
            })
        }
    }, [ ready ]);

    useEffect(() => {
        // console.log({ count });
        if(context?.pluginData){
            context.pluginData = {
                ...context.pluginData,
                count
            }
        }
    }, [ count ]);

    const settingsContainer = document.getElementById(context?.settingsId || '')

    return <Context.Provider value={{ count, setCount }}>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev+1)} >
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