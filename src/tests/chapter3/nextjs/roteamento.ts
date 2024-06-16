import {
    Block,
} from '@/parser/types'

import { v4 as uuidv4 } from 'uuid';

/*
<plugin-gloss id="regex"></plugin-gloss>
<plugin-ref id="mdn-regex"></plugin-ref>
<plugin-ref-fig data-fig="">Figura 1</plugin-ref-fig>
<plugin-ref-table data-table="json-descs">Tabela</plugin-ref-table>
<plugin-footnote data-note="

">
*</plugin-footnote>
*/

export const Roteamento: Block[] = [
    {
        type: 'header',
        data: {
            level: 3,
            text: 'Roteamento (App Router)'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                No ato de configuração do servidor, conforme mostrado na
                <plugin-ref-table data-table="config-next-app">Tabela</plugin-ref-table>,
                na pergunta:
                <i>"Would you like to use App Router? (recommended) No / Yes"</i>,
                foi escolhida a opção sim, <i>"yes"</i>.
                Isto significa que no código fonte do projeto haverá uma pasta
                chamada
                <plugin-gloss id="app"></plugin-gloss>
                onde serão arquivados os roteamentos, as páginas,
                <i>layouts</i>, páginas de erro, <i>loading</i>, entre outros.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A
                <plugin-ref-fig data-fig="app-router">Figura 1</plugin-ref-fig>
                mostra a estrutura da pasta
                <plugin-gloss id="app"></plugin-gloss>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'app-router',
            description: 'Fonte: Autoria própria',
            title: 'Estrutura da pasta de roteamento (App Router)',
            width: 0.8,
            fileType: 'png',
            imageUrl: '',
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe os arquivos destacados em azul e rosa, respectivamente
                page.tsx e  layout.tsx. A extensão
                <plugin-gloss id="tsx"></plugin-gloss>
                significa o mesmo que
                <plugin-gloss id="jsx"></plugin-gloss>,
                com a difereça de que é um arquivo em <i>TypeScript</i> ao
                invés de <i>JavaScript</i>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Os arquivos <i>page</i> e layout são a primeira página da aplicação.
                Por estarem no nível do diretório
                <plugin-gloss id="app"></plugin-gloss> (dentro da pasta app)
                esta página será mapeada para a rota / na navegação. Isto
                significa que quando o servidor estiver rodando e o usuário
                acessar o endereço do serviço, o código contido em
                <i>page</i>.tsx renderizará o conteúdo da página para o
                usuário.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O arquivo layout.tsx serve como um <i>template</i> para a página.
                Pode-se pensá-lo como uma espécie de casca da aplicação.
                A página herda o que está em <i>layout</i>, de modo que o que será
                renderizado no <i>Browser</i> será o <i>template</i>, acrescido da <i>page</i>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Por estar no diretório raiz de app, todas as rotas de páginas
                da aplicação herdarão o que está em <i>layout</i>.tsx. Arquivos de 
                <i>layout</i> também podem ser escritos em rotas que não sejam a raiz.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: {
            level: 4,
            text: 'Exemplo de criação de uma rota'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Para criar uma rota para uma nova página no <i>NextJs</i>, basta que
                uma pasta no diretótio app seja criada. Esta pasta deve conter
                pelo menos um arquivo page.tsx ou route.ts. Observe a
                <plugin-ref-fig data-fig="page-route-example">Figura 1</plugin-ref-fig>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'page-route-example',
            description: 'Fonte: Autoria própria',
            title: 'Estrutura da pasta de roteamento (App Router)',
            width: 0.8,
            fileType: 'png',
            imageUrl: '',
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Ao criar a pasta example com o arquivo page.tsx. O servidor
                mapeará para a rota /example no <i>Browser</i>, renderizando o componente
                exportado em <i>page</i>. Observe a seguir o código em layout.tsx:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'layoutExample',
            start_line: 1,
            text: `
import { PropsWithChildren } from "react";

export default function Layout(
    { children }: PropsWithChildren
){
    return <section>
        <h1>Eu sou o Layout</h1>
        { children }
    </section>
}
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe que o arquivo exporta uma função
                denominada <i>Layout</i>, que retorna um código
                <plugin-gloss id="tsx"></plugin-gloss>
                a ser renderizado na página.
                Na linha 4 a função recebe um objeto
                como parâmetro que é anotado por PropsWithChildren.
                Dentro deste objeto há a propriedade
                <i>children</i><plugin-footnote data-note="
                    Do inglês: Filhos.
                ">
                *</plugin-footnote>,
                que
                contém outros componentes <i>React</i> a serem renderizados.
                No caso, o <i>NextJs</i> injetará dentro de <i>children</i> o código que
                é exportado por page.tsx.
                A linha 8 é a posição onde este componente será renderizado.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe abaixo o código de page.tsx:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'pageExample',
            start_line: 1,
            text: `
export default function Page(){
    return <div>
        Olá mundo!
        Eu sou uma page.
    </div>
}
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                No código <i>page</i> apenas é exportada uma função (componente)
                <i>Page</i> que retorna uma frase simples: "Olá mundo! Eu sou uma <i>page</i>".
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: {
            level: 4,
            text: 'Executando o exemplo'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Para executar o exemplo e ver como ele se comporta no navegador
                do usuário, basta a partir do diretório do projeto rodar o
                seguinte comando:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: uuidv4().replace(/-/g, ''),
            start_line: 1,
            text: `
yarn dev
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Após rodar o comando o servidor iniciará localmente.
                A saída do terminal mostrará a porta do serviço a ser acessada
                afim de renderizar a página:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 1,
            text: `
yarn run v1.22.19
$ next dev
    Next.js 14.1.1
    - Local:        http://localhost:3000
    - Environments: .env.local

    Ready in 2.7s
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Ao acessar o endereço http://localhost:3000
                na rota /example, a página é renderizada
                conforme a
                <plugin-ref-fig data-fig="example-route">Figura 1</plugin-ref-fig>:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'example-route',
            description: 'Fonte: Autoria própria',
            title: 'Exemplo de roteamento',
            width: 0.6,
            fileType: 'png',
            imageUrl: '',
        }
    },
]