export function posProcess(str: string): string{
    let new_str = str.replace(/\\</gm, '<');
    new_str = new_str.replace(/\\>/gm, '>');
    return new_str;
}