import Plugin from '@/components/EditorJS/Header/plugin';
import Settings from '@/components/EditorJS/Header/settings';

import BaseEdidorJSPlugin from "@/components/EditorJS/BaseEdidorJSPlugin";
import { Dispatch, FunctionComponent, ReactNode, SetStateAction, useEffect, useState } from "react";
import { HeaderLevelsType } from '@/components/EditorJS/Header/types';



export default class Header extends BaseEdidorJSPlugin {
    public level: HeaderLevelsType
    public setters: {
        level: Dispatch<SetStateAction<HeaderLevelsType>>
    } = {
        level: () => {}
    }

    constructor(params: any){
        super(params);
        this.level = 1;
    }

    getReactComponent() {
        return <Plugin context={this} />
    }

    getSettingsReactComponent() {
        return <Settings context={this} />
    }

    save() {
        return {

        }
    }
}