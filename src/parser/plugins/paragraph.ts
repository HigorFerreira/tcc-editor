import { escapeCharacters } from '../process_steps/escape';
import { processHTML } from '../process_steps/processHTML';
import { ParagraphBlock } from '../types';
import { posProcess } from '../process_steps/posProcess';


export function getParagraph(block: ParagraphBlock){
    return posProcess(
        processHTML(
            escapeCharacters(
                block.data.text
            )
        )
    );
}