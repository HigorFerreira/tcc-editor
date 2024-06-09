import {
    Dispatch,
    SetStateAction
} from 'react';
import { v4 as uuidv4 } from 'uuid';


import {
    HeaderLevelsType,
    DataType
} from '@/components/Plugins/Header/types';


import BasePlugin from '@/components/Editor/BasePlugin';
import { TunesMenuConfigItem } from '@editorjs/editorjs/types/tools/tool-settings';

export default class HeaderClass extends BasePlugin<DataType> {
    text: string = ""
    public setLevel:
        Dispatch<SetStateAction<HeaderLevelsType>> | null = null

    static get conversionConfig() {
        return {
            export: 'text',
            import: 'text',
        };
    }

    static get toolbox() {
        return {
            title: "Título",
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M5 4v3h5.5v12h3V7H19V4z"></path></svg>`
        }
    }

    public renderSettings(): TunesMenuConfigItem[] {
        return ([1,2,3,4,5] as HeaderLevelsType[]).map(lv => ({
            title: `Nível ${lv}`,
            // @ts-ignore
            onActivate: () => {
                console.log({ setLevel: this.setLevel });
                this.setLevel && this.setLevel(lv);
            },
            closeOnActivate: true,
            isActive: lv === this?.pluginData?.level,
            icon: `<svg width="1em" height="1em" fill="currentColor" stroke="currentColor" stroke-width="0" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <text x="21.638674" y="16.938578" fill="currentColor" font-family="Keraleeyam" font-size="13.567px" stroke="none" stroke-width=".12113" text-align="end" text-anchor="end"><tspan x="21.638674" y="16.938578" fill="currentColor" font-family="sans-serif" font-weight="bold" stroke-width=".12113">T${lv}</tspan></text>
            </svg>`
        })) as TunesMenuConfigItem[]
    }

    getName(): string {
        return 'header';
    }

    getUuid(): string {
        return uuidv4();
    }
}