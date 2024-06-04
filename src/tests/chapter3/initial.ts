import {
    Block,
} from '@/parser/types'

export const initial: Block[] = [
    {
        type: 'header',
        data: { level: 1, text: 'Desenvolvimento' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A base da aplicação se dará por meio de um servidor onde serão realizadas
                todas as operações. Este distribuirá o conteúdo estático e dinâmico
                para a interação com o usuário, além também de fornecer rotas e funções
                para o processamento do conteúdo gerado pelo usuário.
                Por se tratar de uma aplicação em seu estágio inicial de concepção,
                este projeto não se preocupará com autenticação e autorização de usuários.
                Consistirá apenas de um servidor simples a ser rodado localmente a fim de
                se desenvolver suas funcionalidades principais.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
]