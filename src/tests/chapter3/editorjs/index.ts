import {
    Block,
} from '@/parser/types';

import { v4 as uuidv4 } from 'uuid';

/*
{
    type: 'image',
    data: {
        uuid: '',
        fileType: 'png',
        imageUrl: '',
        width: 0.4,
        title: '',
        description: 'Fonte: Autoria própria'
    }
},
*/

/*
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 1,
            text: `
`.trim()
        }
    },
*/

// @ts-ignore
export const editorjs: Block[] = [
    {
        type: 'header',
        data: { level: 2, text: 'EditorJS' }
    },
    {
        type: 'image',
        data: {
            uuid: 'estrutura-editor-componente',
            fileType: 'png',
            imageUrl: '',
            width: 0.9,
            title: 'Estrutura de pastas do componente Editor',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'sub-tree-render-editor',
            fileType: 'png',
            imageUrl: '',
            width: 0.7,
            title: 'Sub árvore de renderização do componente Editor',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'header',
        data: { level: 3, text: 'Classe Editor' }
    },
    {
        type: 'header',
        data: { level: 3, text: 'Provider' }
    },
    {
        type: 'header',
        data: { level: 3, text: 'BasePlugin' }
    },
    {
        type: 'header',
        data: { level: 3, text: 'InlineBasePlugin' }
    },
    {
        type: 'header',
        data: { level: 3, text: 'Plugins' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Image' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Header' }
    },
    {
        type: 'header',
        data: { level: 4, text: 'FootNote' }
    },
]