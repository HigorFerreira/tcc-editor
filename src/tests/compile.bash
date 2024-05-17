#! /bin/bash
PREV_PATH=$(pwd);
cd latex;
pdflatex doc.tex;
bibtex doc
makeglossaries doc;
bibtex doc.tex;
pdflatex doc.tex;
pdflatex doc.tex;
cd $PREV_PATH;