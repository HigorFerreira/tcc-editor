import React from 'react'
import ReactDOM from 'react-dom/client'

import { Components, EditorBlockConstructorProps } from '@/types/EditorJs'

export default abstract class BaseEdidorJSPlugin {
    private components: Components

    public api: EditorBlockConstructorProps['api'];
    public block: EditorBlockConstructorProps['block'];
    public config: EditorBlockConstructorProps['config'];
    public data: EditorBlockConstructorProps['data'];
    public readOnly: EditorBlockConstructorProps['readOnly'];


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
        this.readOnly = readOnly;

        
        const mainWrapper = document.createElement("div");
        const settingsWrapper = document.createElement("div");
        this.components = {
            main: {
                wrapper: mainWrapper,
                root: ReactDOM.createRoot(mainWrapper)
            },
            settings: {
                wrapper: settingsWrapper,
                root: ReactDOM.createRoot(settingsWrapper)
            },
        }
    }

    static get toolbox() {
        return {
            title: 'Plugin',
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0z"></path></svg>`,
        };
    }

    private render(){
        this.components.main.root.render(
            this.getReactComponent()
        );
        return this.components.main.wrapper;
    }

    private renderSettings(){
        this.components.settings.root.render(
            this.getSettingsReactComponent()
        );
        return this.components.settings.wrapper;
    }

    private destroy(){
        for(const key of Object.keys(this.components)){
            const component = this.components[key];
            component.root.unmount();
            component.wrapper = null;
        }
    }

    abstract getReactComponent(): React.ReactNode
    abstract getSettingsReactComponent(): React.ReactNode
    abstract save(): any

    // protected getReactComponent<T extends BaseEdidorJSPlugin>(): React.FunctionComponent<{ context: T }> {
    //     return () => <div>
    //         <h1>New Plugin</h1>
    //     </div>
    // }

    // protected getSettingsReactComponent<T extends BaseEdidorJSPlugin>(): React.FunctionComponent<{ context: T }> {
    //     return () => <div>
    //         <p>New plugin settings</p>
    //     </div>
    // }

    // protected save(){
    //     return {
    //         new: 'Plugin'
    //     }
    // }
}