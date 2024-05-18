import { escapeCharacters } from './escape';
import { processHTML } from './processHTML';
import { ImageBlock } from './types';

export function getImage(block: ImageBlock){
    const {
        uuid,
        title,
        width,
        description,
        fileType,
    } = block.data;


    return `
        \\begin{figure}[ht]
            \\centering
            \\caption{${escapeCharacters(title)}}
            \\includegraphics[width=${width.toFixed(1)}\\textwidth]{./images/${uuid}.${fileType}}
            \\label{fig:${uuid}} \\\\
            \\textnormal{\\fontsize{10pt}{12pt}${processHTML(escapeCharacters(description))}}
        \\end{figure}
    `.trim().replace(/^\s{8}/gm, '');
}