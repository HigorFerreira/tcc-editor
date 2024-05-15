import InlineBasePlugin from '@/components/Editor/InlineBasePlugin';
import { v4 as uuidv4 } from 'uuid';

export default class MarkerToolClass extends InlineBasePlugin {
    private _state: boolean = false;

    get state(){
        return this._state;
    }

    set state(state: boolean){
        this._state = state;
    }

    getName(): string {
        return 'marker';
    }

    getUuid(): string {
        return uuidv4();
    }
}