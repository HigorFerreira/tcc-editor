import InlineBasePlugin from "@/components/Editor/InlineBasePlugin";
import { v4 as uuidv4 } from 'uuid';

export default class FootnoteClass extends InlineBasePlugin{
    constructor(...params: any){
        // @ts-ignore
        super(...params);
    }

    getName(): string {
        return 'footnote';
    }

    getUuid(): string {
        return uuidv4();
    }
}