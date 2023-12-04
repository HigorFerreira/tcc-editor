import Plugin from '@/components/EditorJS/Header/plugin';
import Settings from '@/components/EditorJS/Header/settings';

import BaseEdidorJSPlugin from "@/components/EditorJS/BaseEdidorJSPlugin";
import { Dispatch, FunctionComponent, ReactNode, SetStateAction, useEffect, useState } from "react";
import { HeaderLevelsType } from '@/components/EditorJS/Header/types';
import { TunesMenuConfigItem } from '@editorjs/editorjs/types/tools';

export default class Header extends BaseEdidorJSPlugin {
    public level: HeaderLevelsType = 1
    public text: string = ""
    public setters: {
        level: Dispatch<SetStateAction<HeaderLevelsType>>
    } = {
        level: () => {}
    }

    static get conversionConfig() {
        return {
            export: 'text', // use 'text' property for other blocks
            import: 'text', // fill 'text' property from other block's export string
        };
    }

    static get toolbox() {
        return {
            title: "Título",
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M5 4v3h5.5v12h3V7H19V4z"></path></svg>`
        }
    }

    constructor(params: any){
        super(params);
        console.log("Constructor data", this.data);
        if(this.data.level) this.level = this.data.level;
        if(this.data.text) this.text = this.data.text;
    }

    getReactComponent() {
        return <Plugin context={this} />
    }

    getSettingsReactComponent() {
        return [1,2,3,4].map(lv => ({
            title: `Nível ${lv}`,
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
               fill="none"
               d="M0 0h24v24H0V0z"
            />
            <path
               d="M5 4v3h5.5v12h3V7H19V4z"
            />
            <text
               xml:space="preserve"
               style="font-size:13.44px;font-family:Keraleeyam;-inkscape-font-specification:Keraleeyam;text-align:end;text-anchor:end;fill:#ffffff;stroke-width:1"
               x="20.095642"
               y="22.633614"
               id="text293"><tspan
                 sodipodi:role="line"
                 style="stroke-width:1"
                 x="20.095642"
                 y="22.633614"
                 id="tspan295">${lv}</tspan></text>
          </svg>
          `
        })) as TunesMenuConfigItem[]
    }

    save() {
        return {
            level: this.level,
            text: this.text,
        }
    }
}