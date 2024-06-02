export function escapeCharacters(str: string){
    let newStr = str;
    newStr = newStr.replace(/\\/gm, '\\textbackslash ');
    newStr = newStr.replace(/#/gm, '\\#');
    newStr = newStr.replace(/\$/gm, '\\$$');
    newStr = newStr.replace(/%/gm, '\\%');
    newStr = newStr.replace(/\^/gm, '\\textasciicircum ');
    newStr = newStr.replace(/&/gm, '\\&');
    newStr = newStr.replace(/_/gm, '\\_');
    newStr = newStr.replace(/\{/gm, '\\{');
    newStr = newStr.replace(/\}/gm, '\\}');
    newStr = newStr.replace(/\[/gm, '\\[');
    newStr = newStr.replace(/\]/gm, '\\]');
    newStr = newStr.replace(/~/gm, '\\textasciitilde ');

    return newStr;
}