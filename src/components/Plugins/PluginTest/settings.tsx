import { useCount } from '@/components/Plugins/PluginTest';

export default function Settings(){

    const [ count, setCount ] = useCount();

    return <div>
        <h4>Menu</h4>
        <p>{ count }</p>
        <button onClick={() => setCount(prev => prev-1)} >Sub</button>
    </div>
}