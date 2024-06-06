import {
    Block,
} from '@/parser/types';

import { v4 as uuidv4 } from 'uuid';

/*
<plugin-gloss id=""></plugin-gloss>
<plugin-ref id="mdn-regex"></plugin-ref>
<plugin-ref-fig data-fig="">Figura 1</plugin-ref-fig>
<plugin-ref-table data-table="">Tabela</plugin-ref-table>
<plugin-footnote data-note="

">
*</plugin-footnote>
*/

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

export const chapter4: Block[] = [
    {
        type: 'header',
        data: {
            level: 1,
            text: 'Considerações finais'
        }
    }
]