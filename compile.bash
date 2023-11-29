#! /bin/bash

pdflatex latex.tex;
makeglossaries latex;
bibtex latex;
pdflatex latex.tex;
pdflatex latex.tex;