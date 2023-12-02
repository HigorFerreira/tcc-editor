import EditorJS from "@editorjs/editorjs";

export default class MarkerTool {
    private api: EditorJS;
    private button: HTMLButtonElement | null;
    private _state: boolean;

    private tag: string
    private class: string

    get state(){
        return this._state;
    }

    set state(state: boolean){
        this._state = state;
        this.button?.classList.toggle(this.api.styles.inlineToolButtonActive, state);
    }

    constructor(
        {
            api
        }: {
            api: EditorJS
        }
    ){
        this.api = api;
        this.button = null;
        this._state = false;

        this.tag = 'MARK';
        this.class = 'cdx-marker';
    }

    static get isInline() {
        return true;
    }

    render(){
        this.button = document.createElement("button");
        this.button.type = "button";
        this.button.textContent = "M";
        this.button.innerHTML = '<svg width="20" height="18"><path d="M10.458 12.04l2.919 1.686-.781 1.417-.984-.03-.974 1.687H8.674l1.49-2.583-.508-.775.802-1.401zm.546-.952l3.624-6.327a1.597 1.597 0 0 1 2.182-.59 1.632 1.632 0 0 1 .615 2.201l-3.519 6.391-2.902-1.675zm-7.73 3.467h3.465a1.123 1.123 0 1 1 0 2.247H3.273a1.123 1.123 0 1 1 0-2.247z"/></svg>';
        this.button.classList.add(this.api.styles.inlineToolButton);

        return this.button;
    }

    surround(range: Range){
        console.log({ range });
        if (this.state) {
            this.unwrap(range);
            return;
        }

        this.wrap(range);
    }

    wrap(range: Range){
        const selectedText = range.extractContents();
        console.log({ selectedText });

        const mark = document.createElement(this.tag);

        mark.classList.add(this.class);

        // Append to the MARK element selected TextNode
        mark.appendChild(selectedText);

        // Insert new element
        range.insertNode(mark);

        this.api.selection.expandToTag(mark);
    }

    unwrap(range: Range){
        const mark = this.api.selection.findParentTag(this.tag, this.class);
        const text = range.extractContents();

        mark?.remove();
        range.insertNode(text);
    }

    checkState(selection: Selection){
        const mark = this.api.selection.findParentTag(this.tag);
        this.state = !!mark;
    }
}