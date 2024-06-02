export function posProcess(str: string): string{
    let new_str = str.replace(/\\</gm, '<');
    new_str = new_str.replace(/\\>/gm, '>');
    new_str = new_str.replace(/\\"/gm, '"');
    new_str = new_str.replace(/"(?!\w|\}|\)|\\|~|\.|,|\{|\(|\[)/gm, '"~');
    new_str = new_str.replace(/(\\textbackslash)((\s?\n)|(\s{2,}))/gm, '$1~');
    return new_str;
}