import {
    Block,
} from '@/parser/types'

import { Roteamento } from '@/tests/chapter3/nextjs/roteamento'
import { PaginaPrincipal } from '@/tests/chapter3/nextjs/paginaPrincipal'

/*
<plugin-gloss id="regex"></plugin-gloss>
<plugin-ref id="mdn-regex"></plugin-ref>
<plugin-ref-fig data-fig="Passos para criar um documento">Figura 1</plugin-ref-fig>
<plugin-ref-table data-table="json-descs">Tabela</plugin-ref-table>
<plugin-footnote data-note="

">
*</plugin-footnote>
*/

export const nextjs: Block[] = [
    {
        type: 'header',
        data: { level: 2, text: 'O servidor NextJs' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O servidor da aplicação será construído em cima do NextJs, a
                framewok React para a
                <plugin-gloss id="web"></plugin-gloss>.
                Iniciar o projeto é uma tarefa simples. Basta apenas navegar
                para algum diretório onde se deseja criar o projeto e
                digitar o seguinte comando em
                <plugin-gloss id="bash"></plugin-gloss><plugin-footnote data-note="
                    Bash (<i>Bourne Again Shell</i>): Interface de linha de comando do linux
                ">
                *</plugin-footnote>:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'createNextJsCommand',
            start_line: 1,
            text: `
npx create-next-app@latest
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Vale ressaltar que é necessário ter o NodeJs na versão 18.17 ou superior
                para iniciar o projeto em NextJs. Após rodar este comando, o prompt fará uma
                série de perguntas para a configuração do mesmo, observe o exemplo abaixo:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'promptNextJs',
            start_line: 1,
            text: `
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use \`src/\` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Os itens a serem configurados são:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'list',
        data: {
            type: 'numbered',
            list: [
                'Nome do projeto',
                'Será feito o uso de TypeScript?',
                'Será feito o uso de ESlint?',
                'Será feito o uso de Tailwind CSS?',
                'Será usado o diretório \`src\` como diretório padrão de código?',
                'Será utilizado o App Router (Roteador de App)?',
                'Deseja customizar o apelido padrão de importação (@/*)?',
                'Qual apelido de importação gostaria de configurar?'
            ]
        }
    },
    // <plugin-ref-table data-table="escape-characters">Tabela</plugin-ref-table>
    {
        type: 'paragraph',
        data: {
            text: `
                A tabela
                <plugin-ref-table data-table="config-next-app">Tabela</plugin-ref-table>
                mostra as opções escolhidas para este projeto:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'table',
        data: {
            id: 'config-next-app',
            title: 'Configurações do servidor NextJs',
            description: '',
            width: 0.94,
            header: [ 'Pergunta', 'Resposta' ],
            column_sizes: [ 0.87, 0.13 ],
            items: [
                [ 'What is your project named? my-app', 'editor2' ],
                [ 'Would you like to use TypeScript? No / Yes', 'Yes' ],
                [ 'Would you like to use ESLint? No / Yes', 'No' ],
                [ 'Would you like to use Tailwind CSS? No / Yes', 'No' ],
                [ 'Would you like to use \`src/\` directory? No / Yes', 'Yes' ],
                [ 'Would you like to use App Router? (recommended) No / Yes', 'Yes' ],
                [ 'Would you like to customize the default import alias (@/*)? No / Yes', 'Yes' ],
                [ 'What import alias would you like configured? @/*', '@/*' ],

            ]
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Os comandos a seguir instalam todas as dependências necessárias do projeto:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: 'yarnAddDpts',
            start_line: 1,
            text: `
yarn add @editorjs/editorjs @editorjs/header @editorjs/list
yarn add -D @types/editorjs__header @types/node @types/react
yarn add @emotion/react @emotion/styled antd cheerio
yarn add -D @types/react-dom @types/uuid typescript 
yarn add node-latex react-icons uuid
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Após isso o utilitário de criação da aplicação NextJs
                irá criar uma estrutura de pastas e arquivos de projeto
                totalmente configurado e pronto para ser programado.
                A
                <plugin-ref-fig data-fig="estrutura-basica-projeto">Figura</plugin-ref-fig>
                mostra a estrutura de pastas base do projeto, com todos os seus respectivos
                arquivos de configuração, roteamento e componentes básicos do react.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'estrutura-basica-projeto',
            fileType: 'png',
            imageUrl: '',
            width: 0.4,
            title: 'Estrutura de pastas e arquivos básica do projeto',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'table',
        data: {
            id: 'pastas-projeto',
            title: 'Estrutura de pastas básica do projeto e suas atribuições',
            description: 'Fonte: Autoria própria',
            width: 1,
            column_sizes: [ 0.2, 0.8 ],
            header: [ 'Arquivo/Pasta', 'Descrição' ],
            items: [
                [ 'public', 'Pasta pública para distribuição de arquivos estáticos.' ],
                [ 'src', `
                    Esta pasta é praticamente
                    o código fonte da aplicação onde todas as operações acontecem, tais
                    quais: Edição com seus respectivos plugins; parser dos arquivos de
                    saída e tudo mais.
                ` ],
                [ 'declaration.d.ts', `
                    Arquivo de declarações. Aqui é anotado algumas tipagens para serem usadas
                    globalmente durante o processo de desenvolvimento.
                ` ],
                [ '.env.local', 'Arquivo de variáveis de ambiente para serem usadas como teste durante\
                o tempo de desenvolvimento.' ],
                [ '.git', 'Pasta de controle do <i>git</i>.' ],
                [ '.gitignore', 'Arquivos a serem ignorados pela ferramenta de versionamento.' ],
                [ 'next.config.js', 'Arquivo de configurações do NextJs.' ],
                [ 'next-env.d.ts', '' ],
                [ 'package.json', `
                    Arquivo que define que o projeto é um projeto NodeJs. Aqui está toda a informação sobre dependências
                    do projeto, que são todos os pacotes usados de terceiros. Também possui definição
                    de scripts úteis para serem utilizados no processo de desenvolvimento.
                ` ],
                [ 'README.md', 'Documentação de apresentação do projeto.' ],
                [ 'tsconfig.json', 'Configurações do TypeScript.' ],
                [ 'yarn-error.log', 'Erros do gerenciador de pacotes yarn' ],
                [ 'yarn.lock', 'Arquivo de lock de dependências do gerenciador de pacotes yarn.' ],
            ]
        }
    },
    ...Roteamento,
    ...PaginaPrincipal,
]