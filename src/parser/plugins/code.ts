import { escapeCharacters } from '@/parser/process_steps/escape';
// import { processHTML } from '@/parser/process_steps/processHTML';
import { CodeBlock } from '@/parser/types';
import { posProcess } from '@/parser/process_steps/posProcess';


export function getCode(block: CodeBlock){
    const {
        uuid,
        text,
    } = block.data;
    return `
        \\begin{${uuid}}
        ${ text }
        \\end{${uuid}}
    `.trim().replace(/^\s{8}/gm, '')
}