import {
    Block,
} from '@/parser/types';

import { v4 as uuidv4 } from 'uuid';

/*
<plugin-gloss id=""></plugin-gloss>
<plugin-ref id="mdn-regex"></plugin-ref>
<plugin-ref-fig data-fig="">Figura 1</plugin-ref-fig>
<plugin-ref-table data-table="">Tabela</plugin-ref-table>
<plugin-footnote data-note="

">
*</plugin-footnote>
*/

/*
{
    type: 'image',
    data: {
        uuid: '',
        fileType: 'png',
        imageUrl: '',
        width: 0.4,
        title: '',
        description: 'Fonte: Autoria própria'
    }
},
*/

/*
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 1,
            text: `
`.trim()
        }
    },
*/

export const mounting: Block[] = [
    {
        type: 'header',
        data: { level: 3, text: 'Montagem' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O processo de montagem é o processo no qual algumas partes do código
                <plugin-gloss id="latex"></plugin-gloss>
                são montadas separadamente para fins de organização.
                Após montadas, cada uma destas partes são incluídas no código principal
                através do comando \\input.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Glossário' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Cada item de glossário, seja ele uma abreviação ou sigla,
                deve ser definido no documento antes que se possa fazer uso do mesmo.
                Observe abaixo o exemplo de uma definição de sigla em
                <plugin-gloss id="latex"></plugin-gloss>:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 1,
            text: `
\\newacronym[type=sigla]{abnt}{ABNT}{
    Associação Brasileira de Normas Técnicas
}
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Além de montados, cada clossário deve ser exibido com o comando
                \\printglossary. Veja o código abaixo:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 1,
            text: `
\\printglossary[type=sigla,title=LISTA DE SIGLAS]
\\clearpage

\\printglossary[type=abreviacao,title=LISTA DE ABREVIATURAS]
\\clearpage
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Isto garante que os devidos glossários sejam exibidos com
                folga de uma página, com seus respectivos títulos.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A função mountGlossary exportada em mountGlossary.ts
                contém sua implementação, que faz todo o processamento dos
                items de glossário a partir de um GlossaryObjectType:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 3,
            text: `
[...]
export function mountGlossary(glossary: GlossaryObjectType){
    const header = \`
        \\\\newglossary*{abreviacao}{Lista de abreviaturas}
        \\\\newglossary*{sigla}{Lista de siglas}
        \\\\newglossary*{simbolo}{Lista de símbolos}
    \`.trim().replace(/^\\s{8}/gm, '');

    const gloss_arr = Object.keys(glossary).map(
        key => ({ ...glossary[key], key })
    );

    const acronyms = gloss_arr
        .filter(({ type }) => type === 'sigla')
        .sort(({ label: a }, { label: b }) => a.localeCompare(b))
        .map(({ short, label, type, key }) => {
            return \`\\\\newacronym[type=\${type}]{\${key}}{\${
                escapeCharacters(short)
            }}{\${
                escapeCharacters(label)
            }}\`
        })
        .join('\\n');
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Note que todos os objetos de glossário vem misturados
                no parâmetro glossary da função.
                Para montar as siglas da linha 15,
                por exemplo, é feita uma filtragem no tipo de glossário, uma
                ordenação através da função sort, e por fim, a conversão em código
                <plugin-gloss id="latex"></plugin-gloss>
                através da função map na linha 18. Por fim, o array de siglas
                é unido através do caractere de quebra de linha por meio da função
                join em 25. O mesmo processo acontece com a lista de abreviações
                e de termos.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Por fim, basta unir tudo em uma string conforme mostrado na linha
                65 e 66 abaixo. As linhas 68 e 69 foram uma tentativa de customizar o estilo
                do glossário e seu título. Por hora, esta parte está omitida do trabalho.
                A linha 67 adiciona o comando \\makeglossaries, que diz ao
                <plugin-gloss id="latex"></plugin-gloss>
                para montar o glossário.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 64,
            text: `
[...]
    let str = \`\${header}\\n\\n\${acronyms}\\n\`;
    str = str.concat(\`\${abbreviations}\\n\${symbols}\\n\\n\`);
    str = str.concat(\`\\\\makeglossaries\`);
    // str = str.concat('\\n\\n').concat(custom_style);
    // str = str.concat('\\n\\n').concat(custom_title);


    return str;
}
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Após todo o processamento seu resultado é guardado em um arquivo
                denominado makeGlossaries.tex a ser importado posteriormente
                pelo código fonte contruído no processo de Parsing.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Referências' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A parte de referênciação é uma das automações mais úteis do projeto, pois
                adiciona referências cruzadas ao projeto facilmente navegável na versão
                digital do mesmo.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe a função mountRefs exportada a partir do arquivo mountRefs.ts:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 1,
            text: `
import { RefsObjectType } from '@/parser/types';

export function mountRefs(refs: RefsObjectType){
    return Object.keys(refs).map(key => {
        const ref  = refs[key];
        const { type, ...restRefs } = ref;
        if(type){
            return \`
                @\${type}{\${key},
                    \${(() => {
                        return Object.keys(restRefs).map(ref_key => {
                            switch(type){
                                case 'misc':
                                case 'book':
                                case 'article':
                                    // @ts-ignore
                                    const value = restRefs[ref_key];
                                    if(ref_key === 'author')
                                        return \`\${ref_key}={\${
                                            (value as string[])
                                                .join(' and ')
                                    }}\`
                                    else if(ref_key === 'edition')
                                        return \`\${ref_key}={\${
                                            (value as number)
                                                .toString()
                                                .concat('st')
                                    }}\`
                                    else
                                        return \`\${ref_key}={\${value}}\`
                            }
                        }).join(',\\n    ')
                    })()}
                }
            \`.trim().replace(/^\\s{16}/gm, '');
        }

        return '';
    }).join('\\n\\n');
}
`.trim()
        }
    },
    // {
    //     type: 'header',
    //     data: { level: 3, text: 'Tipagens' }
    // },
    // {
    //     type: 'header',
    //     data: { level: 3, text: 'Escape de caracteres especiais' }
    // },
    // {
    //     type: 'header',
    //     data: { level: 3, text: 'Processamento de HTML' }
    // },
]