import InlineBasePlugin from '@/components/Editor/InlineBasePlugin';
import { v4 as uuidv4 } from 'uuid';

export default class MarkerToolClass extends InlineBasePlugin {
    public state: boolean = false;

    getName(): string {
        return 'gloss';
    }

    getUuid(): string {
        return uuidv4();
    }
}