#! /bin/bash
PREV_PATH=$(pwd);
LATEXPATH="$(pwd)/src/tests/latex";

cd $LATEXPATH;

pdflatex doc.tex;
bibtex doc;
makeglossaries doc;
bibtex doc.tex;
pdflatex doc.tex;
pdflatex doc.tex;

cp "$LATEXPATH/doc.pdf" "$PREV_PATH/output.pdf";

cd $PREV_PATH;