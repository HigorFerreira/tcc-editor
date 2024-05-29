import { escapeCharacters } from './escape';
import { processHTML } from './processHTML';
import { ParagraphBlock } from './types';
import { posProcess } from './posProcess';


export function getParagraph(block: ParagraphBlock){
    return posProcess(
        processHTML(
            escapeCharacters(
                block.data.text
            )
        )
    );
}