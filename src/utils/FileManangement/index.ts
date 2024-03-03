import { save } from '@/utils/FileManangement/server';

export default class FileManangement {
    constructor(){
    }

    async save(obj: object){
        await save(obj);
    }
}