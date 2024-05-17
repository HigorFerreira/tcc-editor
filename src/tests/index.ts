import {
    HeaderBlock,
    ImageBlock,
    ParagraphBlock,
    RefsObjectType,
    GlossaryObjectType,
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
    'ufp': {
        short: 'UFP',
        label: 'BUniversidade Federal da Paraíba',
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
        data: { level: 1, text: 'Intrudução' },
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
                outros) (ABNT, 2011).
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
]