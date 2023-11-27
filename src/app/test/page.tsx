import latex from 'node-latex'
import fs from 'fs'
import path from 'path'

async function main() {

    console.log("====== Inside main function".padEnd(50, "="));

    const file_path = path.resolve('latex.tex');
    const output_path = path.resolve('output.pdf');
    const input = fs.createReadStream(file_path);
    const output = fs.createWriteStream(output_path);
    console.log({ latex })
    const pdf = latex(input);

    pdf.pipe(output);
    await (() => new Promise((resolve, reject) => {
        pdf.on('data', data => {
            console.log("Data");
            console.log(data);
        })
        pdf.on('error', err => {
            // console.error("======= PDF ERROR", err);
            reject(err);
        });
        pdf.on('finish', () => {
            console.log("PDF Generated");
            resolve(true);
        })
    }))();



    console.log(path.resolve());
    console.log("====== End main".padEnd(50, "="));
    return JSON.stringify({
        file_path,
        output_path,
    }, null, 4).replace(/\n/g, '<br>').replace(/\s/g, '&nbsp;');
}

export default async function Test(){
    const result = await main();

    return <div>
        <div dangerouslySetInnerHTML={{ __html: result }}></div>
    </div>
}