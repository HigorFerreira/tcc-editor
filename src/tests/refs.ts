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
    },
    'amazon-framework': {
        type: 'misc',
        author: [ 'Amazon', 'AWS' ],
        title: 'O que é uma framework em programação e engenharia?',
        note: '[Online: acessado em 25-Maio-2024]',
        url: 'https://aws.amazon.com/pt/what-is/framework/'
    },
    'totvs-front-end': {
        type: 'misc',
        title: 'Front end: O que é, como funciona e qual a importância',
        author: [ 'TOTVS' ],
        note: '[Online: acessado em 25-Maio-2024]',
        year: 2021,
        url: 'https://www.totvs.com/blog/developers/front-end/'
    },
    'molgado': {
        type: 'misc',
        author: [ 'Victória Molgado' ],
        title: 'A Evolução da Web: linha do tempo interativa da História da internet.',
        year: 2016,
        url: 'https://labvis.eba.ufrj.br/a-evolucao-da-web-linha-do-tempo-interativa-da-historia-da-internet/',
        note: '[Online: acessado em 15-Maio-2023]',
    },
    'vitoriano': {
        type: 'misc',
        author: [ 'Dan Vitoriano' ],
        title: 'O que é a Web Moderna',
        note: 'Medium. [Online: acessado em 15-Maio-2023]',
        url: 'https://blog.danvitoriano.com.br/o-que-%C3%A9-a-web-moderna-b01e4df9a565',
        year: 2019,
    },
    'w3c': {
        type: 'misc',
        author: [ 'World Wide Web Consortium - W3C' ],
        note: '[Online: acessado em 16-Maio-2023]',
        year: 2023,
        title: 'HTML',
        url: 'https://html.spec.whatwg.org/multipage',
    },
    'marco-civil-art-2': {
        type: 'article',
        title: 'Lei nº 12.965, de 23 de abril de 2014. Dispõe sobre os direitos civis na internet.',
        author: [ 'Brasil' ],
        journal: 'Diário Oficial da União',
        // volume: undefined,
        // number: undefined,
        year: 2014,
        date: '24 abr. 2014',
        accessdate: '28 mai. 2024',
    },
    'hardware-e-software': {
        type: 'article',
        author: [ 'Emerson Machado' ],
        title: 'Hardware e software',
        publisher: 'Enciclopédia Significados',
        url: 'https://www.significados.com.br/hardware-e-software/s',
        accessdate: '28 mai. 2024',
    },
    'responsivo': {
        type: 'article',
        url: 'https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design',
        author: [ 'MDN' ],
        title: 'Design Responsivo',
        year: 2023,
        note: '[Online: acessado em 28-Maio-2024]',
    },
    'mdn-css': {
        type: 'article',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
        author: [ 'Mozilla Developer Network - MDN' ],
        title: 'CSS',
        year: 2023,
        note: '[Online: acessado em 16-Maio-2023]',
    },
    'mdn-js': {
        type: 'article',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
        author: [ 'Mozilla Developer Network - MDN' ],
        title: 'JavaScript',
        year: 2023,
        note: '[Online: acessado em 16-Maio-2023]',
    },
    'ts-page': {
        type: 'misc',
        author: [ 'TypeScript' ],
        title: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        note: '[Online: acessado em 29-Maio-2024]',
    },
    'ts-w3': {
        type: 'misc',
        author: [ 'W3Schools' ],
        title: 'TypeScript Introduction',
        url: 'https://www.w3schools.com/typescript/typescript_intro.php',
        note: '[Online: acessado em 29-Maio-2024]',
        year: 2024
    },
    'morais-react': {
        type: 'article',
        author: [ 'Patrick Morais' ],
        title: 'A História do React!',
        publisher: 'Medium',
        year: 2021,
        note: '[Online: acessado em 29-Maio-2024]',
        url: 'https://medium.com/@ppternunes/a-hist%C3%B3ria-do-react-ba346c416fe1',
    },
    'nexjs-docs': {
        type: 'article',
        author: [ 'NEXTJS' ],
        title: 'Introduction',
        year: 2024,
        note: '[Online: acessado em 29-Maio-2024]',
        url: 'https://nextjs.org/docs'
    },
    'api-reddy': {
        type: 'book',
        author: [ 'Martin Reddy' ],
        title: 'API Design for C++',
        publisher: 'Elsevier Science',
        issn: '9780123850041',
        year: 2011,
    },
    'editorjs': {
        type: 'article',
        author: [ 'EDITORJS' ],
        title: 'Base Concepts',
        url: 'https://editorjs.io/base-concepts/',
        note: '[Online: acessado em 30-Maio-2024]',
    },
    'mdn-json': {
        type: 'article',
        author: ['MDN'],
        title: 'JSON',
        note: '[Online: acessado em 30-Maio-2024]',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON',
        year: 2024,
    }
} satisfies RefsObjectType