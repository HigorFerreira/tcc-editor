import InlineBasePlugin from '@/components/Editor/InlineBasePlugin';
import { v4 as uuidv4 } from 'uuid';

export default class MarkerToolClass extends InlineBasePlugin {
    public _state: any;
    public button: HTMLButtonElement;
    public class: any;
    public colorPicker: any;

	static get isInline() {
		return true;
	}

	get state() {
		return this._state;
	}

	set state(state) {
		this._state = state;

		this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state);
	}

	constructor(...params: any) {
        // @ts-ignore
        super(...params);

		this.button = document.createElement('button');;
		this._state = false;
        
		this.class = 'cdx-marker';
	}

	surround(range: Range) {
		if (this.state) {
			this.unwrap(range);
			return;
		}

		this.wrap(range);
	}

	wrap(range: Range) {
		const selectedText = range.extractContents();
		const mark = document.createElement(this.tag);

		mark.classList.add(this.class);
		mark.appendChild(selectedText);
		range.insertNode(mark);

		this.api.selection.expandToTag(mark);
	}

	unwrap(range: Range) {
		const mark = this.api.selection.findParentTag(this.tag, this.class);
		const text = range.extractContents();

		mark?.remove();

		range.insertNode(text);
	}


	checkState() {
		const mark = this.api.selection.findParentTag(this.tag);

		this.state = !!mark;
	
		if (this.state) {
			this.showActions(mark as HTMLElement);
		} else {
			this.hideActions();
		}
	}

	renderActions() {
		this.colorPicker = document.createElement('input');
		this.colorPicker.type = 'color';
		this.colorPicker.value = '#f5f1cc';
		this.colorPicker.hidden = true;

		return this.colorPicker;
	}

	showActions(mark: HTMLElement) {
		const {backgroundColor} = mark.style;
		this.colorPicker.value = backgroundColor ? this.convertToHex(backgroundColor) : '#f5f1cc';

		this.colorPicker.onchange = () => {
			mark.style.backgroundColor = this.colorPicker.value;
		};
		this.colorPicker.hidden = false;
	}

	hideActions() {
		this.colorPicker.onchange = null;
		this.colorPicker.hidden = true;
	}

	convertToHex(color: string) {
		const rgb = color.match(/(\d+)/g);

        // @ts-ignore
		let hexr = parseInt(rgb[0]).toString(16);
        // @ts-ignore
		let hexg = parseInt(rgb[1]).toString(16);
        // @ts-ignore
		let hexb = parseInt(rgb[2]).toString(16);

		hexr = hexr.length === 1 ? '0' + hexr : hexr;
		hexg = hexg.length === 1 ? '0' + hexg : hexg;
		hexb = hexb.length === 1 ? '0' + hexb : hexb;

		return '#' + hexr + hexg + hexb;
	}

	static get sanitize() {
		return {
			mark: {
				class: 'cdx-marker'
			}
		};
	}

    getName(): string {
        return 'marker';
    }

    getUuid(): string {
        return uuidv4();
    }
}