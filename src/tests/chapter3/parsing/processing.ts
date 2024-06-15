import {
    Block,
} from '@/parser/types'

export const processing: Block[] = [
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
                Para evitar isto qualquer ocorrência de
                \\  no texto será substituída por \\textbackslash, que é um comando
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
            description: 'Fonte: Adaptado de: <plugin-ref id="tutorial-latex"></plugin-ref>',
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
                Abaixo tem-se a aplicação do processamento de escape de caracteres
                em typescript. a função escapeCharacters recebe uma string na linha 1,
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
        type: 'paragraph',
        data: {
            text: `
                O processamento de
                <plugin-gloss id="html"></plugin-gloss>
                é a segunda etapa do processo de <i>parsing</i>. É
                nele que os plugins in-line customizados são transformados
                em comandos
                <plugin-gloss id="latex"></plugin-gloss>.
                A
                <plugin-ref-fig data-fig="html-processing-example">Figura</plugin-ref-fig>
                inlustra como os plugins de glossário e referência de figuras
                se comportam no código
                <plugin-gloss id="latex"></plugin-gloss>
                através dos quadrados coloridos:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'html-processing-example',
            title: 'Conversão de plugins em código latex',
            description: 'Fonte: Autoria própria',
            width: 0.98,
            fileType: 'png',
            imageUrl: '',
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                No caso do plugin-gloss, há também um objeto de glossário que contém todas as definições
                de siglas e abreviaturas. Este objeto é transformado e montado em declarações
                <plugin-gloss id="latex"></plugin-gloss>
                para serem usadas ao longo do documento.
                Para mais detalhes deste processo, verifique a sessão de montagem
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A
                <plugin-ref-table data-table="plugin-latex-mapping">Tabela</plugin-ref-table>
                mapeia como cada plugin se comportará no código
                <plugin-gloss id="latex"></plugin-gloss>:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'table',
        data: {
            id: 'plugin-latex-mapping',
            title: 'Mapeamento de pugins para código latex',
            description: '',
            width: 0.98,
            header: [ 'Tag plugin', 'Atributo(s)', 'LaTex' ],
            column_sizes: [ 0.22, 0.22, 0.42 ],
            items: [
                [ 'plugin-gloss', 'id', '\\acrshort{&lt;id&gt;}' ],
                [ 'plugin-ref', 'id', '\\cite{&lt;id&gt;}' ],
                [ 'plugin-footnote', 'data-note', '\\footnote{&lt;data-note&gt;}' ],
                [ 'plugin-ref-fig', 'data-fig', 'Figura\\ref{fig:&lt;data-fig&gt;}' ],
                [ 'plugin-ref-table', 'data-table', 'Tabela\\ref{fig:&lt;data-table&gt;}' ],
                [ 'br', 'Não', '\\\\' ],
                [ 'strong', 'Não', '\\textbf{&lt;conteúdo&gt;}' ],
                [ 'i', 'Não', '\\textit{&lt;conteúdo&gt;}' ],
            ]
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe que no processamento de
                <plugin-gloss id="html"></plugin-gloss>
                o conteúdo da maioria das tags é irrelevante,
                com excessão das tags strong e i.
                Isso se dá pois na maioria das vezes a informação
                de interesse é guardada nos atributos, ficando
                o conteúdo servindo apenas para que se
                exiba o plugin de forma confortável no texto que o usuário
                está digitando na
                <plugin-gloss id="ui"></plugin-gloss>.
                As tags strong e i, são respectivamente,
                o negrito e itálico. São padrões do
                <plugin-gloss id="html"></plugin-gloss>
                e aqui seus conteúdos são aproveitados
                para dentro dos comandos equivalentes em
                <plugin-gloss id="latex"></plugin-gloss>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 5, text: 'Código do processamento HTML' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Para processar os plugins está sendo utilizada a biblioteca cheerio.
                A string a ser analisada, recebida na linha 3, passa por uma checagem de
                tags presentes. Por exemplo: Observe a linha 5. Sempre que houver
                qualquer ocorrência de plugin-ref, esta é substituída através do
                comando replaceWith pelo texto:
                \\cite{\${$(node).attr('id')}}.
                Observe que a parte $(node).attr('id')
                é o que recupera o atributo "id"  da tag.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'processHTML',
            start_line: 1,
            text: `
import * as cheerio from 'cheerio';

export function processHTML(text: string): string{
    const $ = cheerio.load(text);
    $('plugin-ref').replaceWith((_, node) => {
        return \`\\\\cite{\${$(node).attr('id')}}\`;
    }); [...]
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Por fim, na linha 40 é retornado o resultado do processamento
                em HTML. Note que ele é recuperado a partir do nó <i>body</i> do documento
                virtual, e então, a função text() é chamada para recuperar a
                representação textual do que foi processado.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'processHTML2',
            start_line: 39,
            text: `
    [...]
    return $('body').text();
}
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O código completo do processHTML.ts juntamente com
                todos os plugins pode ser encontrado no repositório do projeto.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Pós processamento' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Após feito o processo de escape e processamento de HTML, ainda podem
                sobrar alguns caracteres remanescentes problemáticos à correta
                interpretação do código
                <plugin-gloss id="latex"></plugin-gloss>.
                Por exemplo: Os caracteres &lt; e &gt; são escapados no
                <plugin-gloss id="html"></plugin-gloss>
                como as entidades lt e gt, respectivamente. Eles por sua vez,
                ao passar pelo escape de caracteres, possuem o caractere
                & escapado como \\&. Seu código final acaba resultando em
                \\< e \\>, que tem de novamente ser convertido em
                &lt; e &gt;.
                Observe o código abaixo:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'posProcess1',
            start_line: 1,
            text: `
export function posProcess(str: string): string{
    let new_str = str.replace(/\\\\</gm, '<');
    new_str = new_str.replace(/\\\\>/gm, '>');
    new_str = new_str.replace(/\\\\"/gm, '"');
    new_str = new_str.replace(
        /"(?!\\w|\\}|\\)|\\\\|~|\\.|,|\\{|\\(|\\[)/gm,
        '"~'
    );
    new_str = new_str.replace(
        /(\\\\textbackslash)((\\s?\\n)|(\\s{2,}))/gm,
        '$1~'
    );
    return new_str;
}
`.trim()
        }
    },
    // {
    //     type: 'paragraph',
    //     data: {
    //         text: `
    //             Escrever a conclusão.
    //         `.trim().replace(/^\s{16}/gm, '')
    //     }
    // },
]