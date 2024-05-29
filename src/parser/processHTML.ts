import * as cheerio from 'cheerio';

export function processHTML(text: string): string{
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
        const text = $(node).data().note as string;
        const processed = processHTML(text);
        return `\\footnote{${processed}}`;
    });
    $('plugin-ref-fig').replaceWith((_, node) => {
        return `Figura\\ref{fig:${$(node).data().fig}}`;
    });
    // $('plugin-tag').replaceWith((_, node) => {
    //     return `${$(node).data().tag}`;
    // });
    // $('latex').replaceWith((_, node) => {
    //     return `\\latex`;
    // });
    $('i').replaceWith((_, node) => {
        return `\\textit{${$(node).text()}}`;
    });
    return $('body').text();
}