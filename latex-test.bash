#! /bin/bash
PREV_PATH=$(pwd);
LATEXPATH="$(pwd)/src/tests/latex";

cd $LATEXPATH;

# rm doc.abrev-glg doc.abrev-glo doc.abrev-gls doc.abreviacao-glg doc.abreviacao-glo doc.abreviacao-gls doc.aux doc.bbl doc.blg doc.glg doc.glo doc.gls doc.ist doc.lof doc.log doc.lot doc.pdf doc.sigla-glg doc.sigla-glo doc.sigla-gls doc.siglas-glg doc.siglas-glo doc.siglas-gls doc.simbolo-glg doc.simbolo-glo doc.simbolo-gls doc.simbolos-glg doc.simbolos-glo doc.simbolos-gls doc.toc;

pdflatex doc.tex;
bibtex doc;
makeglossaries doc;
bibtex doc.tex;
pdflatex doc.tex;
pdflatex doc.tex;

cp "$LATEXPATH/doc.pdf" "$PREV_PATH/output.pdf";

cd $PREV_PATH;