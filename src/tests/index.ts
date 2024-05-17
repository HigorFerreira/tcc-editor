import {
    HeaderBlock,
    ImageBlock,
    ParagraphBlock,
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
    }
} satisfies RefsObjectType


export const data = [
    {
        data: { level: 1, text: 'Intrudução' },
    } satisfies Partial<HeaderBlock>,
    {
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
        data: {
            text: `
                A Associação Brasileira de Normas Técnicas (ABNT), é a entidade responsável por,
                dentre outras, fornecer as normas que regulam o processo de criação de trabalhos acadêmicos.
                A Norma Brasileira Regulamentadora (NBR) Nº 14724, por exemplo: Especifica os princípios
                gerais para a elaboração de (teses, dissertações e outros), visando sua apresentação à
                instituição (banca, comissão examinadora de professores, especialistas designados e/ou
                outros) (ABNT, 2011).
            `.trim().replace(/^\s{16}/gm, '')
        }
    } satisfies Partial<ParagraphBlock>,
]