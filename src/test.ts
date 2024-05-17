import { data, refs } from '@/tests';
import { getParagraph } from '@/parser/paragraph';
import { getHeader } from '@/parser/header';
import { mountRefs } from '@/parser/mountRefs';
import { writeFile } from 'fs/promises';
import path from 'path';


const TESTS_PATH = '/home/higor/Documents/TCC/editor2/src/tests'

async function main() {
    const text = data.map(block => {
        switch(block.type){
            case 'header':
                return getHeader(block);
            case 'paragraph':
                return getParagraph(block);
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
}

main();