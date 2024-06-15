import {
    Block,
} from '@/parser/types';

import { processing } from '@/tests/chapter3/parsing/processing';
import { plugins } from '@/tests/chapter3/parsing/plugins';
import { mounting } from '@/tests/chapter3/parsing/mounting';

// @ts-ignore
export const parsing: Block[] = [
    {
        type: 'header',
        data: { level: 2, text: 'Parsing, (parser)' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O processo de Parsing transformará cada bloco provido
                pela saída do EditorJs em um trecho de código em
                <plugin-gloss id="latex" data-type="siglas"></plugin-gloss>.
                Observe na
                <plugin-ref-fig data-fig="parsing-example-header">Figura</plugin-ref-fig>
                e
                <plugin-ref-fig data-fig="parsing-example-paragraph">Figura</plugin-ref-fig>
                os exemplos de parsing aplicados a um objeto de
                <i>Header</i><plugin-footnote data-note="
                    Do inglês: Cabeçalho. Neste contexto, os headers são os títulos utilizados no documento.
                ">*</plugin-footnote>
                e
                <i>Paragraph</i><plugin-footnote data-note="
                    Do inglês: Parágrafo.
                ">*</plugin-footnote>,
                respectivamente.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'parsing-example-header',
            title: 'Parsing de um bloco Header',
            description: 'Fonte: Autoria própria',
            width: 0.8,
            fileType: 'png',
            imageUrl: '',
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'parsing-example-paragraph',
            title: 'Parsing de um bloco Paragraph',
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
                No exemplo do bloco paragraph, é notável o processo de
                processamento de
                <plugin-gloss id="html"></plugin-gloss>
                acontecendo. Note que o conteúdo textual do bloco
                não é apenas texto simples. Há quatro tags de
                marcação personalizadas que se refletem em comandos
                especiais
                <plugin-gloss id="latex"></plugin-gloss>, a saber:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'list',
        data: {
            type: 'numbered',
            list: [
                'plugin-gloss',
                'plugin-ref-fig',
                'i',
                'plugin-footnote',
            ]
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A tabela
                <plugin-ref-table data-table="plugins-latex-mapping">Tabela</plugin-ref-table>
                mostra o mapeamento destas tags, que são plugins
                <i>in-line</i><plugin-footnote data-note="
                    Do inglês: Em linha.
                ">*</plugin-footnote>
                do EditorJs. As Tags possuem conteúdo e atributo, cada qual se
                refletindo a uma particularidade do código
                <plugin-gloss id="latex"></plugin-gloss>
                a depender de sua natureza.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'table',
        data: {
            id: 'plugins-latex-mapping',
            title: 'Mapeamento de tags em código LaTex',
            description: '',
            width: 1,
            header: [ 'Tag', 'Conteúdo', 'Atributo', 'Valor do Atributo', 'LaTex' ],
            column_sizes: [ 0.12, 0.12, 0.12, 0.2, 0.44 ],
            items: [
                [ 'plugin-gloss', 'Não', 'id', 'latex', '\\acrshort{latex}' ],
                [ 'plugin-ref-fig', 'Figura', 'data-fig', 'parsing-example-paragraph', '\\ref{fig:parsing-example-paragraph}' ],
                [ 'plugin-ref-fig', 'Figura', 'data-fig', 'parsing-example-header', '\\ref{fig:parsing-example-header}' ],
                [ 'i', 'Header', 'Não', 'Não', '\\textit{Header}' ],
                [ 'plugin-footnote', 'Não', 'data-note', '&lt;texto da nota&gt;', '\\footnote{&lt;texto da nota&gt;}' ],
                [ 'i', 'Paragraph', 'Não', 'Não', '\\textit{Paragraph}' ],
                [ 'plugin-footnote', 'Não', 'data-note', 'Do inglês: Parágrafo.', '\\footnote{Do inglês: Parágrafo.}' ],
            ]
        }
    },
    {
        type: 'header',
        data: { level: 3, text: 'Visão geral' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O parser da aplicação não depende de nenhuma biblioteca
                ou <i>framework</i> de terceiros,
                (com excessão do <i>processHTML</i> que utiliza a biblioteca cheerio).
                O processo de parsing é feito
                apenas utilizando-se de recursos nativos da linguagem
                TypeScript, (consequentemente
                <plugin-gloss id="js"></plugin-gloss>).
                A
                <plugin-ref-fig data-fig="estrutura-parser">Figura</plugin-ref-fig>
                mostra a estrutura de pastas do módulo de parse, com três grandes
                grupos:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'list',
        data: {
            type: 'bullet',
            list: [
                'process_steps',
                'plugins',
                'mounting',
            ]
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O process_steps diz respeito a funções utilitárias do processamento de texto.
                É uma das mais importantes partes pois fornece funções que serão utilizadas a todo
                momento em outras partes do parsing. Provê segurança pois nele reside as funções
                de escape de caracteres especiais e entre outros.
                O plugins fornece o processamento respectivo de cada plugin da aplicação,
                bem como o modo em que cada um deverá ser convertido em código
                <plugin-gloss id="latex"></plugin-gloss>.
                O mounting diz respeito a montagens de partes dinâmicas do documento
                <plugin-gloss id="latex"></plugin-gloss>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'estrutura-parser',
            title: 'Estrutura de pastas do módulo de parse',
            description: 'Fonte: Autoria própria',
            width: 0.8,
            fileType: 'png',
            imageUrl: '',
        }
    },
// @ts-ignore
].concat(processing).concat(plugins).concat(mounting);