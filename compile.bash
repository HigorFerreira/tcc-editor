#! /bin/bash

pdflatex latex.tex;
makeglossaries latex;
pdflatex latex.tex;