import {
    Block,
} from '@/parser/types'

export const mounting: Block[] = [
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