import InlineBasePlugin from '@/components/Editor/InlineBasePlugin';
import { v4 as uuidv4 } from 'uuid';

export default class MarkerToolClass extends InlineBasePlugin {
    public state: boolean = false;

    static get sanitize(){
        return {
            'plugin-gloss': {
                id: true,
                title: true,
            }
        }
    }

    getName(): string {
        return 'gloss';
    }

    getUuid(): string {
        return uuidv4();
    }
}