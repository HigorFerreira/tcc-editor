import type EditorJS from '@editorjs/editorjs'
import type { BlockAPI } from '@editorjs/editorjs'

export default class SimpleImage {
    private api: EditorJS;
    private block: BlockAPI;
    private data: any;
    private wrapper: HTMLDivElement
    private settings: Array<{ name: string, icon: string }>
    private config: { [k: string]: unknown }
    

    constructor(
        {
            data,
            api,
            block,
            config
        }: {
            data: any
            api: EditorJS
            block: BlockAPI
            config: { [k: string]: unknown }
        }
    ){
        this.api = api;
        this.block = block;
        this.config = config;
        console.log("API", this.api);
        console.log("BLOCK API", this.block);
        this.data = {
            url: data.url || '',
            caption: data.caption || '',
            settings: {
                withBorder: data.withBorder !== undefined ? data.withBorder : false,
                withBackground: data.withBackground !== undefined ? data.withBackground : false,
                stretched: data.stretched !== undefined ? data.stretched : false,
            }
        }
        // @ts-ignore
        this.wrapper = undefined

        this.settings = [
            {
                name: 'withBorder',
                icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>`
            },
            {
                name: 'stretched',
                icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>`
            },
            {
                name: 'withBackground',
                icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>`
            }
        ];
    }

    static get toolbox(){
        return {
            title: 'Image',
            icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
        }
    }

    _createImage(url: string, captionText: string = ""){
        const image = document.createElement('img');
        const caption = document.createElement('div');

        image.src = url;
        // @ts-ignore
        caption.contentEditable = true
        caption.innerHTML = captionText || ''

        this.wrapper.innerHTML = '';
        this.wrapper.appendChild(image);
        this.wrapper.appendChild(caption);

        this._acceptTuneView();
    }

    render(){
        this.wrapper = document.createElement("div")
        this.wrapper.classList.add("simple-image")

        if(this.data && this.data.url){
            this._createImage(this.data.url, this.data.caption)
            return this.wrapper
        }

        const input = document.createElement("input")

        input.placeholder = this.config.placeholder as string || 'Paste an image URL...';
        input.value = this.data && this.data.url ? this.data.url : ''
        
        this.wrapper.appendChild(input)
        
        input.addEventListener('paste', evt => {
            this._createImage(evt.clipboardData?.getData('text') || "")
        })

        return this.wrapper
    }

    save(blockContent: HTMLElement){
        const image = blockContent.querySelector('img');
        const caption = blockContent.querySelector('[contentEditable]');

        return Object.assign(this.data, {
            // @ts-ignore
            url: image.src,
            // @ts-ignore
            caption: this.api.sanitizer.clean(caption?.innerHTML || '', {
                b: true,
                a: {
                    href: true,
                },
                i: true
            })
        });
    }

    validate(savedData: any){
        if(!savedData.url.trim()){
            return false;
        }

        return true;
    }

    renderSettings(){
        const wrapper = document.createElement('div');

        this.settings.forEach( tune => {
            let button = document.createElement('div');

            button.classList.add(this.api.styles.settingsButton);
            button.classList.toggle(this.api.styles.settingsButtonActive, this.data.settings[tune.name]);
            button.innerHTML = tune.icon;
            wrapper.appendChild(button);

            button.addEventListener('click', () => {
                this._toogleTune(tune.name);
                button.classList.toggle(this.api.styles.settingsButtonActive);
            })
        });

        return wrapper;
    }

    /**
     * Click on the settings button
     * @param {string} tune tune — tune name from this.settings
     */
    private _toogleTune(tune: string){
        // console.log("Image tune clicked", tune);
        this.data.settings[tune] = !this.data.settings[tune];
        this._acceptTuneView();
    }

    /**
     * 
     */
    private _acceptTuneView(){
        this.settings.forEach(tune => {
            this.wrapper.classList.toggle(tune.name, !!this.data.settings[tune.name]);

            if(tune.name === "stretched"){
                // this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.settings.stretched);
                this.block.stretched = !!this.data.settings.stretched;
            }
        })
    }

    static get pasteConfig(){
        return {
            tags: [ 'IMG' ],
            files: {
                mimeTypes: ['image/*'],
                extensions: ['gif', 'jpg', 'png']
            },
            patterns: {
                image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg)$/i
            }
        }
    }

    onPaste(event: any){
        switch(event.type){
            case 'tag':
                const imgTag = event.detail.data;
                this._createImage(imgTag.src);
                break;
            case 'file':
                const file = event.detail.file;
                const reader = new FileReader();

                reader.onload = (loadEvent: any) => {
                    this._createImage(loadEvent.target.result);
                }

                reader.readAsDataURL(file);
                break;
            case 'pattern':
                const src = event.detail.data;
        
                this._createImage(src);
                break;
        }
    }
}