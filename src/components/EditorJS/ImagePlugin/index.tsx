"use client";
import BaseEdidorJSPlugin from '@/components/EditorJS/BaseEdidorJSPlugin'
import { FunctionComponent, useState } from 'react';

export default class ImagePlugin extends BaseEdidorJSPlugin {
    constructor(params: any){
        super(params);
    }

    getReactComponent(): FunctionComponent<{ context: ImagePlugin }> {
        return ({ context }) => {
            const [ count, setCount ] = useState(0);
            return <div>
                <h1>Image {count}</h1>
                <button onClick={() => {
                    console.log("Image redering");
                    setCount(prev => prev+1)
                }} >Add</button>
            </div>
        }
    }

    getSettingsReactComponent(): FunctionComponent<{ context: ImagePlugin }> {
        return ({ context }) => {
            return <div>
                Menu
            </div>
        }
    }

    save(): any {
        return {
            foo: 'bar'
        }
    }
}