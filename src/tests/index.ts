import {
    HeaderBlock,
    ParagraphBlock,
    PageBreakBlock,
    ImageBlock,
    ListBlock,
} from '@/parser/types'

export { refs } from './refs'
export { gloss } from './gloss'

export const data = [
    {
        type: 'header',
        data: { level: 1, text: 'Introdução' },
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Escrever um trabalho científico pode ser uma tarefa desafiadora. <plugin-ref id="severino">(SEVERINO, 2017)</plugin-ref>
                destaca a complexidade e o rigor necessários na elaboração de trabalhos científicos, que não
                apenas envolvem o domínio do conteúdo específico, mas também a aderência às normas
                técnicas para apresentação formal e formatação correta.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A Associação Brasileira de Normas Técnicas 
                (<plugin-gloss id="abnt" data-type="siglas">ABNT</plugin-gloss>)
                , é a entidade responsável por,
                dentre outras, fornecer as normas que regulam o processo de criação de trabalhos acadêmicos.
                A Norma Brasileira Regulamentadora 
                (<plugin-gloss id="nbr" data-type="siglas">NBR</plugin-gloss>)
                 Nº 14724, por exemplo: Especifica os princípios
                gerais para a elaboração de (teses, dissertações e outros), visando sua apresentação à
                instituição (banca, comissão examinadora de professores, especialistas designados e/ou
                outros)
                <plugin-ref id="abnt" data-type="siglas">(ABNT, 2011)</plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Ademais, ainda com respeito aos trabalhos acadêmicos, não somente a
                regulamentação da 
                <plugin-gloss id="nbr" data-type="siglas">NBR</plugin-gloss>
                14724 deve ser observada. Há ainda a 
                <plugin-gloss id="nbr" data-type="siglas">NBR</plugin-gloss>
                6023 que trata a respeito
                da elaboração de referências e a 
                <plugin-gloss id="nbr" data-type="siglas">NBR</plugin-gloss>
                10520, que diz respeito às citações em documentos.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                <plugin-ref id="castro">(Castro)</plugin-ref>, adverte que: "Em ciência, não pode haver uma
                separação entre forma e conteúdo. Trata-se de uma separação fictícia, pois fica se conhecendo
                o conteúdo pela forma." Ou seja: A forma do trabalho, sua apresentação, sua formatação e
                todo o seu arranjo gráfico é tão importante quanto seu conteúdo. 
                <plugin-ref id="medeiros">Medeiros (2012, p. 245)</plugin-ref> vai
                complementar essa visão, afirmando que a apresentação gráfica "[...] contribui para a
                consecução de um trabalho capaz de atingir seu objetivo. Monografia realizada sem a
                preocupação gráfica, em geral, acaba malsucedida."
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Em seu artigo, 
                <plugin-ref id="SilvaVitoria">Silva e Vitória (2014)</plugin-ref>
                vão analisar as percepções e dificuldades dos
                alunos de um curso superior em Tecnologia de Gestão em Recursos Humanos. Dentre suas
                dificuldades, (dos alunos em questão), é destacada a questão da formatação do trabalho
                acadêmico. Há também o fato de que as bancas avaliam os trabalhos baseadas em critérios da
                própria Instituição de Ensino Superior (
                <plugin-gloss id="ies" data-type="siglas">IES</plugin-gloss>
                ), critérios estes que não estão necessariamente
                presentes nas normas da <plugin-gloss id="abnt" data-type="siglas">ABNT</plugin-gloss>, ou seja, há uma subjetividade presente que não é comum a
                todas às <plugin-gloss id="ies" data-type="siglas">IES</plugin-gloss> quanto a questão da formatação. Essa subjetividade contribui para a confusão dos
                alunos, pois a <plugin-gloss id="ies" data-type="siglas">IES</plugin-gloss> avaliará de acordo com aquilo que julga apropriado, o que muitas vezes
                pode obscurecer o direcionamento do aluno ao redigir/formatar seu trabalho."
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'page-break',
    } satisfies Partial<PageBreakBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                <plugin-ref id="santos">Santos (2020)</plugin-ref>
                em seu Trabalho de Conclusão de Curso
                (<plugin-gloss id="tcc" data-type="siglas">TCC</plugin-gloss>)
                , também analisa as
                dificuldades encontradas por egressos, desta vez do curso de Ciências Contábeis da
                Universidade Federal da Paraíba
                (<plugin-gloss id="ufpb" data-type="siglas">UFPB</plugin-gloss>).
                Em sua pesquisa é destacado que "Quanto a
                formatação do trabalho com as normas da 
                <plugin-gloss id="abnt" data-type="siglas">ABNT</plugin-gloss>, [...], 60% teve alguma dificuldade, inclusive
                32% teve muita dificuldade.", ou seja, a formatação do trabalho é um grande desafio presente
                na vida de boa parte dos estudantes em processo de escrita.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 2, text: 'Objetivo' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Levando em consideração os problemas que os alunos de diversas instituições de ensino enfrentam ao elaborar seus respectivos
                trabalhos (conforme apresentado acima), o objetivo deste instrumento é desenvolver uma plataforma web de alta
                interatividade<plugin-footnote
                    data-note="Refere-se à capacidade de um sistema, aplicação ou interface de responder
                        às ações do usuário de maneira eficaz e intuitiva">
                *</plugin-footnote>
                e
                inteligibilidade<plugin-footnote
                    data-note="Refere-se à clareza e compreensibilidade da interface, documentação e feedback fornecidos pelo
                    sistema. Um software inteligível facilita o entendimento do usuário sobre como utilizá-lo e quais são os resultados de suas ações.">
                    *</plugin-footnote>,
                de modo que o discente possa se preocupar apenas com o conteúdo. Os detalhes de formatação, de acordo com os padrões da
                <plugin-gloss id="abnt" data-type="siglas">ABNT</plugin-gloss>
                e da
                <plugin-gloss id="ies" data-type="siglas">IES</plugin-gloss>,
                ficarão a cargo da própria plataforma.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A criação de um trabalho de
                <plugin-gloss id="tcc" data-type="siglas">TCC</plugin-gloss>
                se dará basicamente por três passos básicos: Escrita em blocos;
                <i>Parsing</i><plugin-footnote data-note="O termo Parsing, (do inglês: análise), será utilizado no
                sentido de analisar e transformar algo em outra coisa.">*</plugin-footnote>
                e
                Documento em
                <plugin-gloss id="pdf" data-type="siglas">pdf</plugin-gloss>
                . A <plugin-ref-fig data-fig="Passos para criar um documento">Figura 1</plugin-ref-fig> ilustra esse fluxo na linha do tempo.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'image',
        data: {
            uuid: 'Passos para criar um documento',
            description: 'Fonte: Autoria própria',
            title: 'Passo a passo para criar um documento na plataforma',
            width: 0.8,
            fileType: 'png',
            imageUrl: '',
        }
    } satisfies Partial<ImageBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O usuário interagirá com a aplicação escrevendo blocos que serão transformados
                no documento final em
                <plugin-gloss id="pdf" data-type="siglas">pdf</plugin-gloss>
                . A este processo daremos o nome de Parsing. Após este, bastará
                enviar o download do <plugin-gloss id="pdf" data-type="siglas">pdf</plugin-gloss>
                ao usuário com todo o padrão de formatação. Os trabalhos desenvolvidos nesta plataforma
                terão então duas versões: A versão de blocos, (sem formatação e interativa); e a versão
                final já formatada em <plugin-gloss id="pdf" data-type="siglas">pdf</plugin-gloss>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 2, text: 'Fluxo do documento' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'header',
        data: { level: 3, text: 'Escrita em blocos' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A escrita se dará de modo em que tudo será considerado um bloco.
                A escrita em blocos consiste numa abordagem em que o texto vai sendo
                escrito em seu fluxo natural, porém blocos podem ser adicionados à escrita.
                Um bloco é um elemento adicionado ao fluxo de trabalho que desenpenha um papel
                que o diferencia dos demais blocos.
                Por exemplo: Uma imagem pode ser considerada um bloco nesta abordagem, uma vez
                que não é um texto mas tem o objetivo de fornecer informações visuais. O próprio corpo
                do texto em si será considerado um bloco, denominado parágrafo. Um título será um bloco
                textual cujo objetivo será separar sessões do texto coesas. Uma lista será um bloco para enumerar
                intens e assim por diante. O documento será basicamente uma composição de diversos blocos dispostos de forma a formar
                uma unidade coesa final, que será o trabalho propiamente dito.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 3, text: 'Bloco' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Um bloco é uma unidade lógica no documento que desenpenha um papel especializado que nenhum
                outro bloco o faz. Por exemplo: O bloco mais importante da
                plataforma<plugin-footnote
                    data-note="O termo plataforma será utilizado
                    de forma intercambiável e como sinônimo de aplicativo; sistema web; ou aplicativo da web">
                *</plugin-footnote>
                será o de texto, (denominado bloco parágrafo), pois sem texto, não há trabalho.
                Sem texto não há tão pouco comunicação que transmita informação
                de caráter acadêmico-científico.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Semelhante ao bloco de texto, diversos outros blocos adjascentes
                auxiliarão na construção do documento acadêmico. O bloco de imagem, por
                exemplo, ajuda a exibir informações de forma ilustrativa e auxilia bastante
                em exemplos que estão sendo dados em determinado contexto do texto.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A maior parte dos blocos contará com uma espécie de submenu, (em termos de aplicação),
                que os permita personalizar. A personalização de blocos é importante para editar
                configurações e dar autonomia ao usuário em determinar mais precisamente o papel
                daquele bloco no texto. Por exemplo: Um bloco de título ajuda a separar o texto
                em unidades coesas. Porém, existem diversos tipos de títulos: Existe o título, o
                subtítulo, e até o subtítulo do subtítulo.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O submenu será a configuração que o usuário fará no bloco após escolhê-lo. No
                caso do título, por exemplo: Após o usuário escolher este bloco, poderá configurar
                o nível de título desejado. Nível este que varia do 1 ao 4, sendo 2; 3 e 4
                espécies de subtítulos. No caso de uma imagem, o submenu funcionará para que possa
                ser definida a imagem, bem como seu título de sua descrição.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A imagem abaixo ilustra a composição de um trabalho com seus respectivos blocos:
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'image',
        data: {
            uuid: 'blocos-no-documento',
            description: 'Fonte: Adaptado de <plugin-ref id="pucgo"></plugin-ref>',
            title: 'Divisão de blocos em uma imagem',
            width: 0.8,
            fileType: 'png',
            imageUrl: '',
        }
    } satisfies Partial<ImageBlock>,
    {
        type: 'header',
        data: { level: 3, text: 'Parsing' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O processo de Parsing é o processo que acontecerá sempre que o usuário desejar
                ver o
                <i>layout</i><plugin-footnote data-note="
                Do inglês: Disposição, ou esboço. Esta palavra geralmente está associada ao desenho ou visual de algo.
                ">
                *</plugin-footnote>
                da versão final de seu trabalho. Ele usa o código intermediário gerado pelos blocos para montar o
                <plugin-gloss id="pdf" data-type="siglas">pdf</plugin-gloss>
                final.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Este processo é, em termos simples, uma espécie de análise a ser aplicada no código gerado pelos blocos
                da aplicação. A plataforma gerará um código
                <plugin-gloss id="json" data-type="siglas">json</plugin-gloss><plugin-footnote data-note="
                Ver (sessão que trata do JSON)
                ">
                *</plugin-footnote>
                como resultado das interações do usuário, que posteriormente
                serão convertidos em código
                latex<plugin-footnote data-note="
                Ver (sessão que trata do latex)
                ">
                *</plugin-footnote>.
                Só então, finalmente será utilizado um utilitário que converterá o código latex
                em um documento
                <plugin-gloss id="pdf" data-type="siglas">pdf</plugin-gloss>. A
                <plugin-ref-fig data-fig="app-json-latex-pdf">Figura</plugin-ref-fig> ilustra esse processo:

            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'image',
        data: {
            uuid: 'app-json-latex-pdf',
            description: 'Fonte: Autoria própria.',
            title: 'Etapas do processo de Parsing',
            width: 0.9,
            fileType: 'png',
            imageUrl: '',
        }
    } satisfies Partial<ImageBlock>,
    // {
    //     type: 'header',
    //     data: { level: 2, text: 'Pilares da aplicação' }
    // } satisfies Partial<HeaderBlock>,
    // {
    //     type: 'paragraph',
    //     data: {
    //         text: `
    //             Descrever brevemente os pilares da aplicação
    //         `.trim().replace(/^\s{16}/gm, '')
    //     }
    // } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 2, text: 'Ambiente de desenvolvimento' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O ambiente de desenvolvimento é de extrema importância para que todas as ferramentas
                utilizadas possam funcionar em perfeita harmonia em suas respectivas integrações e
                colaborações. Muitas vezes, problemas de compatibilidade podem afetar
                o funcionamento das mesmas e impedir que o programa final
                seja executado corretamente, causando
                <i>bugs</i><plugin-footnote data-note="
                Do inglês: Inseto. Esta palavra é muito utilizada no contexto de desenvolvimento de aplicativos
                para se referir a problemas que afetam o funcionamento dos mesmos
                ">
                *</plugin-footnote>
                e outros imprevistos impeditivos tanto para a correta execução, quanto
                para a exeperiência de desenvolvimento.
                A lista abaixo diz respeito às ferramentas e ao ambiente onde este <i>software</i>
                foi desenvolvido, bem como todas as suas respectivas versões:
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'page-break',
    } satisfies Partial<PageBreakBlock>,
    {
        type: 'header',
        data: { level: 3, text: 'Lista de tecnologias do ambiente de desenvolvimento' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'list',
        data: {
            type: 'bullet',
            list: [
                'Sistema Operacional: Ubuntu 20.04',
                'NodeJs 20.10.0',
                'Npm 10.2.3',
                'Yarn 1.22.19',
                'pdfTeX 3.141592653-2.6-1.40.22 (TeX Live 2022/dev/Debian)',
                'kpathsea version 6.3.4/dev',
                'BibTeX 0.99d (TeX Live 2022/dev/Debian)',
                'makeglossaries (Utilitário latex)'
            ].sort((a, b) => a.length - b.length)
        }
    } satisfies Partial<ListBlock>,
    {
        type: 'header',
        data: { level: 2, text: 'Resultados' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'header',
        data: { level: 1, text: 'Fundamentação teórica' }
    } satisfies Partial<HeaderBlock>,
]