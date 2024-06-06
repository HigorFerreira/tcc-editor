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
        label: 'JavaScript Object Notation',
        short: 'JSON',
        type: 'abreviacao'
    },
    'pdf': {
        label: 'Portable Document Format',
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
        type: 'abreviacao',
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
        type: 'abreviacao',
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
    'ts': {
        short: 'TS',
        label: 'TypeScript',
        type: 'abreviacao',
    },
    'php': {
        short: 'PHP',
        label: 'Hypertext Preprocessor',
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
        label: 'World Wide Web'
    },
    'ssr': {
        type: 'sigla',
        label: 'Server Side Rendering',
        short: 'SSR',
    },
    'api': {
        type: 'sigla',
        label: 'Application Programming Interface',
        short: 'API'
    },
    'ui': {
        type: 'sigla',
        label: 'User Interface',
        short: 'UI'
    },
    'ux': {
        type: 'sigla',
        label: 'User eXperience',
        short: 'UX'
    },
    'jsx': {
        type: 'abreviacao',
        label: 'JavaScript XML',
        short: 'JSX'
    },
    'tsx': {
        type: 'abreviacao',
        label: 'TypeScript XML',
        short: 'TSX'
    },
    'dom': {
        type: 'sigla',
        label: 'Document Object Model',
        short: 'DOM'
    },
    'regex': {
        type: 'abreviacao',
        label: 'Regular Expression',
        short: 'RegEx'
    },
    'regexp': {
        type: 'abreviacao',
        label: 'Regular Expression',
        short: 'RegExp'
    },
    'latex': {
        type: 'abreviacao',
        label: 'Lamport TeX',
        short: 'LaTex'
    },
    'uuid': {
        type: 'abreviacao',
        label: 'Universally Unique Identifier',
        short: 'uuid',
    },
    'UUID': {
        type: 'abreviacao',
        label: 'Universally Unique Identifier',
        short: 'UUID',
    },
    'bash': {
        type: 'abreviacao',
        label: 'Bourne Again Shell',
        short: 'bash',
    },
    'app': {
        type: 'abreviacao',
        label: 'Application',
        short: 'App',
    },
    'spa': {
        type: 'sigla',
        label: 'Single Page Application',
        short: 'SPA',
    },
} satisfies GlossaryObjectType