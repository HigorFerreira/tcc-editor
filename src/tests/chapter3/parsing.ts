import {
    Block,
} from '@/parser/types'

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
                <plugin-ref-fig data-fig="parsing-example-paragraph">Figura</plugin-ref-fig>
                e
                <plugin-ref-fig data-fig="parsing-example-header">Figura</plugin-ref-fig>
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
            uuid: 'parsing-example-paragraph',
            title: 'Parsing de um bloco Paragraph',
            description: 'Fonte: Autoria própria',
            width: 0.8,
            fileType: 'png',
            imageUrl: '',
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
        type: 'header',
        data: { level: 3, text: 'Estapas de processamento' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Escape de caracteres' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Processamento de HTML' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Pós processamento' }
    },
    {
        type: 'header',
        data: { level: 3, text: 'Plugins' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Tipagem' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Paragraph, (parágrafo)' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Header, (cabeçalhos)' }
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
    {
        type: 'header',
        data: { level: 3, text: 'Montagem' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Glossário' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Referências' }
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