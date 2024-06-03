import {
    Block,
} from '@/parser/types';

import { initial } from './initial';
import { parsing } from './parsing';
import { editorjs } from './editorjs';
import { nextjs } from './nextjs';

export const data: Block[] = initial
    .concat(nextjs)
    .concat(editorjs)
    .concat(parsing);