import BasePlugin from '@/components/Editor/BasePlugin';
import { PropsWithChildren, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export class PluginClass extends BasePlugin {
    getName(): string {
        return 'test-plugin'
    }

    getUuid(): string {
        return uuidv4();
    }
}

export default function TestPlugin(
    {
        context
    }: PropsWithChildren<{ context?: BasePlugin }>
){
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        console.log(context);
    }, []);

    useEffect(() => {
        console.log({ count });
    }, [ count ]);

    return <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev+1)} >Add</button>
    </div>
}