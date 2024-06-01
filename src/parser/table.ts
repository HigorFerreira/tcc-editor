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
        width,
        column_sizes,
    } = block.data;
    
    const MAX_WIDTH = 16*width;

    return `
        \\begin{table}[h!]
            \\centering
            \\caption{${escapeCharacters(title)}}
            \\label{tbl:${id}}
            \\renewcommand{\\arraystretch}{1.5}
            \\begin{tabular}{${
                column_sizes.map(col => {
                    return `p{${MAX_WIDTH*col}cm}`
                }).join(' ')
            }}
                \\hline
                ${
                    header.map(h => `\\textbf{${posProcess(processHTML(escapeCharacters(h)))}}`).join(' & ')
                } \\\\
                \\hline
                ${
                    items.map(row => {
                        return row.map(cell => {
                            return posProcess(processHTML(escapeCharacters(cell)))
                        }).join(' & ')
                    }).join(' \\\\\n\t\t')
                } \\\\
                \\hline
                \\\\\\multicolumn{${header.length}}{c}{\\fontsize{10pt}{12pt}${
                    posProcess(processHTML(escapeCharacters(description)))
                }}
            \\end{tabular}
        \\end{table}
    `.trim().replace(/^\s{8}/gm, '');
}