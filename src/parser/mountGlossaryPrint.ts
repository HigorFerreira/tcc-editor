import { escapeCharacters } from "./escape";
import { GlossaryObjectType } from "./types";

export function mountGlossaryPrint(glossary: GlossaryObjectType){
    const gloss_arr = Object.keys(glossary).map(key => ({ ...glossary[key], key }));

    const acronyms = gloss_arr
        .filter(({ type }) => type === 'sigla');

    const abbreviations = gloss_arr
        .filter(({ type }) => type === 'abreviacao');

    const symbols = gloss_arr
        .filter(({ type }) => type === 'simbolo');

    return `
        ${
            acronyms.length !== 0
                ? `
                    \\printglossary[type=siglas,title=LISTA DE SIGLAS]
                    \\clearpage
                `.trim().replace(/^\s{20}/gm, '')
                : ''
        }
        
        ${
            abbreviations.length !== 0
                ? `
                    \\printglossary[type=abrev,title=LISTA DE ABREVIATURAS]
                    \\clearpage
                `.trim().replace(/^\s{20}/gm, '')
                : ''
        }
        
        ${
            symbols.length !== 0
                ? `
                    \\printglossary[type=simbolos,title=LISTA DE SÍMBOLOS]
                    \\clearpage
                `.trim().replace(/^\s{20}/gm, '')
                : ''
        }
    `.trim().replace(/^\s{8}/gm, '')
}