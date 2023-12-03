"use client";
import BaseEdidorJSPlugin from '@/components/EditorJS/BaseEdidorJSPlugin'
import { FunctionComponent, useState } from 'react';

export default class ImagePlugin extends BaseEdidorJSPlugin {
    constructor(params: any){
        super(params);
    }

    getReactComponent() {
        return <div>
            Image
        </div>
    }

    getSettingsReactComponent() {
        return <div>
            Image settings
        </div>
    }

    save(): any {
        return {
            foo: 'bar'
        }
    }
}