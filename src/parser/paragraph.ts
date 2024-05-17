import { escapeCharacters } from './escape';
import { ParagraphBlock } from './types';
import * as cheerio from 'cheerio';


export function getParagraph(block: ParagraphBlock){
    const text = escapeCharacters(block.data.text);
    const $ = cheerio.load(text);
    $('plugin-ref').replaceWith((_, node) => {
        return `\\cite{${$(node).attr('id')}}`;
    });
    // $('br').replaceWith((_, node) => {
    //     return ` \\\n`;
    // });
    $('plugin-gloss').replaceWith((_, node) => {
        return `\\acrshort{${$(node).attr('id')}}`;
    })
    $('plugin-footnote').replaceWith((_, node) => {
        return `\\footnote{${$(node).data().note}}`
    });
    return $('body').text();
}