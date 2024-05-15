import { EditorBlockConstructorProps } from '@/components/Editor/types';
import {
    DetailRenderEventType,
    DetailUnmountEventType,
    DetailSurroundEventType,
    DetailCheckStateEventType,
} from '@/components/Editor/InlineBasePlugin/types';

/**
 * @template - D plugin data type
 */
export default abstract class InlineBasePlugin<D = unknown> {
    private observer: MutationObserver | null = null;
    private wrapper: HTMLDivElement;
    public api: EditorBlockConstructorProps['api'];
    public block: EditorBlockConstructorProps['block'];
    public config: EditorBlockConstructorProps['config'];
    public data: D;
    public readOnly: EditorBlockConstructorProps['readOnly'];

    public pluginData: D

    public name: string
    public uuid: string
    public pluginId: string
    public tag: string

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
        this.pluginId = `in-line-plugin-${this.name}-${this.uuid}`;
        this.tag = `plugin-${this.name}`.toUpperCase();

        this.wrapper = document.createElement('div');
        this.wrapper.id = this.pluginId;
        this.wrapper.style.display = 'flex';
        this.wrapper.style.justifyContent = 'center';
        this.wrapper.style.alignItems = 'center';
    }

    static get isInline() {
        return true;
    }

    public render(): HTMLElement {
        setTimeout(() => {
            this.observer = new MutationObserver((mutations, observer) => {
                for(const mutation of mutations){
                    if(mutation.type === 'childList'){
                        mutation.removedNodes.forEach(__node => {
                            const node = __node as HTMLElement | null;
                            if(node?.id === this.pluginId){
                                const ev = new CustomEvent<DetailUnmountEventType>('InlineToolUnmount', {
                                    detail: {
                                        name: this.name,
                                        uuid: this.uuid,
                                        pluginId: this.pluginId,
                                    }
                                });
                                document.dispatchEvent(ev);
                            }
                        })
                    }
                }
            });


            if(!this.wrapper.parentElement) throw new Error("No parent element for wrapper");
            this.observer.observe(this.wrapper.parentElement, { childList: true, subtree: true });
        }, 20);

        setTimeout(() => {
            const ev = new CustomEvent<DetailRenderEventType>('InlineToolRender', {
                detail: {
                    context: this
                }
            });
            document.dispatchEvent(ev);
        }, 60);

        return this.wrapper;
    }

    public surround(range: Range){
        const ev = new CustomEvent<DetailSurroundEventType>('InlineToolSurround', {
            detail: {
                context: this,
                range
            }
        });
        document.dispatchEvent(ev);
    }

    public checkState(selection: Selection){
        const ev = new CustomEvent<DetailCheckStateEventType>('InlineToolCheckState', {
            detail: {
                context: this,
                selection
            }
        });
        document.dispatchEvent(ev);
    }

    public save(){
        return this.pluginData;
    }


    abstract getName(): string
    abstract getUuid(): string
}