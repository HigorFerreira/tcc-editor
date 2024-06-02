import {
    Block,
} from '@/parser/types'

export const initial: Block[] = [
    {
        type: 'header',
        data: { level: 1, text: 'Desenvolvimento' }
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
                    Esta pasta é onde praticamente todas as coisas na aplicação vão acontecer,
                    aqui está as páginas e seus devidos roteamentos, o editor e seus plugins,
                    o parser e tudo mais.
                ` ],
                [ 'declaration.d.ts', `
                    Arquivo de declarações. Aqui é anotado algumas tipagens para serem usadas
                    globalmente durante o processo de desenvolvimento.
                ` ],
                [ '.env.local', 'Arquivo de variáveis de ambiente para serem usadas como teste durante\
                o tempo de desenvolvimento' ],
                [ '.git', 'Pasta de controle do git.' ],
                [ '.gitignore', 'Arquivos a serem ignorados pela ferramenta de versionamento.' ],
                [ 'next.config.js', 'Arquivo de configurações do NextJs' ],
                [ 'next-env.d.ts', '' ],
                [ 'package.json', `
                    Arquivo que define que o projeto é um projeto NodeJs. Aqui está toda a informação sobre dependencias
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
    {
        type: 'header',
        data: { level: 2, text: 'NextJs e estrutura' }
    },
    {
        type: 'header',
        data: { level: 2, text: 'EditorJS' }
    },
    {
        type: 'header',
        data: { level: 3, text: 'Provider' }
    },
    {
        type: 'header',
        data: { level: 3, text: 'Plugins' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Classe base de plugin' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Plugin 1' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Plugin 2' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Plugin N' }
    },
]