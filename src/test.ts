import { data, refs, gloss } from '@/tests';
import { getParagraph } from '@/parser/paragraph';
import { getHeader } from '@/parser/header';
import { mountRefs } from '@/parser/mountRefs';
import { mountGlossary } from '@/parser/mountGlossary';
import { mountGlossaryPrint } from '@/parser/mountGlossaryPrint';
import { getImage } from '@/parser/image';
import { getList } from '@/parser/list';
import { getTable } from '@/parser/table';
import { pageBreak } from '@/parser/page-break';
import { writeFile } from 'fs/promises';
import path from 'path';


const TESTS_PATH = '/home/higor/Documents/TCC/editor2/src/tests'

async function main() {
    const text = data.map(block => {
        // @ts-ignore
        switch(block.type){
            case 'header':
                // @ts-ignore
                return getHeader(block);
            case 'paragraph':
                // @ts-ignore
                return getParagraph(block);
            case 'page-break':
                // @ts-ignore
                return pageBreak(block);
            case 'image':
                // @ts-ignore
                return getImage(block);
            case 'list':
                // @ts-ignore
                return getList(block);
            case 'table':
                // @ts-ignore
                return getTable(block);
        }
    }).join('\n\n');

    await writeFile(
        path.join(TESTS_PATH, 'body.tex'),
        text
    );

    await writeFile(
        path.join(TESTS_PATH, 'latex', 'referencias.bib'),
        mountRefs(refs)
    );

    await writeFile(
        path.join(TESTS_PATH, 'makeglossaries.tex'),
        mountGlossary(gloss)
    );

    await writeFile(
        path.join(TESTS_PATH, 'printglossaries.tex'),
        mountGlossaryPrint(gloss)
    );
}

main();