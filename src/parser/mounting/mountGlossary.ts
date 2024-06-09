import { escapeCharacters } from "../process_steps/escape";
import { GlossaryObjectType } from "../types";

export function mountGlossary(glossary: GlossaryObjectType){
    const header = `
        \\newglossary*{abreviacao}{Lista de abreviaturas}
        \\newglossary*{sigla}{Lista de siglas}
        \\newglossary*{simbolo}{Lista de símbolos}
    `.trim().replace(/^\s{8}/gm, '');

    const gloss_arr = Object.keys(glossary).map(
        key => ({ ...glossary[key], key })
    );

    const acronyms = gloss_arr
        .filter(({ type }) => type === 'sigla')
        .sort(({ label: a }, { label: b }) => a.localeCompare(b))
        .map(({ short, label, type, key }) => {
            return `\\newacronym[type=${type}]{${key}}{${
                escapeCharacters(short)
            }}{${
                escapeCharacters(label)
            }}`
        })
        .join('\n');

    const abbreviations = gloss_arr
        .filter(({ type }) => type === 'abreviacao')
        .sort(({ label: a }, { label: b }) => a.localeCompare(b))
        .map(({ short, label, type, key }) => `\\newacronym[type=${type}]{${key}}{${escapeCharacters(short)}}{${escapeCharacters(label)}}`)
        .join('\n');

    const symbols = gloss_arr
        .filter(({ type }) => type === 'simbolo')
        .sort(({ label: a }, { label: b }) => a.localeCompare(b))
        .map(({ short, label, type, key }) => `\\newacronym[type=${type}]{${key}}{${escapeCharacters(short)}}{${escapeCharacters(label)}}`)
        .join('\n');

    const custom_style = `
        % Define a custom glossary style without page numbers
        \\newglossarystyle{grid}{%
            \\setglossarystyle{list}% base this style on the list style
            \\renewcommand*{\\glossentry}[2]{%
                \\begin{tabularx}{\\textwidth}{@{}p{0.2\\textwidth} p{0.8\\textwidth}@{}}
                    \\textbf{\\glossentryname{##1}} & \\glossentrydesc{##1}%
                \\end{tabularx}%
            }%
        }
        % Apply the custom glossary style to each glossary
        \\setglossarystyle{grid}
    `.trim().replace(/^(\s{8}|\t{2})/gm, '');

    const custom_title = `
        % Redefinição do comando \\glossarysection para personalizar o título
        \\renewcommand{\\glossarysection}[2][]{%
            \\begin{center} % centraliza o título
            \\section*{\\normalfont\\fontsize{12}{14}\\bfseries\\selectfont #2} % título com fonte de 12pt, em negrito
            \\end{center}
            \\addcontentsline{toc}{section}{#2} % adiciona ao sumário
            \\markboth{#2}{#2} % marcação para cabeçalho
        %     \\vspace{15mm} % espaçamento após o título
        }
    `.trim().replace(/^(\s{8}|\t{2})/gm, '');

    let str = `${header}\n\n${acronyms}\n`;
    str = str.concat(`${abbreviations}\n${symbols}\n\n`);
    str = str.concat(`\\makeglossaries`);
    // str = str.concat('\n\n').concat(custom_style);
    // str = str.concat('\n\n').concat(custom_title);


    return str;
}