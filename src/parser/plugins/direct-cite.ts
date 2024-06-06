import { escapeCharacters } from '@/parser/process_steps/escape';
import { processHTML } from '@/parser/process_steps/processHTML';
import { DirectCite } from '@/parser/types';
import { posProcess } from '@/parser/process_steps/posProcess';


export function getDirectCite(block: DirectCite){
    return `
        \\vspace{15mm}
        \\noindent
        \\begin{minipage}{\\textwidth}
            \\noindent
            \\begin{minipage}{4cm}
            \\end{minipage}%
            \\hfill
            \\begin{minipage}{\\dimexpr\\textwidth-4cm}
                \\hspace*{\\parindent}
                \\fontsize{10pt}{12pt}\\selectfont % Ajusta o tamanho do texto para 10pt e altura da linha para 12pt
                ${
                    posProcess(
                        processHTML(
                            escapeCharacters(
                                block.data.text
                            )
                        )
                    )
                }
            \\end{minipage}
        \\end{minipage}
        \\vspace{15mm}
    `.trim().replace(/^\s{4}/gm, '')
}