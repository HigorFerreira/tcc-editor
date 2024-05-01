export { default as FileManangement } from './FileManangement';

export function escapeHTML(str: string): string {
    const div = document.createElement("div");
    div.innerText = str;
    return div.innerHTML;
}