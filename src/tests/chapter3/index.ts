import {
    Block,
} from '@/parser/types';

import { initial } from './initial';
import { parsing } from './parsing';


export const data: Block[] = initial
    .concat(parsing);