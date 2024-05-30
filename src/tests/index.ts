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
                <plugin-gloss id="json" data-type="abreviacao">json</plugin-gloss><plugin-footnote data-note="
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
        type: 'paragraph',
        data: {
            text: `
                Atender aos requisitos mínimos de hardware
                e software é fundamental para garantir uma experiência de usuário satisfatória
                e evitar problemas de desempenho ou compatibilidade com o aplicativo da plataforma.
                A seguir é listado o ambiente mínimo com seus respectivos softwares necessários
                para rodar o aplicativo da plataforma:
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
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
                'makeglossaries (Utilitário latex)',
                'TypeScript 5.3.3',
            ].sort((a, b) => a.length - b.length)
        }
    } satisfies Partial<ListBlock>,
    // {
    //     type: 'header',
    //     data: { level: 2, text: 'Resultados' }
    // } satisfies Partial<HeaderBlock>,
    {
        type: 'header',
        data: { level: 1, text: 'Fundamentação teórica' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A plataforma será construída sob alguns pilares fundamentais indispensáveis
                a seu funcionamento. São estes pilares que garantirão o sucesso e o correto
                funcionamento da aplicação, afim de que todo o objetivo discutido até o
                presente momento seja atingido.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A
                <plugin-ref-fig data-fig="pilares-da-plataforma">Figura</plugin-ref-fig>
                mostra em forma de mapa mental todos os principais pilares sobre os quais
                o aplicativo será contruído. Estes pilares são formados por diversas
                tecnologias, bibliotecas,
                <i>frameworks</i><plugin-footnote data-note="
                    Uma framework é como um kit de ferramentas pré-pronto que fornece uma gama
                    de funcionalidades pré-construídas e testadas afim de facilitar o processo
                    de desenvolvimento. <plugin-ref id='amazon-framework'></plugin-ref>
                ">
                *</plugin-footnote>
                e conceitos que deverão trabalhar de forma integrada.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'image',
        data: {
            uuid: 'pilares-da-plataforma',
            description: 'Fonte: Autoria própria.',
            title: 'Pilares da plataforma, (mapa mental)',
            width: 0.9,
            fileType: 'png',
            imageUrl: '',
        }
    } satisfies Partial<ImageBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Estes pilares estão subdivididos em três grandes subcategorias, a saber: Front-End;
                Back-End e Parsing. Cada qual com seus respectivos conceitos e tecnologias.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 2, text: 'Do Front-End' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O Front-End é, basicamente, a "linha de frente". É a parte da aplicação que interagirá
                diretamente com o usuário. Ao profissional que codifica e desenvolve esta parte do
                projeto, damos o nome de Desenvolvedor Front-End. A interface do usuário, que é
                onde o mesmo realiza suas interações com o sistema, normalmente é desenhada por
                um
                <i>designer</i><plugin-footnote data-note="
                    Profissional que atua com design.
                ">
                *</plugin-footnote>
                , ficando a cardo do desenvolvedor o papel de adaptar o
                <i>design</i><plugin-footnote data-note="
                    Do inglês: Desenho.
                ">
                *</plugin-footnote>
                ao código afim de obter os efeitos desejados.
                <plugin-ref id="totvs-front-end"></plugin-ref>
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 3, text: 'Tecnologias Web' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                As tecnologias
                <plugin-gloss id="web" data-type="abreviacao">Web</plugin-gloss>
                desempenham um papel crucial na criação de experiências
                digitais interativas, permitindo que os usuários se envolvam com o conteúdo de maneira mais
                dinâmica e significativa. A incorporação da
                <i>Internet</i><plugin-footnote data-note="
                    Rede mundial de computadores, <plugin-ref id='marco-civil-art-2'></plugin-ref>.
                ">
                *</plugin-footnote>
                na vida diária resultou em mudanças
                significativas, marcada por um ritmo de evolução e aprimoramento sem precedentes, além da
                distribuição de conteúdo em massa. Juntamente com essas mudanças, surgiram novas
                tecnologias, variando de
                <i>softwares</i><plugin-footnote data-note="
                    O software é o conjunto de instruções dadas a um computador, de modo que
                    ele execute determinada tarefa. Podemos dizer que o software é
                    a parte lógica do sistema computacional. <br> <plugin-ref id='hardware-e-software'></plugin-ref>.
                ">
                *</plugin-footnote>
                a
                <i>hardwares</i><plugin-footnote data-note="
                    Com hardware, compreende-se o equipamento físico de um sistema computacional.
                    Suas unidades Lógicas de Processamento, memórias e unidades de armazenamento são
                    hardware. <br> <plugin-ref id='hardware-e-software'></plugin-ref>.
                ">
                *</plugin-footnote>,
                aprimorando a experiência de navegação na
                <plugin-gloss id="web" data-type="abreviacao">Web</plugin-gloss>
                <plugin-ref id="molgado"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A Internet, que teve origem nos Estados Unidos em 1969, foi inicialmente utilizada
                por universidades, governos e instituições financeiras antes de se expandir globalmente. No
                início, a internet era uma via de mão única onde os usuários consumiam informações e se
                comunicavam de maneira privada. A evolução começou com a introdução de sistemas de
                busca avançados, destacando-se o lançamento do Google em 1998, que democratizou o
                acesso à informação.
                <plugin-ref id="vitoriano">(VITORIANO, 2019)</plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A grande reviravolta na internet aconteceu em 1999, com o surgimento do
                <i>Blogger</i>,
                marcando o início da
                Web
                2.0, onde a comunicação tornou-se bidirecional. Os usuários
                passaram a gerar conteúdo e se relacionar publicamente com marcas, empresas e pessoas por
                meio de comentários, além de consumir informação. A evolução da tecnologia móvel, em
                conjunto com o surgimento de redes sociais como
                <i>Fotolog</i>,
                <i>MySpace</i>,
                <i>Orkut</i>,
                <i>Facebook</i>,
                <i>YouTube</i>
                e
                <i>Twitter</i>,
                ampliou o conceito de Web 2.0, permitindo o compartilhamento de fotos,
                vídeos e textos em uma escala maior.
                <plugin-ref id="vitoriano">(VITORIANO, 2019)</plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A forma como se interage com a internet também evoluiu ao longo do tempo.
                Passou-se de sites estáticos para interativos e animados, chegando até aos sites totalmente
                responsivos<plugin-footnote data-note="
                    A responsividade é a capacidade de uma página da
                    <plugin-gloss id='web' data-type='abreviacao'>Web</plugin-gloss>
                    em se adaptar a diferentes dispositivos e tamanhos de tela.
                    <plugin-ref id='responsivo'>(VITORIANO, 2019)</plugin-ref>
                ">
                *</plugin-footnote>
                e adaptáveis de hoje. Isso foi possível devido ao desenvolvimento de novos
                gadgets e ao surgimento de novas linguagens de programação. Atualmente, a Web Moderna é
                composta por várias técnicas, metodologias, linguagens e ferramentas que permitem o
                desenvolvimento de aplicações conectadas e interativas, oferecendo diversas formas de
                interação com interfaces digitais.
                <plugin-ref id="vitoriano">(VITORIANO, 2019)</plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 4, text: 'Linguagem de Marcação de Hipertexto, HTML' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                A Linguagem de Marcação de Hipertexto, do inglês: HyperText Markup Language
                (<plugin-gloss id="html" data-type="abreviacao">HTML</plugin-gloss>)
                foi criada por Tim Berners-Lee enquanto trabalhava na Organização Europeia para a
                Pesquisa Nuclear
                (<plugin-gloss id="cern" data-type="abreviacao">CERN</plugin-gloss>),
                o laboratório de física de partículas na Suíça, no final dos anos
                1980 e início dos anos 1990. O objetivo era criar uma maneira de compartilhar documentos e
                informações em um ambiente de rede. A primeira versão do
                <plugin-gloss id="html" data-type="abreviacao">HTML</plugin-gloss>
                tinha apenas 18 elementos
                de marcação, permitindo a formatação básica de texto e a inclusão de
                <i>links</i><plugin-footnote data-note="
                    Do inglês: Ligação. Também chamado de hiperlink, é uma referência a um
                    documento eletrônico que, quando clicado, leva o usuário para outro recurso
                    ou documento.
                ">
                *</plugin-footnote>,
                imagens e listas.
                <plugin-ref id="w3c">(W3C, 2023)</plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O
                <plugin-gloss id="html"></plugin-gloss>
                rapidamente ganhou popularidade e passou por várias iterações, cada uma
                adicionando novos elementos e funcionalidades. O
                <plugin-gloss id="html"></plugin-gloss>4,
                lançado em 1997, trouxe uma
                série de melhorias, incluindo mais controle sobre a aparência das páginas web, a introdução
                de folhas de estilo em cascata
                (<plugin-gloss id="html"></plugin-gloss>)
                e melhor suporte a
                <i>scripts</i><plugin-footnote data-note="
                    Do inglês: Roteiro. Aqui usado no sentido de código fonte, que nada mais são
                    do que um conjunto de instruções que o computador seguirá de modo interpretativo.
                ">
                *</plugin-footnote>.
                <plugin-ref id="w3c">(W3C, 2023)</plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Finalmente, o
                <plugin-gloss id="html"></plugin-gloss>5,
                lançado oficialmente em 2014 pelo World Wide Web
                Consortium (<plugin-gloss id="w3c"></plugin-gloss>), trouxe uma série de novas funcionalidades, incluindo suporte nativo para
                vídeo e áudio; novos elementos semânticos; gráficos e animações; geolocalização;
                armazenamento local e muito mais.
                <plugin-ref id="w3c">(W3C, 2023)</plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 4, text: 'Funcionamento do HTML' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O
                <plugin-gloss id="html"></plugin-gloss>
                funciona como uma linguagem de marcação, o que significa que ele usa
                <i>"tags"</i><plugin-footnote data-note="
                    Do inglês: Marcação.
                ">
                *</plugin-footnote>
                para definir diferentes partes de um documento. Essas tags informam ao navegador
                como exibir o conteúdo da página. Por exemplo, a tag
                &lt;p&gt;
                é usada para definir um parágrafo,
                enquanto a tag
                &lt;h1&gt;
                é usada para definir um cabeçalho de primeiro nível.
                <plugin-ref id="w3c"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                As páginas
                <plugin-gloss id="html"></plugin-gloss>
                são estruturadas usando uma combinação de elementos de bloco,
                (que formam a estrutura principal da página), e elementos
                <i>inline</i><plugin-footnote data-note="
                    Do inglês: Dentro da Linha. São elementos que podem ser escritos sem quebra de linha.
                ">
                *</plugin-footnote>,
                (que formatam o conteúdo
                dentro desses blocos). Os elementos são aninhados dentro de outros elementos para criar a
                estrutura hierárquica da página.
                <plugin-ref id="w3c"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 4, text: 'HTML versão 5' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Com o
                <plugin-gloss id="html"></plugin-gloss>5,
                os desenvolvedores podem criar jogos online, reproduzir vídeos e
                áudios diretamente no navegador, tudo isso sem a necessidade de instalação de plugins
                externos. Isso resultou em uma melhor experiência geral do usuário, com carregamento mais
                rápido e maior compatibilidade entre os navegadores.
                <plugin-ref id="w3c"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Além disso, o
                <plugin-gloss id="html"></plugin-gloss>5
                também trouxe recursos avançados de armazenamento local,
                como o
                <i><plugin-gloss id="web"></plugin-gloss> Storage</i><plugin-footnote data-note="
                    O termo
                    <plugin-gloss id='web'></plugin-gloss> Storage pode ser entendido, em tradução
                    livre, como: Armazém da <plugin-gloss id='web'></plugin-gloss>
                ">
                *</plugin-footnote>
                e o
                <i>IndexedDB</i><plugin-footnote data-note="
                    Termo abreviado de &quot;Indexed DataBase&quot;, (Base de Dados Indexada).
                ">
                *</plugin-footnote>.
                Esses recursos permitem que os sites armazenem dados
                localmente no navegador do usuário, possibilitando a criação de aplicativos web
                <i>offline</i>
                e
                sincronização de dados em tempo real.
                <plugin-ref id="w3c"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Outra contribuição importante do
                <plugin-gloss id="html"></plugin-gloss>5
                é o suporte a tecnologias de
                geolocalização e acesso aos recursos do dispositivo. Isso permite que os desenvolvedores
                acessem informações de localização do usuário, câmera, microfone e acelerômetro, abrindo
                possibilidades para o desenvolvimento de aplicativos web que utilizam esses recursos de
                forma integrada.
                <plugin-ref id="w3c"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Ao longo de sua história, o
                <plugin-gloss id="html"></plugin-gloss>
                tem evoluído constantemente para acompanhar as
                demandas e os avanços tecnológicos da web. O
                <plugin-gloss id="html"></plugin-gloss>5
                é um marco significativo nessa
                evolução, trazendo recursos semânticos, multimídia e interativos para a criação de páginas da
                web modernas.
                <plugin-ref id="w3c"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 4, text: 'Folhas de Estilo em Cascata, (CSS)' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Folhas de Estilo em Cascata, ou <i>Cascading Style Sheets</i>
                (<plugin-gloss id="css"></plugin-gloss>),
                em tradução livre
                para o português, é uma linguagem de estilo altamente eficaz e amplamente utilizada. Sua
                principal função é definir a apresentação de documentos escritos em
                <plugin-gloss id="html"></plugin-gloss>
                ou
                <plugin-gloss id="xml"></plugin-gloss>.
                Isso
                inclui uma série de linguagens baseadas em
                <plugin-gloss id="xml"></plugin-gloss>,
                como
                <plugin-gloss id="svg"></plugin-gloss>,
                <plugin-gloss id="mathml"></plugin-gloss>
                e
                <plugin-gloss id="xhtml"></plugin-gloss>.
                O
                <plugin-gloss id="css"></plugin-gloss>
                é
                responsável por descrever a forma como os elementos são apresentados em diferentes mídias,
                seja na tela do computador, em papel impresso, por meio de dispositivos de fala ou em outras
                formas de mídia.
                <plugin-ref id="mdn-css"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Considerado uma das principais linguagens da
                Open<plugin-footnote data-note="
                    Do inglês: Aberto. Neste contexto, refere-se ao padrão &quot;Aberto&quot; da
                    <plugin-gloss id='web'></plugin-gloss>
                ">
                *</plugin-footnote>
                <plugin-gloss id="web"></plugin-gloss>,
                o
                <plugin-gloss id="css"></plugin-gloss>
                tem uma grande
                importância na padronização dos navegadores
                <plugin-gloss id="web"></plugin-gloss>.
                Essa padronização é feita de acordo com
                as especificações estabelecidas pela
                <plugin-gloss id="w3c"></plugin-gloss>,
                a organização que lidera a
                <plugin-gloss id="web"></plugin-gloss>
                mundial. O
                desenvolvimento do
                <plugin-gloss id="css"></plugin-gloss>
                é feito em níveis distintos: o
                <plugin-gloss id="css"></plugin-gloss>1,
                que hoje é considerado
                obsoleto; o
                <plugin-gloss id="css"></plugin-gloss>2.1,
                que atualmente é uma recomendação; e o
                <plugin-gloss id="css"></plugin-gloss>3,
                que está sendo dividido
                em pequenos módulos e caminha para a sua padronização.
                <plugin-ref id="mdn-css"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 4, text: 'JavaScript' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                JavaScript é uma linguagem de programação notavelmente versátil que, apesar de ser
                comumente conhecida pela sua utilização em páginas
                <plugin-gloss id="web"></plugin-gloss>, vai muito além disso.
                Frequentemente abreviada para 
                <plugin-gloss id="js"></plugin-gloss>, essa linguagem é leve, interpretada e orientada a objetos
                com funções de primeira classe. Graças à sua flexibilidade, o JavaScript se expandiu para uma
                variedade de ambientes que não são navegadores, incluindo
                Node.Js<plugin-footnote data-note="
                    Ver sessão que trata do Node.Js
                ">
                *</plugin-footnote>,
                Apache CouchDB<plugin-footnote data-note="
                    Base de dados que utiliza o JSON nativamente. Veja mais em: <br>https://couchdb.apache.org/#about
                ">
                *</plugin-footnote>
                e
                Adobe Acrobat<plugin-footnote data-note="
                    Software que lê e converte arquivos em formato
                    <plugin-gloss id='pdf'></plugin-gloss>. Veja mais em: <br>https://www.adobe.com/br/acrobat.html
                ">
                *</plugin-footnote>,
                demonstrando sua adaptabilidade e eficácia em diversos contextos.
                <plugin-ref id="mdn-js"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Com sua estrutura baseada em protótipos, o JavaSript é uma linguagem dinâmica que
                suporta múltiplos paradigmas de programação. Isso significa que, além de ser orientada a
                objetos, ela também suporta estilos de programação imperativos e declarativos, como a
                programação funcional. Essa capacidade de suportar diferentes estilos de programação torna o
                JavaScript uma ferramenta poderosa e flexível para os desenvolvedores.
                <plugin-ref id="mdn-js"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O padrão para JavaScript é o
                <plugin-gloss id="ecma"></plugin-gloss>Script.
                Desde 2012, todos os navegadores
                modernos oferecem suporte completo ao
                <plugin-gloss id="ecma"></plugin-gloss>Script 5.1. Mesmo os navegadores mais
                antigos fornecem suporte, pelo menos, ao
                <plugin-gloss id="ecma"></plugin-gloss>Script 3. A sexta versão do
                <plugin-gloss id="ecma"></plugin-gloss>Script,
                oficialmente chamada de
                <plugin-gloss id="ecma"></plugin-gloss>Script 2015 e inicialmente conhecida como
                <plugin-gloss id="ecma"></plugin-gloss>Script 6
                ou ES6, foi publicada pela <plugin-gloss id="ecma"></plugin-gloss> International
                em 17 de junho de 2015. Desde então, as
                especificações do
                <plugin-gloss id="ecma"></plugin-gloss>Script são lançadas anualmente, demonstrando o desenvolvimento
                contínuo e o avanço dessa linguagem padrão.
                <plugin-ref id="mdn-js"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 4, text: 'TypeScript' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O TypeScript, as vezes abreviado como
                <plugin-gloss id="ts"></plugin-gloss>, é uma linguagem fortemente
                tipada construída em cima do JavaScript,
                <plugin-ref id="ts-page"></plugin-ref>.
                Typescript traz uma sintaxe adicional para o JavaScript de modo
                que o mesmo possa suportar checagem de tipos estática.
                Sem o <plugin-gloss id="ts"></plugin-gloss>,
                fica difícil saber com quais tipos de dados estar-se a trabalhar
                durante o processo de desenvolvimento, pois o JavaScript é uma
                linguagem fracamente tipada. Os parâmetros das funções e variáveis
                não possuem nenhuma informação, forçando os desenvolvedores
                a recorrerem a todo momento à documentação ou intuir sobre
                as tipagens.
                Typescript resolve esse problema, permitindo tipar o código
                de modo que erros possam ser reportados quando a tipagem estiver
                incorreta, por exemplo: ao tentar-se passar uma
                string<plugin-footnote data-note="
                    Do inglês: Corda, barbante ou fio. No contexto de programação,
                    é usado como termo para cadeira de caracteres. O caractere é, na
                    maioria das linguagens de programação, um tipo de dado. E textos
                    são formados por estas cadeias denominadas strings,
                ">
                *</plugin-footnote>
                para uma função que espera um número, TypeScript lançará um erro.
                O JavaScript, por outro lado, permitirá a execução deste código
                podendo gerar erros de tempo de execução.
                <plugin-ref id="ts-w3"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O TypeScript possui um compilador, que nada mais é do que um
                transpilador. Este transpilador é responsável por transformar o
                código
                <plugin-gloss id="ts"></plugin-gloss> em
                <plugin-gloss id="js"></plugin-gloss>.
                Desta forma, o código JavaScript resultante da
                transpilação pode ser rodado em praticamente qualquer
                navegador ou ambiente que suporte o JavaScript.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 4, text: 'JavaScript Object Notation, JSON' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                <i>JavaScript Object Notation</i>, (Notação de Objeto JavaScript),
                popularmente chamado de <plugin-gloss id="json"></plugin-gloss>. É uma sintaxe para a serialização de
                objetos do javascript. Com objetos do javascript, compreende-se seus tipos
                de dados e valores, como: objetos; matrizes; números; strings; booleanos;
                <i>null</i><plugin-footnote data-note="
                    Do inglês: Nulo. Neste contexto é um valor especial do JavaScript para
                    representar a nulidade de um objeto/variável.
                ">
                *</plugin-footnote>
                e
                <i>undefined</i><plugin-footnote data-note="
                    Do inglês: Indefinido. Neste contexto é um tipo de dado do JavaScript
                    para variáveis indefinidas.
                ">
                *</plugin-footnote>.
                Apesar de baseado na sintaxe do JavaScript, distingue-se desta
                no sentido da forma de escrita. A serialização é o processo
                de converter dados estruturados, (ou objetos), em um formato que pode
                facilmente ser armazenado e transmitido pela rede. O <plugin-gloss id="json"></plugin-gloss>
                basicamente converte os objetos JavaScript em strings. Uma caracteristica deste,
                é que <plugin-gloss id="json"></plugin-gloss> é legível tanto por humanos, quanto por máquinas,
                (na maioria dos casos).
                <plugin-ref id="mdn-json"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 3, text: 'Bibliotecas e Frameworks' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'header',
        data: { level: 4, text: 'ReactJs' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'image',
        data: {
            uuid: 'react-logotipo',
            description: 'Fonte: React Dev, disponível em: https://react.dev/',
            title: 'Logotipo do React',
            width: 0.8,
            fileType: 'png',
            imageUrl: '',
        }
    } satisfies Partial<ImageBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                "Biblioteca para interfaces de usuário <plugin-gloss id="web"></plugin-gloss> e nativas".
                O React é uma biblioteca de JavaScript criada pelo Facebook para solucionar
                desafios de manutenção e escalabilidade em suas aplicações. No início de 2011, a equipe de
                desenvolvedores do Facebook enfrentava dificuldades em lidar com o crescimento da
                aplicação de anúncios, que estava se tornando cada vez mais complexa e difícil de ser
                mantida. O aumento no número de membros da equipe e de funcionalidades estava afetando
                negativamente os processos da empresa. Com tantas atualizações em cascata, a aplicação
                estava se tornando lenta e difícil de ser atualizada sem falhas.
                <plugin-ref id="morais-react"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Para resolver esses problemas, Jordan Walke, engenheiro do Facebook, propôs uma
                solução inovadora. Ele sugeriu levar o 
                XHP,
                uma versão do
                <plugin-gloss id="php"></plugin-gloss>,
                para o navegador usando
                JavaScript. O 
                XHP
                era uma tecnologia desenvolvida para minimizar ataques de Cross-Site
                Scripting
                (<plugin-gloss id="xss"></plugin-gloss>)
                em aplicações
                <plugin-gloss id="web"></plugin-gloss>
                dinâmicas. No entanto, ele não era capaz de lidar com o
                grande número de requisições necessárias para esse tipo de aplicação. Com o apoio de sua
                equipe de gerenciamento, Jordan Walke conduziu um experimento de seis meses para
                explorar essa ideia. O resultado desse experimento foi o surgimento do ReactJS.
                <plugin-ref id="morais-react"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O ReactJS revolucionou o desenvolvimento de interfaces de usuário ao introduzir o
                conceito de componentes reutilizáveis e a abordagem de renderização virtual. Com a
                utilização de componentes, os desenvolvedores podiam criar e reutilizar peças de interface
                independentes e isoladas, o que simplificava o desenvolvimento e manutenção do código.
                Além disso, a renderização virtual permitia atualizações de interface eficientes, otimizando o
                desempenho da aplicação. O ReactJS foi lançado como um software de código aberto em
                2013, permitindo que desenvolvedores de todo o mundo o utilizassem em seus projetos.
                <plugin-ref id="morais-react"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Desde então, o React ganhou uma imensa popularidade e se tornou uma das
                principais ferramentas para o desenvolvimento de interfaces de usuário em aplicações web.
                Sua abordagem declarativa, que permite descrever como a interface deve ser exibida com
                base no estado da aplicação, simplifica a construção de interfaces complexas. Além disso, a
                capacidade de reutilização de componentes economiza tempo e esforço durante o
                desenvolvimento. O React também influenciou o desenvolvimento do React Native, uma
                versão da biblioteca voltada para a criação de aplicativos móveis multiplataforma. Com a
                ajuda de uma grande comunidade de desenvolvedores e empresas, o ecossistema do React
                continua a evoluir e fornecer soluções inovadoras para o desenvolvimento de interfaces de
                usuário modernas e eficientes.
                <plugin-ref id="morais-react"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O React teve seus primeiros sinais em 2010, quando o Facebook introduziu o XHP
                na sua stack de
                <plugin-gloss id="php"></plugin-gloss>,
                permitindo a criação de componentes compostos. Em 2011, Jordan
                Walke criou o FaxJS, protótipo inicial do React, que foi desenvolvido para resolver os
                desafios de suporte aos anúncios do Facebook. Em 2012, o Instagram foi adquirido pelo
                Facebook e expressou interesse em adotar o React. Isso levou o Facebook a dissociar o React
                da empresa e torná-lo open source. Em 2013, ocorreu o lançamento oficial do React, mas
                inicialmente enfrentou resistência da comunidade de desenvolvedores. No entanto, uma "turnê
                do React" foi realizada para conquistar os não adeptos.
                <plugin-ref id="morais-react"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                No ano seguinte, o React começou a ganhar reputação e confiança. O
                <i>React Developer Tools</i><plugin-footnote data-note="
                    Ferramentas de Desenvolvimento React
                ">
                *</plugin-footnote>
                e o
                <i>React Hot Reloader</i><plugin-footnote data-note="
                    Carregamento e recarregamento ultra rápido React
                ">
                *</plugin-footnote>
                foram lançados, trazendo melhorias no
                desenvolvimento e na experiência do usuário. Em 2015, o React se estabeleceu como uma
                tecnologia estável, com empresas como Netflix e Airbnb adotando-o. O Redux, responsável
                pelo gerenciamento de estado, foi lançado, e o React Native expandiu-se para o
                desenvolvimento de aplicativos móveis para Android.
                <plugin-ref id="morais-react"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Atualmente, o React continua evoluindo, com o lançamento de novas
                funcionalidades e recursos para melhorar o desenvolvimento de aplicações. Iniciativas de
                <plugin-gloss id="ssr"></plugin-gloss>
                <i>(Server Side Rendering)</i><plugin-footnote data-note="
                    Do inglês: Rederização do Lado do Servidor
                ">
                *</plugin-footnote>, e o foco em componentes funcionais são algumas das áreas de
                desenvolvimento. O React permanece como uma biblioteca consolidada no mercado de Front-
                End, sendo amplamente adotado por grandes empresas em todo o mundo.
                <plugin-ref id="morais-react"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 4, text: 'NextJs' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'image',
        data: {
            uuid: 'nextjs-logotipo',
            description: 'Fonte: Next.Js, disponível em: https://nextjs-template.vercel.app/',
            title: 'Logotipo do NextJs',
            width: 1,
            fileType: 'png',
            imageUrl: '',
        }
    } satisfies Partial<ImageBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O NextJs é uma framework em ReactJs voltada à construção de aplicações
                <plugin-gloss id="web"></plugin-gloss>
                tando na parte do Front-End quanto no Back-End.
                Com NextJs, utiliza-se os componentes em React para construir as interfaces
                de usuário, com o NextJs provendo recursos adicionais e otimizações.
                <plugin-ref id="nexjs-docs"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                NextJs também se encarrega de todas as configurações necessárias do React, como o processo
                de
                enpacotamento<plugin-footnote data-note="
                    Em inglês: Bundling. Um Bundle para a <plugin-gloss id='web'></plugin-gloss>,
                    por exemplo, junta todos os códigos e recursos em um pacote otimizado
                    para ser distribuído.
                ">
                *</plugin-footnote>,
                compilação e etc...
                Permitindo ao desenvolvedor apenas focar no desenvolvimento da aplicação em si.
                <plugin-ref id="nexjs-docs"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                Devido à natureza desta framework, O NextJs é um pilar que aparece
                tanto no Back-End quanto no Front-End. Estas duas frentes serão abordadas
                com a utilização desta ferramenta, aproveitando ao máximo os recursos fornecidos
                pela mesma. Os principais recursos oferecidos pelo NextJs são:
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'list',
        data: {
            type: 'bullet',
            list: [
                `
                    Roteamento: O NextJs provê um roteamento, (que é basicamente a navegação por páginas
                    dentro do app), baseado no sistema de arquivos do Sistema Operacional. Os arquivos
                    em pastas do projeto são mapeados para links, que fornecem os componentes de servidor
                    com suporte a
                    layouts<plugin-footnote data-note="
                        Layouts são como templates que são comuns às páginas roteadas. Ajudam no processo
                        de reaproveitamento de componentes pois eles podem ser extendidos às páginas,
                        que herdam características destes layouts.
                    ">
                    *</plugin-footnote>,
                    rotas aninhadas, estados de carregamento, manipulação de erros,
                    entre outros...
                `,
                `
                    Renderização: NextJs fornece renderização do lado do cliente e do lado do servidor com
                    componentes de cliente, e componentes de servidor.
                `,
                `
                    Busca de dados: Há um processo de busca de dados simplificado com o uso de
                    <i>async/await</i><plugin-footnote data-note="
                        Recurso do JavaScript para lidar com a execuçao de código assíncrono.
                    ">
                    *</plugin-footnote>
                    nos componentes de servidor, além de uma
                    <plugin-gloss id="api"></plugin-gloss><plugin-footnote data-note="
                        Do inglês: Interface de Programação de Aplicações. É uma forma na qual
                        dois ou mais aplicativos ou componentes de de computador se comunicam
                        entre si. É uma interface de software que oferece um serviço para outras
                        partes do mesmo ou de outros softwares.
                        <plugin-ref id='api-reddy'></plugin-ref>.
                    ">
                    *</plugin-footnote>
                    expandida para a memorização das
                    requisições,
                    <i>caching</i><plugin-footnote data-note="
                        O processo de caching é o ato de armazenar informações que são acessadas
                        frequentemente de maneira que seu acesso se torne mais rápido. Neste contexto,
                        o resultado de uma requisição pode ser armazenado em cache para que não
                        seja necessário consultar o servidor novamente quando a mesma informação
                        for requisitada.
                    ">
                    *</plugin-footnote>
                    de dados e revalidação.
                `,
                `
                    Estilização: Suporte para os métodos preferidos de estilização. Com inclusão
                    de: Módulos <plugin-gloss id="css"></plugin-gloss>, <i>Tailwind</i> <plugin-gloss id="css">
                    </plugin-gloss>,
                    e <plugin-gloss id="css">
                    </plugin-gloss>-in-<plugin-gloss id="js"></plugin-gloss>.
                `,
                `
                    Otimizações: Otimizações de scripts, imagens e fontes são também fornecidos para aprimorar
                    o núcleo do aplicativo e a experiência de usuário.
                `,
                `
                    TypeScript: Suporte total ao TypeScript, com uma melhor checagem de tipos e compilação eficiente.
                `
            ]
        }
    } satisfies Partial<ListBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
            <plugin-ref id="nexjs-docs"></plugin-ref>.
            `
        }
    } satisfies Partial<ParagraphBlock>,
    { type: 'page-break' } satisfies Partial<PageBreakBlock>,
    {
        type: 'header',
        data: { level: 4, text: 'EditorJs' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'image',
        data: {
            uuid: 'editorjs-logotipo',
            description: 'Fonte: Editor.Js, disponível em: https://editorjs.io/',
            title: 'Logotipo do EditorJs',
            width: 0.8,
            fileType: 'png',
            imageUrl: '',
        }
    } satisfies Partial<ImageBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                "Editor livre em blocos com saída universal em JSON".
                O EditorJs é um rico editor de texto em blocos que oferece uma experiência de
                edição intuitiva e versátil. Tudo o que é feito no EditorJs no fim é transformado
                em um arquivo <plugin-gloss id="json"></plugin-gloss> ao invés de um documento de marcação
                em <plugin-gloss id="html"></plugin-gloss>.
                Essa abordagem deixa o processo mais simples para os desenvolvedores no
                sentido de projetarem suas próprias integrações. Assim, o EditorJs pode ser
                aplicado a diversas plataformas.
                <plugin-ref id="editorjs"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                São recursos do EditorJs:
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'list',
        data: {
            type: 'bullet',
            list: [
                'Dados de saída limpos',
                '<plugin-gloss id="api"></plugin-gloss> baseada em plugins',
                'Código aberto'
            ]
        }
    } satisfies Partial<ListBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O espaço de trabalho do EditorJs consiste em blocos separados, como:
                Parágrafos; títulos; listas; etc... Cada um deles independentes entre si,
                com muitos outros recursos como: Copiar e colar; seleção de vários blocos;
                e entre outros que funcionam de forma familiar a outras ferramentas.
                <plugin-ref id="editorjs"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'paragraph',
        data: {
            text: `
                O conceito chave do EditorJS é sua <plugin-gloss id="api"></plugin-gloss>, na qual
                todas as unides funcionais do editor são providas através de plugins externos que fazem
                uso da mesma. Assim, o núcleo do EditorJs fica sendo mais abstrato e poderoso, de
                modo que o desenvolvedor possa implementar diversos desafios com a criação
                de seus próprios plugins.
                <plugin-ref id="editorjs"></plugin-ref>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 2, text: 'Do Back-End' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'header',
        data: { level: 2, text: 'O processo de Parsing' }
    } satisfies Partial<HeaderBlock>,
]