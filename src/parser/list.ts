import { escapeCharacters } from "./escape";
import { processHTML } from "./processHTML";
import { ListBlock } from "./types";

export function getList(list: ListBlock){
    const { data: { type, list: __list } } = list;
    return `
    \r\\begin{${ type === 'bullet' ? 'itemize' : 'enumerate' }}
        ${__list.map(el => `\r\t\\item ${ processHTML(escapeCharacters(el)) }`).join('')}
    \r\\end{${ type === 'bullet' ? 'itemize' : 'enumerate' }}
    `.trim()
}