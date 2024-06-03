import { escapeCharacters } from '@/parser/process_steps/escape';
import { processHTML } from '@/parser/process_steps/processHTML';
import { ParagraphBlock } from '@/parser/types';
import { posProcess } from '@/parser/process_steps/posProcess';


export function getParagraph(block: ParagraphBlock){
    return posProcess(
        processHTML(
            escapeCharacters(
                block.data.text
            )
        )
    );
}