import {
    Block,
} from '@/parser/types'

export const plugins: Block[] = [
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
]