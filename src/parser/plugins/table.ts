import { escapeCharacters } from '@/parser/process_steps/escape';
import { processHTML } from '@/parser/process_steps/processHTML';
import { posProcess } from '@/parser/process_steps/posProcess';
import { TableBlock } from '@/parser/types';


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
        \\begin{table}[H]
            \\centering
            \\caption{${escapeCharacters(title)}}
            \\label{tbl:${id}}
            \\renewcommand{\\arraystretch}{1.5}
            \\begin{tabular}{${
                column_sizes.map(col => {
                    return `p{${(MAX_WIDTH*col).toFixed(4)}cm}`
                }).join(' ')
            }}
                \\hline
                ${
                    header.map(
                        h => `\\textbf{${
                            posProcess(
                                processHTML(
                                    escapeCharacters(h)
                                )
                            )
                        }}`
                    ).join(' & ')
                } \\\\
                \\hline
                ${
                    items.map(row => {
                        return row.map(cell => {
                            return posProcess(
                                processHTML(
                                    escapeCharacters(cell)
                                )
                            )
                        }).join(' & ')
                    }).join(' \\\\\n\t\t')
                } \\\\
                \\hline
                ${
                    description &&
                    `\\\\\\multicolumn{${
                        header.length
                    }}{c}{\\fontsize{10pt}{12pt}${
                        posProcess(
                            processHTML(
                                escapeCharacters(description)
                            )
                        )
                    }}`
                }
            \\end{tabular}
        \\end{table}
    `.trim().replace(/^\s{8}/gm, '');
}