import { escapeCharacters } from "../process_steps/escape";
import { GlossaryObjectType } from "../types";

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
                    \\printglossary[type=sigla,title=LISTA DE SIGLAS]
                    \\clearpage
                `.trim().replace(/^\s{20}/gm, '')
                : ''
        }
        
        ${
            abbreviations.length !== 0
                ? `
                    \\printglossary[type=abreviacao,title=LISTA DE ABREVIATURAS]
                    \\clearpage
                `.trim().replace(/^\s{20}/gm, '')
                : ''
        }
        
        ${
            symbols.length !== 0
                ? `
                    \\printglossary[type=simbolo,title=LISTA DE SÍMBOLOS]
                    \\clearpage
                `.trim().replace(/^\s{20}/gm, '')
                : ''
        }
    `.trim().replace(/^\s{8}/gm, '')
}