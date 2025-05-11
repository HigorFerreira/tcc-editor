pdflatex doc.tex;
bibtex doc;
makeglossaries doc;
bibtex doc.tex;
pdflatex doc.tex;
pdflatex doc.tex;

cp doc.pdf /out/output.pdf