import { escapeCharacters } from "./escape";
import { GlossaryObjectType } from "./types";

export function mountGlossary(glossary: GlossaryObjectType){
    const header = `
        \\newglossary*{abreviacao}{Lista de abreviaturas}
        \\newglossary*{sigla}{Lista de siglas}
        \\newglossary*{simbolo}{Lista de símbolos}
    `.trim().replace(/^\s{8}/gm, '');

    const gloss_arr = Object.keys(glossary).map(key => ({ ...glossary[key], key }));

    const acronyms = gloss_arr
        .filter(({ type }) => type === 'sigla')
        .sort(({ label: a }, { label: b }) => a.localeCompare(b))
        .map(({ short, label, type, key }) => `\\newacronym[type=${type}]{${key}}{${escapeCharacters(short)}}{${escapeCharacters(label)}}`)
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

    return `
        ${header}

        ${acronyms}
        ${abbreviations}
        ${symbols}

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

        \\makeglossaries
    `.trim().replace(/^\s{8}/gm, '')
}