import { escapeCharacters } from './escape';
import { ParagraphBlock } from './types';

export function getParagraph(block: ParagraphBlock){
    return escapeCharacters(block.data.text);
}