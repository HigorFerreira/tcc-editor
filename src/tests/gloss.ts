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
        label: 'HyperText Markup Language, (Linguagem de Marcação de Hipertexto)',
        type: 'abreviacao',
    },
    'css': {
        short: 'CSS',
        label: 'Cascading Style Sheet, (Folhas de Estilo em Cascata)',
        type: 'sigla',
    },
    'http': {
        short: 'HTTP',
        label: 'Hypertext Transfer Protocol, (Protocolo de Transferência de Hipertexto)',
        type: 'abreviacao',
    },
    'cern': {
        short: 'CERN',
        label: 'Conseil Européen pour la Recherche Nucléaire',
        type: 'abreviacao',
    },
    'cms': {
        short: 'CMS',
        label: 'Content Management System, (Sistema de Gerenciamento de Conteúdo)',
        type: 'sigla',
    },
    'xml': {
        short: 'XML',
        label: 'eXtensible Markup Language, (Linguagem de Marcação Extensível)',
        type: 'sigla',
    },
    'xhtml': {
        short: 'XHTML',
        label: 'eXtensible HyperText Markup Language, (Linguagem de Marcação de Hipertexto Extensível)',
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
    'prof': {
        short: 'Prof',
        label: 'Professor',
        type: 'abreviacao',
    },
    'w3c': {
        short: 'W3C',
        label: 'World Wide Web Consortium',
        type: 'abreviacao',
    },
    'mathml': {
        short: 'MathML',
        label: 'Mathematical Markup Language',
        type: 'abreviacao',
    },
    'js': {
        short: 'JS',
        label: 'JavaScript',
        type: 'abreviacao',
    },
    'php': {
        short: 'PHP',
        label: 'Hypertext Preprocessor, (Processador de Hipertexto)',
        type: 'abreviacao',
    },
    'xss': {
        short: 'XSS',
        label: 'Cross-Site Scripting',
        type: 'abreviacao',
    },
    'web': {
        type: 'abreviacao',
        short: 'Web',
        label: 'World Wide Web, (Rede Mundial)'
    }
} satisfies GlossaryObjectType