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
        return `\\footnote{${$(node).data().note}}`
    });
    $('plugin-ref-fig').replaceWith((_, node) => {
        return `Figura\\ref{fig:${$(node).data().fig}}`;
    });
    // $('latex').replaceWith((_, node) => {
    //     return `\\latex`;
    // });
    $('i').replaceWith((_, node) => {
        return `\\textit{${$(node).text()}}`;
    });
    return $('body').text();
}