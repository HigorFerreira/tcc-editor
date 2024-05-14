import { EditorBlockConstructorProps } from '@/components/Editor/types';
import { TunesMenuConfigItem } from '@editorjs/editorjs/types/tools';

/**
 * @template - D plugin data type
 */
export default abstract class BasePlugin<D = unknown> {
    public api: EditorBlockConstructorProps['api'];
    public block: EditorBlockConstructorProps['block'];
    public config: EditorBlockConstructorProps['config'];
    public data: D;
    public readOnly: EditorBlockConstructorProps['readOnly'];

    public pluginData: D

    public name: string
    public uuid: string
    public pluginId: string
    public settingsId: string

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
        this.pluginId = `${this.name}-${this.uuid}`;
        this.settingsId = `settings-${this.name}-${this.uuid}`;
        // this.pluginData = {};
    }

    static get toolbox() {
        return {
            title: 'Plugin',
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.=09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0z"></path></svg>`,
        };
    }

    public render(){
        const wrapper = document.createElement('div');
        wrapper.id = this.pluginId;

        const ev = new CustomEvent<{ context: BasePlugin }>('editor-plugin-render', {
            detail: {
                context: this
            }
        });
        setTimeout(() => document.dispatchEvent(ev), 20);

        return wrapper;
    }

    public renderSettings(): HTMLElement | TunesMenuConfigItem[] {    
        const ev = new CustomEvent<{ context: BasePlugin }>('editor-plugin-settings-render', {
            detail: {
                context: this
            }
        });

        const wrapper = document.createElement('div');
        wrapper.id = this.settingsId;
        wrapper.style.overflow = "auto";

        setTimeout(() => {
            document.dispatchEvent(ev);
        }, 20);

        return wrapper;
    }

    public destroy(){
        const ev = new CustomEvent<{ context: BasePlugin }>('editor-plugin-unmount', {
            detail: {
                context: this
            }
        });
        
        document.dispatchEvent(ev);        
    }

    public save(){
        return this.pluginData;
    }

    // Plugin hooks
    public rendered(){
        // console.log('Tool rendered');
        
    }

    public updated(){
        // console.log('Tool updated');
        const ev = new CustomEvent<{ context: BasePlugin }>('editor-plugin-update', {
            detail: {
                context: this
            }
        });
        document.dispatchEvent(ev);
    }

    public removed(){
        // console.log('Tool removed');
    }

    public moved(){
        // console.log('Tool moved');
    }

    abstract getName(): string
    abstract getUuid(): string
}