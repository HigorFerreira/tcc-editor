import { escapeCharacters } from './escape';
import { processHTML } from './processHTML';
import { ParagraphBlock } from './types';


export function getParagraph(block: ParagraphBlock){
    return processHTML(
        escapeCharacters(block.data.text)
    );    
}