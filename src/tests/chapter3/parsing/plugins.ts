import {
    Block,
} from '@/parser/types'

export const plugins: Block[] = [
    {
        type: 'header',
        data: { level: 3, text: 'Plugins' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O <i>parsing</i> dos plugins é algo essencial na montagem
                do documento ao qual estar-se a escrever. São os plugins
                que formam cada pequena unidade de bloco que comporá
                um documento que muitas vezes se tornará gigantesco.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Tipagem' }
    },
    // src-parser-plugins-types
    {
        type: 'image',
        data: {
            uuid: 'src-parser-plugins-types',
            title: 'Caminho da pasta types dos plugins no parser',
            description: 'Fonte: Autoria própria',
            width: 0.8,
            fileType: 'png',
            imageUrl: '',
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O arquivo de tipagem é onde é concentrada todas as anotações
                de tipo de cada bloco. O documento todo é um array de objetos,
                no qual cada um desses objetos corresponde a um bloco
                do documento. É através de cada tipo de bloco que pode-se por exemplo,
                discriminar qual tipo de bloco está sendo tratado no momento do processamento.
                Observe por exemplo a anotação de tipo do ParagraphBlock:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'ParagraphBlockCode',
            start_line: 37,
            text: `
[...]
export interface ParagraphBlock {
    type: 'paragraph'
    id: string
    data: {
        text: string
    }
}
[...]       
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Todo bloco é composto basicamente por estas três propriedades:
                type; id e data. Sendo que a propriedade data variará sua
                forma a depender do bloco que está sendo definido. Este código
                nunca é executado ou incluido na versão de execução final em
                <plugin-gloss id="js"></plugin-gloss>,
                (por se tratar de uma anotação de tipo). Mas é de extrema
                utilidade quando se trata de guiar o desenvolvedor na hora
                de instanciar um objeto do tipo que é definido pelo
                interface<plugin-footnote data-note="
                    Neste contexto, está-se utilizando o termo interface em seu original
                    inglês, conforme a documentação do TypeScript. Devido a este fato,
                    interface (não confundir com interface de usuário) será tratado
                    com pronome masculino.
                ">*</plugin-footnote>
                ParagraphBlock.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe como o interface do HeaderBlock se diferencia
                do ParagraphBlock em sua anotação de tipo:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'HeaderBlockCode',
            start_line: 5,
            text: `
[...]
export interface HeaderBlock {
    type: 'header'
    id: string
    data: {
        level: 1 | 2 | 3 | 4 | 5
        text: string
    }
}
[...]       
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                No HeaderBlock, a propriedade data é composta por outras duas propriedades: text e level.
                Ao refletir sobre isso, percebe-se que essas duas propriedades são essenciais para definir
                o que é um título em um documento. O level (nível) indica o nível hierárquico do título,
                enquanto o text (texto) representa o conteúdo exibido como título. Perceba que há uma
                limitação na definição do nível do título, com valores variando apenas de 1 a 5.
                Cada um desses valores corresponde respectivamente às sessões: primária, secundária, terciária, quaternária e quinária.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
            Observe na
            <plugin-ref-table data-table="header-level-latex">Tabela</plugin-ref-table>
            a relação do level do título com o código
            <plugin-gloss id="latex"></plugin-gloss>
            correspondente:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'table',
        data: {
            id: 'header-level-latex',
            title: 'Relação do level do título com o código latex',
            description: '',
            width: 0.43,
            header: [ 'Level', 'Código LaTex' ],
            column_sizes: [ 0.15, 0.85 ],
            items: [
                [ '1', '\\chapter{&lt;conteúdo&gt;}' ],
                [ '2', '\\section{&lt;conteúdo&gt;}' ],
                [ '3', '\\subsection{&lt;conteúdo&gt;}' ],
                [ '4', '\\subsubsection{&lt;conteúdo&gt;}' ],
                [ '5', '\\subsubsubsection{&lt;conteúdo&gt;}' ],
            ]
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Paragraph, (parágrafo)' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O bloco de parágrafo parece de longe um dos blocos mais simples de todos.
                Ele simplesmente retorna o texto do bloco recebido, fazendo-o passar
                pelas etapas de processamento conforme já descrito na
                <plugin-ref-fig data-fig="fluxo-processamento-texto">Figura</plugin-ref-fig>.
                Observe na linha 7 como o parâmetro block é anotado com o tipo ParagraphBlock.
                É neste caso que entra a utilidade do TypeScript. Pois além de prevenir erros
                não deixando que se passe um bloco incorreto para ser processado por essa função,
                tem-se a condição de saber exatamente o que tem dentro da propriedade
                data na linha 11. Neste caso, apenas passa-se o texto para o processamento.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'getParagraphCode',
            start_line: 1,
            text: `
import { escapeCharacters } from '@/parser/process_steps/escape';
import { processHTML } from '@/parser/process_steps/processHTML';
import { ParagraphBlock } from '@/parser/types';
import { posProcess } from '@/parser/process_steps/posProcess';


export function getParagraph(block: ParagraphBlock){
    return posProcess(
        processHTML(
            escapeCharacters(
                block.data.text
            )
        )
    );
}
`.trim()
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Header, (cabeçalhos)' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O parse do bloco de Header já distoa-se um pouco do bloco de paragraph.
                Aqui é notável a aplicação do exposto na
                <plugin-ref-table data-table="header-level-latex">Tabela</plugin-ref-table>
                onde o cada level se traduz em um comando diferente no latex. Através da
                clausula switch, o level é testado afim de retornar as particularidades
                de cada tipo de título. Observe que o level 4, implementado na linha 13,
                possui um comando a mais de \\underline para que o título
                apareça como sublinhado. Este comando a mais foi implementado
                para atender as particularidades exidas pelo documento da
                <plugin-gloss id="pucgo"></plugin-gloss>
                em:
                <plugin-ref id="pucgo"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'getHeaderCode',
            start_line: 1,
            text: `
import { escapeCharacters } from '@/parser/process_steps/escape';
import { HeaderBlock } from '@/parser/types';

export function getHeader(block: HeaderBlock){
    switch(block.data.level){
        case 1:
            return \`\\\\chapter{\${escapeCharacters(block.data.text)}}\`
        case 2:
            return \`\\\\section{\${escapeCharacters(block.data.text)}}\`
        case 3:
            return \`\\\\subsection{\${escapeCharacters(block.data.text)}}\`
        case 4:
            return \`\\\\subsubsection{\\\\underline{\${
                escapeCharacters(block.data.text)
            }}}\`
        case 5:
            return \`\\\\subsubsubsection{\${
                escapeCharacters(block.data.text)
            }}\`
    }
}
    `.trim()
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Image, (imagens)' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O parse do plugin de imagem é um dos mais complexos em termos de comandos
                <plugin-gloss id="latex"></plugin-gloss>. Ele retorna toda uma estrutura
                de modo que o compilador de documentos
                <plugin-gloss id="latex"></plugin-gloss>
                possa renderizar a imagem corretamente e seja capaz
                de referenciá-la ao longo do texto.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Nas linhas 8 a 12 tem-se a desconstrução das propriedades da
                imagem que estão presentes na propriedade data do bloco.
                Estas propriades são:
                <plugin-gloss id="uuid"></plugin-gloss><plugin-footnote data-note="
                    <plugin-gloss id='UUID'></plugin-gloss>,
                    <i>Universally Unique Identifier</i>
                    (Identificador Universalmente Único).
                ">*</plugin-footnote>;
                title; width; description e fileType.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'getImageCode1',
            start_line: 1,
            text: `
import { escapeCharacters } from '@/parser/process_steps/escape';
import { posProcess } from '@/parser/process_steps/posProcess';
import { processHTML } from '@/parser/process_steps/processHTML';
import { ImageBlock } from '@/parser/types';

export function getImage(block: ImageBlock){
    const {
        uuid,
        title,
        width,
        description,
        fileType,
    } = block.data;
[...]
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Na linha 20 tem-se a inclusão do título da imagem. Note que
                o título somente precisa passar pelo processo de escape de caracteres,
                uma vez que no mesmo não haverá plugins no corpo do texto.
                Nas linhas 25 à 33 há a inclusão da descrição da imagem.
                Note que diferente do título, a descrição passa por todo o
                ciclo de processamento, pois na descrição o usuário pode incluir
                referências e outras coisas que resultam na presença de tags
                de plugin no corpo do texto.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                As linhas 21 a 23 tratam do tamanho que a imagem vai ocupar
                na tela, bem como a referência ao arquivo de imagem que
                será renderizado. As propriedades width,
                <plugin-gloss id="uuid"></plugin-gloss>,
                e fileType
                são utilizadas neste processo. Cada imagem é guardada na
                pasta interna images com o nome do
                <plugin-gloss id="uuid"></plugin-gloss>
                que o software
                define, bem como sua extensão de arquivo.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A linha 24 utiliza o
                <plugin-gloss id="uuid"></plugin-gloss>
                para definir a label da imagem.
                Desta forma, a imagem a que se trata o bloco torna-se
                referenciável no texto do documento.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'getImageCode2',
            start_line: 13,
            text: `
[...]


// H Prevents figure to be placed incorrectly
return \`
    \\\\begin{figure}[H]
        \\\\centering
        \\\\caption{\${escapeCharacters(title)}}
        \\\\includegraphics[width=\${
            width.toFixed(1)
        }\\\\textwidth]{./images/\${uuid}.\${fileType}}
        \\\\label{fig:\${uuid}} \\\\\\\\
        \\\\textnormal{\\\\fontsize{10pt}{12pt}\${
            posProcess(
                processHTML(
                    escapeCharacters(
                        description
                    )
                )
            )
        }}
    \\\\end{figure}
\`.trim().replace(/^\\s{8}/gm, '');
}
`.trim()
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'List, (listas)' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Existem dois tipos de lista, as enumeradas e as não enumeradas, respectivamente
                enumerate e itemize no código
                <plugin-gloss id="latex"></plugin-gloss>.
                A linha 9 utiliza a propriedade type para definir qual tipo de lista será utilizada.
                Por fim, a lista é composta de uma iteração sobre as strings do array presente
                na propriedade list. Este array, após ajustado com a função map, é transformado
                em uma string unindo seus itens por uma quebra de linha com o auxílio da
                função join na linha 11. Observe também o processamento textual presente na
                linha 11. Isso se dá pela liberdade do usuário em utilizar plugins nos
                campos de lista.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'getListCode1',
            start_line: 1,
            text: `
import { escapeCharacters } from "@/parser/process_steps/escape";
import { processHTML } from "@/parser/process_steps/processHTML";
import { ListBlock } from "@/parser/types";
import { posProcess } from "@/parser/process_steps";

export function getList(list: ListBlock){
    const { data: { type, list: __list } } = list;
    return \`
    \\r\\\\begin{\${ type === 'bullet' ? 'itemize' : 'enumerate' }}
        \${__list.map(el => \`\\r\\t\\\\item \${
            posProcess(processHTML(escapeCharacters(el))) }\`).join('')
        }
    \\r\\\\end{\${ type === 'bullet' ? 'itemize' : 'enumerate' }}
    \`.trim()
}
`.trim()
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Page Break, (quebra de página)' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O bloco de PageBreak é o bloco de parser mais simples de todos.
                Embora receba como parâmetro um bloco do tipo PageBreakBlock,
                nem uso do mesmo é feito.
                O PageBreak apenas retorna um comando em
                <plugin-gloss id="latex"></plugin-gloss>
                que limpa a página e faz com que o conteúdo após o mesmo
                seja escrito na próxima página.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'getPageBreak1',
            start_line: 1,
            text: `
import { PageBreakBlock } from '@/parser/types';

export function pageBreak(block: PageBreakBlock){
    return '\\\\clearpage';
}
`.trim()
        }
    },
    // {
    //     type: 'header',
    //     data: { level: 4, text: 'Table, (tabelas)' }
    // },
    // {
    //     type: 'paragraph',
    //     data: {
    //         text: `
    //             Explicar o complexo parser do plugin de tabela.
    //         `.trim().replace(/^\s{16}/gm, '')
    //     }
    // },
//     {
//         type: 'code',
//         data: {
//             uuid: 'getTableBlock1',
//             start_line: 1,
//             text: `
// import { escapeCharacters } from '@/parser/process_steps/escape';
// import { processHTML } from '@/parser/process_steps/processHTML';
// import { posProcess } from '@/parser/process_steps/posProcess';
// import { TableBlock } from '@/parser/types';


// export function getTable(block: TableBlock){
//     const {
//         id,
//         title,
//         description,
//         header,
//         items,
//         width,
//         column_sizes,
//     } = block.data;
    
//     const MAX_WIDTH = 16*width;

//     return \`
//         \\\\begin{table}[H]
//             \\\\centering
//             \\\\caption{\${escapeCharacters(title)}}
//             \\\\label{tbl:\${id}}
//             \\\\renewcommand{\\\\arraystretch}{1.5}
//             \\\\begin{tabular}{\${
//                 column_sizes.map(col => {
//                     return \`p{\${(MAX_WIDTH*col).toFixed(4)}cm}\`
//                 }).join(' ')
//             }}
//                 \\\\hline
//                 \${
//                     header.map(
//                         h => \`\\\\textbf{\${
//                             posProcess(
//                                 processHTML(
//                                     escapeCharacters(h)
//                                 )
//                             )
//                         }}\`
//                     ).join(' & ')
//                 } \\\\\\\\
//                 \\\\hline
//                 \${
//                     items.map(row => {
//                         return row.map(cell => {
//                             return posProcess(
//                                 processHTML(
//                                     escapeCharacters(cell)
//                                 )
//                             )
//                         }).join(' & ')
//                     }).join(' \\\\\\\\\\n\\t\\t')
//                 } \\\\\\\\
//                 \\\\hline
//                 \${
//                     description &&
//                     \`\\\\\\\\\\\\multicolumn{\${
//                         header.length
//                     }}{c}{\\\\fontsize{10pt}{12pt}\${
//                         posProcess(
//                             processHTML(
//                                 escapeCharacters(description)
//                             )
//                         )
//                     }}\`
//                 }
//             \\\\end{tabular}
//         \\\\end{table}
//     \`.trim().replace(/^\\s{8}/gm, '');
// }
// `.trim()
//         }
//     },
]