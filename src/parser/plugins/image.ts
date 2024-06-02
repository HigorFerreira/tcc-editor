import { escapeCharacters } from '../process_steps/escape';
import { posProcess } from '../process_steps/posProcess';
import { processHTML } from '../process_steps/processHTML';
import { ImageBlock } from '../types';

export function getImage(block: ImageBlock){
    const {
        uuid,
        title,
        width,
        description,
        fileType,
    } = block.data;


    // H Prevents figure to be placed incorrectly
    return `
        \\begin{figure}[H]
            \\centering
            \\caption{${escapeCharacters(title)}}
            \\includegraphics[width=${width.toFixed(1)}\\textwidth]{./images/${uuid}.${fileType}}
            \\label{fig:${uuid}} \\\\
            \\textnormal{\\fontsize{10pt}{12pt}${posProcess(processHTML(escapeCharacters(description)))}}
        \\end{figure}
    `.trim().replace(/^\s{8}/gm, '');
}