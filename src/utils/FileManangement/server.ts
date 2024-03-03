"use server";
import {
    writeFile,
} from 'fs/promises'

export async function save(obj: object){
    console.log("DIRECTORY PATH", process.env.ROOT_DIR);
    await writeFile(process.env.USER_FILES_DIR.concat("/saved.json"), JSON.stringify(obj));
}