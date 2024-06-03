import { PageBreakBlock } from '@/parser/types';

export function pageBreak(block: PageBreakBlock){
    return '\\clearpage';
}