import { escapeCharacters } from "@/parser/process_steps/escape";
import { processHTML } from "@/parser/process_steps/processHTML";
import { ListBlock } from "@/parser/types";
import { posProcess } from "@/parser/process_steps";

export function getList(list: ListBlock){
    const { data: { type, list: __list } } = list;
    return `
    \r\\begin{${ type === 'bullet' ? 'itemize' : 'enumerate' }}
        ${__list.map(el => `\r\t\\item ${
            posProcess(processHTML(escapeCharacters(el))) }`).join('')
        }
    \r\\end{${ type === 'bullet' ? 'itemize' : 'enumerate' }}
    `.trim()
}