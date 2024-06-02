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
                ou framework de terceiros. O processo de parsing é feito
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
                e como cada um deverá ser convertido em código
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
    {
        type: 'header',
        data: { level: 3, text: 'Estapas de processamento' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O principal plugin da aplicação a ser processado será o de paragraph.
                A informação principal deste plugin é tão somente o texto de marcação
                <plugin-gloss id="html"></plugin-gloss>. Devido a este fato, este plugin
                será o que mais utilizará as funções providadas pelo process_steps.
                A
                <plugin-ref-fig data-fig="fluxo-processamento-texto">Figura</plugin-ref-fig>
                ilustra um ciclo de processamento de texto de marcação:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'fluxo-processamento-texto',
            title: 'Um ciclo de processamento de texto',
            description: 'Fonte: Autoria própria',
            width: 0.9,
            fileType: 'png',
            imageUrl: '',
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Escape de caracteres' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O escape de processamento é a primeira etapa do processamento
                de texto. Necessária para evitar o primeiro problema de transformar
                o texto de marcação em código
                <plugin-gloss id="latex"></plugin-gloss>,
                que é o problema dos caracteres especiais.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O código
                <plugin-gloss id="latex"></plugin-gloss>,
                (como dito na fundamentação teórica),
                é um código legível tanto para seres humanos
                quanto por máquinas. Devido a isto, existem alguns caracteres
                especiais de controle que ajudam a definir como
                determinado conteúdo aparecerá no documento. Por exemplo:
                O caractere \\
                é  um dos mais importantes caracteres do
                <plugin-gloss id="latex"></plugin-gloss>,
                pois ele
                define uma gama de comandos, como por exemplo o \\chapter{<strong>texto</strong>},
                que define
                <strong>texto</strong>
                como sendo um capítulo no documento.
                Mas e se o usuário digitar no documento um caractere \\?
                Quais problemas isso poderá gerar?                
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Caso o usuário digite um \\
                no documento e este caractere simplesmente seja
                transcrito no documento
                <plugin-gloss id="latex"></plugin-gloss>,
                gerará uma série de efeitos indesejados, desde
                comandos inexistentes como: \\esse-comando-não-existe,
                como o uso acidental de comandos do próprio
                <plugin-gloss id="latex"></plugin-gloss>,
                como:
                \\chapter; \\section ou \\subsection.
                Para evitar isto substituímos qualquer ocorrência de
                \\  no texto por \\textbackslash, que é um comando
                <plugin-gloss id="latex"></plugin-gloss>
                responsável por imprimir uma \\ no corpo
                do texto.
                A
                <plugin-ref-table data-table="escape-characters">Tabela</plugin-ref-table>
                mostra as ocorrências de todos os caracteres que devem ser substituídos
                por algum comando especial no
                <plugin-gloss id="latex"></plugin-gloss>
                que possua o mesmo significado textual:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'table',
        data: {
            id: 'escape-characters',
            title: 'Mapeamento de escape de caracteres para código LaTex',
            description: '',
            width: 0.4,
            header: [ 'Caractere', 'Substituição' ],
            column_sizes: [ 0.4, 0.6 ],
            items: [
                [ '\\', '\\textbackslash ' ],
                [ '#', '\\#' ],
                [ '$', '\\$$' ],
                [ '%', '\\%' ],
                [ '^', '\\textasciicircum ' ],
                [ '&', '\\&' ],
                [ '_', '\\_' ],
                [ '{', '\\{' ],
                [ '}', '\\}' ],
                [ '[', '{[}' ],
                [ ']', '{]}' ],
                [ '~', '\\textasciitilde ' ],
            ]
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Todas as ocorrências destes caracteres devem ser devidadmente
                substituídas afim de evitar qualquer problema de interpretação do
                compilador
                <plugin-gloss id="latex"></plugin-gloss>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 5, text: 'Código do escape.ts' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Abaixo podemos ver a aplicação do processamento de escape de caracteres
                em javascript. a função escapeCharacters recebe uma string na linha 1,
                e das linhas 3 a 14 faz uma sucessão de novas atribuições desta nova string.
                As atribuições consistem de uma nova string que, através da função replace,
                substituem as expressões regulares pela nova string, que seguem de acordo
                com a
                <plugin-ref-table data-table="escape-characters">Tabela</plugin-ref-table>.
                Ao final, na linha 16, a nova string é retornada.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'codeEscape',
            start_line: 1,
            text: `
export function escapeCharacters(str: string){
    let newStr = str;
    newStr = newStr.replace(/\\\\/gm, '\\\\textbackslash ');
    newStr = newStr.replace(/#/gm, '\\\\#');
    newStr = newStr.replace(/\\$/gm, '\\\\$$');
    newStr = newStr.replace(/%/gm, '\\\\%');
    newStr = newStr.replace(/\\^/gm, '\\\\textasciicircum ');
    newStr = newStr.replace(/&/gm, '\\\\&');
    newStr = newStr.replace(/_/gm, '\\\\_');
    newStr = newStr.replace(/\\{/gm, '\\\\{');
    newStr = newStr.replace(/\\}/gm, '\\\\}');
    newStr = newStr.replace(/\\[/gm, '{[}');
    newStr = newStr.replace(/\\]/gm, '{]}');
    newStr = newStr.replace(/~/gm, '\\\\textasciitilde ');

    return newStr;
}
            `.trim()
        }
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