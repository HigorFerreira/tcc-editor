FROM texlive/texlive:latest as builder
RUN tlmgr update --self && \
    tlmgr install \
    # For glossaries
    glossaries \
    # For advanced bibliography
    biblatex \
    # For PDF utilities
    pdfx \
    # For code listings
    listings \
    # For better cross-references
    zref \
    # For better hyperlinks
    hyperref

FROM texlive/texlive

COPY --from=builder /usr/local/texlive/ /usr/local/texlive/

RUN mkdir /out

# Install Bun
RUN apt-get update && apt-get install -y curl unzip \
    && curl -fsSL https://bun.sh/install | bash \
    && apt-get remove -y curl unzip \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

ENV PATH="/root/.bun/bin:${PATH}"
WORKDIR /workspace

CMD [ "tail", "-f", "/dev/null" ]