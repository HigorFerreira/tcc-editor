import {
    HeaderBlock,
    ParagraphBlock,
    PageBreakBlock,
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