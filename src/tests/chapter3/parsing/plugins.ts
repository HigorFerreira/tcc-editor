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
                O parsing dos plugins é algo essencial na montagem
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
                do documento. É através de cada tipo de bloco, que pode-se por exemplo,
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
                <plugin-gloss id="latex"></plugin-gloss>,
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
                O bloco de parágrafo parece de longe o bloco mais simples de todos.
                Ele simplesmente retorna o texto do bloco recebido, fazendo-o passar
                pelas etapas de processamento conforme já descrito na
                <plugin-ref-fig data-fig="fluxo-processamento-texto">Figura</plugin-ref-fig>.
                Observe na linha 7 como o parâmetro block é anotado com o tipo ParagraphBlock.
                É neste caso que entra a utilidade do TypeScript. Pois além de prevenir erros
                não deixando que se passe um bloco incorreto para ser processado por essa função,
                tem se a condição de saber exatamente o que tem dentro da propriedade
                data na linha 11. Neste caso, apenas passamos o texto para o processamento.
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
                Aqui podemos ver a aplicação do exposto na
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
        type: 'header',
        data: { level: 4, text: 'List, (listas)' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Page Break, (quebra de página)' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Table, (tabelas)' }
    },
]