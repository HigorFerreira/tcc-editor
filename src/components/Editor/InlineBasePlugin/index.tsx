import { EditorBlockConstructorProps } from '@/components/Editor/types';
import {
    DetailRenderEventType,
    DetailSurroundEventType,
    DetailCheckStateEventType,
} from '@/components/Editor/InlineBasePlugin/types';

/**
 * @template - D plugin data type
 */
export default abstract class InlineBasePlugin<D = unknown> {
    public api: EditorBlockConstructorProps['api'];
    public block: EditorBlockConstructorProps['block'];
    public config: EditorBlockConstructorProps['config'];
    public data: D;
    public readOnly: EditorBlockConstructorProps['readOnly'];

    public pluginData: D

    public name: string
    public uuid: string
    public pluginId: string

    constructor(
        {
            api,
            block,
            config,
            data,
            readOnly,
        }: EditorBlockConstructorProps
    ){
        this.api = api;
        this.block = block;
        this.config = config;
        this.data = data;
        this.pluginData = data;
        this.readOnly = readOnly;

        this.name = this.getName();
        this.uuid = this.getUuid();
        this.pluginId = `in-line-plugin-${this.name}`;
    }

    public render(){
        const wrapper = document.createElement('div');
        wrapper.id = this.pluginId;

        const ev = new CustomEvent<DetailRenderEventType>('editor-in-line-plugin-render', {
            detail: {
                context: this
            }
        });
        setTimeout(() => document.dispatchEvent(ev), 20);

        return wrapper;
    }

    public surround(range: Range){
        const ev = new CustomEvent<DetailSurroundEventType>('editor-in-line-plugin-surround', {
            detail: {
                context: this,
                range
            }
        });
        document.dispatchEvent(ev);
    }

    public checkState(selection: Selection){
        const ev = new CustomEvent<DetailCheckStateEventType>('editor-in-line-plugin-check-state', {
            detail: {
                context: this,
                selection
            }
        });
        document.dispatchEvent(ev);
    }



    abstract getName(): string
    abstract getUuid(): string
}