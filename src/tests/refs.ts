import {
    RefsObjectType,
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
    },
    'pucgo': {
        type: 'article',
        author: [ 'PUC-GO' ],
        title: 'Coordenação de TCC. Manual para elaboração de Trabalho de Conclusão de Curso',
        publisher: 'Pontifícia Universidade Católica de Goiás',
        year: 2022
    }
} satisfies RefsObjectType