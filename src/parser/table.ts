import { escapeCharacters } from './escape';
import { processHTML } from './processHTML';
import { posProcess } from './posProcess';
import { TableBlock } from './types';


export function getTable(block: TableBlock){
    const {
        id,
        title,
        description,
        header,
        items,
    } = block.data;
    return `
        \\begin{table}[h!]
            \\centering
            \\caption{${escapeCharacters(title)}}
            \\label{tbl:${id}}
            \\renewcommand{\\arraystretch}{1.5}
            \\begin{tabular}{${header.map(() => 'c').join(' ')}}
                \\hline
                ${
                    header.map(h => posProcess(processHTML(escapeCharacters(h)))).join(' & ')
                } \\\\
                \\hline
                ${
                    items.map(row => {
                        return row.map(cell => {
                            return posProcess(processHTML(escapeCharacters(cell)))
                        }).join(' & ')
                    }).join(' \\\\\n')
                } \\\\
                \\hline
                \\\\\\textnormal{\\fontsize{10pt}{12pt}${
                    posProcess(processHTML(escapeCharacters(description)))
                }}
            \\end{tabular}
        \\end{table}
    `.trim().replace(/^\s{8}/gm, '');
}