import {
    HeaderBlock,
    ImageBlock,
    ParagraphBlock,
    RefsObjectType,
    GlossaryObjectType,
    PageBreakBlock,
} from '@/parser/types'

export const refs = {
    'severino': {
        type: 'book',
        title: 'Metodologia do trabalho científico',
        author: [ 'Antônio Joaquim Severino' ],
        publisher: 'Cortez',
        edition: 24,
        year: 2017
    },
    'castro': {
        type: 'book',
        author: [ 'Claudio Moura Castro' ],
        title: 'Como redigir e apresentar um trabalho científico',
        publisher: 'São Paulo: Pearson Prentice Hall',
        year: 2011
    },
    'abnt': {
        type: 'misc',
        author: [ 'ABNT' ],
        title: 'Quem somos? ABNT - Associação Brasileira de Normas Técnicas',
        url: 'http://www.abnt.org.br/institucional/sobre',
        year: 2021,
        note: '[Online; acessado em 15-Maio-2023]'
    },
    'medeiros': {
        type: 'book',
        author: [ 'João Bosco Medeiros',  ],
        title: 'Redação científica: a prática de fichamentos, resumos, resenhas',
        edition: 11,
        publisher: 'São Paulo: Atlas',
        year: 2012
    },
    'SilvaVitoria': {
        type: 'article',
        author: [ 'Marcelo Oliveira da Silva', 'Maria Inês Corte Vitoria' ],
        title: 'A experiência de escrita no \
        \rtrabalho de conclusão de curso: Percepções de alunos de um curso superior de \
        \rtecnologia em gestão em recursos humanos',
        publisher: 'CAMINE: Caminhos da Educação, Franca',
        edition: 6,
        year: 2014,
        issn: '2175-4217'
    },
    'santos': {
        type: 'article',
        author: [ 'Ivna Regina Santos' ],
        title: 'As dificuldades na construção do trabalho de conclusão de curso: Percepção de estudantes egressos do curso de ciências contábeis. 2020. 69. Trabalho de Conclusão de Curso (Graduação) - Ciências Contábeis',
        publisher: 'Universidade Federal da Paraíba, João Pessoa',
        year: 2020
    }
} satisfies RefsObjectType

export const gloss = {
    'abnt': {
        short: 'ABNT',
        label: 'Associação Brasileira de Normas Técnicas',
        type: 'sigla'
    },
    'mee': {
        short: 'M.E.E',
        label: 'Mestre em Engenharia Elétrica',
        type: 'sigla',
    },
    'nbr': {
        short: 'NBR',
        label: 'Norma Brasileira Regulamentadora',
        type: 'sigla'
    },
    'ies': {
        label: 'Instituição de Ensino Superior',
        short: 'IES',
        type: 'sigla',
    },
    'pucgo': {
        short: 'PUC-GO',
        label: 'Pontifícia Universidade Católica de Goiás',
        type: 'sigla',
    },
    'tcc': {
        short: 'TCC',
        label: 'Trabalho de Conclusão de Curso',
        type: 'sigla',
    },
    'ufpb': {
        short: 'UFPB',
        label: 'Universidade Federal da Paraíba',
        type: 'sigla',
    },
    'html': {
        short: 'HTML',
        label: 'HyperText Markup Language',
        type: 'sigla',
    },
    'css': {
        short: 'CSS',
        label: 'Cascading Style Sheet',
        type: 'sigla',
    },
    'http': {
        short: 'HTTP',
        label: 'Hypertext Transfer Protocol',
        type: 'sigla',
    },
    'cern': {
        short: 'CERN',
        label: 'Conseil Européen pour la Recherche Nucléaire',
        type: 'sigla',
    },
    'cms': {
        short: 'CMS',
        label: 'Content Management System',
        type: 'sigla',
    },
    'xml': {
        short: 'XML',
        label: 'eXtensible Markup Language',
        type: 'sigla',
    },
    'xhtml': {
        short: 'XHTML',
        label: 'eXtensible HyperText Markup Language',
        type: 'sigla',
    },
    'svg': {
        short: 'SVG',
        label: 'Scalable Vector Graphics',
        type: 'sigla',
    },
    'ecma': {
        short: 'ECMA',
        label: 'European Computer Manufacturers Association',
        type: 'sigla',
    },
    'Prof': {
        short: 'Prof',
        label: 'Professor',
        type: 'abreviacao',
    },
    'W3C': {
        short: 'W3C',
        label: 'World Wide Web Consortium',
        type: 'abreviacao',
    },
    'MathML': {
        short: 'MathML',
        label: 'Mathematical Markup Language',
        type: 'abreviacao',
    },
    'JS': {
        short: 'JS',
        label: 'JavaScript',
        type: 'abreviacao',
    },
    'PHP': {
        short: 'PHP',
        label: 'Hypertext Preprocessor',
        type: 'abreviacao',
    },
    'XSS': {
        short: 'XSS',
        label: 'Cross-Site Scripting',
        type: 'abreviacao',
    },
} satisfies GlossaryObjectType


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
                complementar essa visão, afirmando que a presentação gráfica "[...] contribui para a
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
                32% teve muita dificuldade." Ou seja, a formatação do trabalho é um grande desafio presente
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
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
    {
        type: 'header',
        data: { level: 2, text: 'Pilares da aplicação' }
    } satisfies Partial<HeaderBlock>,
    {
        type: 'header',
        data: { level: 2, text: 'Resultados' }
    } satisfies Partial<HeaderBlock>,
]