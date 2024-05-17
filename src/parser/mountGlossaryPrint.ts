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
                ? '\\printglossary[type=abreviacao,title=Lista de Abreviaturas]\
                    \r\\clearpage'
                : ''
        }
        
        ${
            abbreviations.length !== 0
                ? '\\printglossary[type=sigla,title=Lista de Siglas]\
                    \r\\clearpage'
                : ''
        }
        
        ${
            symbols.length !== 0
                ?'\\printglossary[type=simbolo,title=Lista de Símbolos]\
                    \r\\clearpage'
                : ''
        }
    `.trim().replace(/^\s{8}/gm, '')
}