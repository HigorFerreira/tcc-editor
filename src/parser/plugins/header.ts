import { escapeCharacters } from '@/parser/process_steps/escape';
import { HeaderBlock } from '@/parser/types';

export function getHeader(block: HeaderBlock){
    switch(block.data.level){
        case 1:
            return `\\chapter{${escapeCharacters(block.data.text)}}`
        case 2:
            return `\\section{${escapeCharacters(block.data.text)}}`
        case 3:
            return `\\subsection{${escapeCharacters(block.data.text)}}`
        case 4:
            return `\\subsubsection{\\underline{${
                escapeCharacters(block.data.text)
            }}}`
        case 5:
            return `\\subsubsubsection{${
                escapeCharacters(block.data.text)
            }}`
    }
}