import { CodesObjectType } from '@/parser/types';

export function mountCodes(codes: CodesObjectType){
    return Object.keys(codes).map(key => {
        const { uuid, start_line } = codes[key].data;

        return `
            \\DefineVerbatimEnvironment{${uuid}}{Verbatim}
            {numbers=left, numbersep=8pt, frame=single, framerule=0.5pt, firstnumber=${start_line}}
        `.trim().replace(/^\s{12}/gm, '');
    }).join('\n');
}