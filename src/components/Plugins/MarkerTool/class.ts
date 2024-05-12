import InlineBasePlugin from '@/components/Editor/InlineBasePlugin';
import { v4 as uuidv4 } from 'uuid';

export default class MarkerToolClass extends InlineBasePlugin {

    getName(): string {
        return 'marker';
    }

    getUuid(): string {
        return uuidv4();
    }
}