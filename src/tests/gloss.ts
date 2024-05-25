import {
    HeaderBlock,
    ImageBlock,
    ParagraphBlock,
    RefsObjectType,
    GlossaryObjectType,
    PageBreakBlock,
} from '@/parser/types'

export const gloss = {
    'json': {
        label: 'JavaScript Object Notation, (Notação de Objeto JavaScript)',
        short: 'JSON',
        type: 'abreviacao'
    },
    'pdf': {
        label: 'Portable Document Format, (Formato  de Documento Portável)',
        short: 'PDF',
        type: 'sigla'
    },
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
        type: 'abreviacao',
    },
    'css': {
        short: 'CSS',
        label: 'Cascading Style Sheet',
        type: 'sigla',
    },
    'http': {
        short: 'HTTP',
        label: 'Hypertext Transfer Protocol',
        type: 'abreviacao',
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
    'web': {
        type: 'abreviacao',
        short: 'Web',
        label: 'World Wide Web'
    }
} satisfies GlossaryObjectType