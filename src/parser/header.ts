import { escapeCharacters } from './escape';
import { HeaderBlock } from './types';

export function getHeader(block: HeaderBlock){
    switch(block.data.level){
        case 1:
            return `\\chapter{${escapeCharacters(block.data.text)}}`
        case 2:
            return `\\section{${escapeCharacters(block.data.text)}}`
        case 3:
            return `\\subsection{${escapeCharacters(block.data.text)}}`
        case 4:
            return `\\subsubsection{${escapeCharacters(block.data.text)}}`
    }
}