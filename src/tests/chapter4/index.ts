import {
    Block,
} from '@/parser/types';

import { v4 as uuidv4 } from 'uuid';

/*
<plugin-gloss id=""></plugin-gloss>
<plugin-ref id="mdn-regex"></plugin-ref>
<plugin-ref-fig data-fig="">Figura 1</plugin-ref-fig>
<plugin-ref-table data-table="">Tabela</plugin-ref-table>
<plugin-footnote data-note="

">
*</plugin-footnote>
*/

/*
{
    type: 'image',
    data: {
        uuid: '',
        fileType: 'png',
        imageUrl: '',
        width: 0.4,
        title: '',
        description: 'Fonte: Autoria própria'
    }
},
*/

/*
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 1,
            text: `
`.trim()
        }
    },
*/

export const chapter4: Block[] = [
    {
        type: 'header',
        data: {
            level: 1,
            text: 'Considerações finais'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Este instrumento visou durante seu processo de
                elaboração o desenvolvimento da plataforma de modo
                que a mesma seja uma ferramenta útil e de
                facil compreensão para o mais diverso público.
                Desta forma, o usuário da ferramenta precisa se preocupar
                apenas com seu conteúdo defendido, de modo que a forma de
                sua apresentação é um encargo da ferramenta.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Esta concepção inicial constitui-se numa proposta de mudança 
                de paradigma na forma e no fluxo com que se escreve um trabalho
                acadêmico, fornecendo uma alternativa mais amigável às formas
                tradicionais de escrita utilizando-se o <i>Microsoft Word</i>,
                <i>Libre Office</i> ou o próprio
                <plugin-gloss id="latex"></plugin-gloss>
                em sua forma pura.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: {
            level: 2,
            text: 'O que foi desenvolvido'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Foi desenvolvido um programa aplicativo, no modelo cliente-servidor,
                que serve um sistema
                <plugin-gloss id="web"></plugin-gloss>
                para o usuário final. O sistema consiste em um rico editor de texto
                baseado em blocos em que, através de plugins, monta-se todo um complexo
                trabalho de monografia constituído de pequenos blocos simples.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O processo de <i>parsing</i> se encontra totalmente funcional para todos os seguintes blocos:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'list',
        data: {
            type: 'bullet',
            list: [
                'Code, (código)',
                'DirectCite, (citação direta)',
                'Header, (cabeçalhos, títulos)',
                'Image, (imagens)',
                'List, (listas)',
                'PageBreak, (quebra de página)',
                'Paragraph, (parágrafo)',
                'Table, (tabelas)'
            ]
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Deste modo, qualquer bloco saída do editor já é devidamente transpilado para seu equivalente
                código
                <plugin-gloss id="latex"></plugin-gloss>
                e consequentemente compilado no
                <plugin-gloss id="pdf"></plugin-gloss> final.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Em se tratando da interface do editor com o usuário, nem todos os blocos plugins foram desenvolvidos
                conforme a proposta inicial deste instrumento, (vide "O que deu errado" e "Trabalhos futuros").
                Os seguintes plugins encontram funcionais no editor:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'list',
        data: {
            type: 'bullet',
            list: [
                'Paragraph, (parágrafo)',
                'Header, (cabeçalho)',
                'Image, (Imagem)',
            ]
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Este trabalho não foi desenvolvido utilizando-se o aplicativo em sua interface gráfica, mas utilizou todos os recursos providos pelo processo de <i>parsing</i>. O código de saída do editor foi escrito manualmente e em seguida compilado. O processo de compilação pode ser repetido rodando o comando abaixo a partir da pasta raiz do projeto no GitHub:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 1,
            text: `
yarn tex-make
`.trim()
        }
    },
    {
        type: 'header',
        data: {
            level: 2,
            text: 'O que deu errado'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Devido a duração do processo de pesquisa e do prazo determinado para a finalização deste instrumento,
                alguns plugins não foram desenvolvidos ou foram desenvolvidos parcialmente. Os plugins in-line, que consistem
                na atribuição de glossários e referências bibliográficas, não foram desenvolvidos para a interface gráfica,
                porém possuem seus equivalentes em termos de <i>parsing</i>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: {
            level: 2,
            text: 'Performance'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Todo este trabalho foi desenvolvido utilizando-se do processo de <i>parsing</i> desenvolvido pelo mesmo, ao passo que
                paralelamente foi desenvolvida a interface.
                O código
                <plugin-gloss id="latex"></plugin-gloss>
                resultante gerou um arquivo texto de aproximadamente 176kb, que foi compilado sem demais problemas
                e com um tempo de menos de 60 segundos. Além também de mais de 2000kb em imagens.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: {
            level: 2,
            text: 'Trabalhos futuros'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Há muitas coisas novas que podem ser implementadas e desenvolvidas a partir da concepção inicial deste trabalho.
                Plugins novos podem ser desenvolvidos e ajustes de interface e melhorias de experiência de usuário podem
                ser implementados.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: {
            level: 3,
            text: 'Plugins inline'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Os plugin inline são de grande importância para uma boa experiência de usuário
                e escrita prazerosa. Através deles podem-se atribuir glossários, referências cruzadas
                a tabelas e figuras, e referências bibliográficas. Seus respectivos códigos de <i>parsing</i>
                encontram-se integrados ao projeto, porém seus equivalentes em termos de interface
                e experiência de usuário ainda não foram desenvolvidos.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: {
            level: 3,
            text: 'Tabelas'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                As tabelas são plugins úteis na exbição e organização de determinados tipos de informação.
                Seu <i>parsing</i> encontra-se no projeto poŕém ainda não há o equivalente plugin integrado ao editor.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: {
            level: 3,
            text: 'Matemática'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O
                <plugin-gloss id="latex"></plugin-gloss>
                é bastante versátil em termos de equações matemáticas. Neste sentido, pode-se
                desenvolver um plugin em que o usuário possa digitar as equações na sintaxe
                matemática do
                <plugin-gloss id="latex"></plugin-gloss>
                ou ainda uma interface low code em que o mesmo possa
                escrevê-las clicando em ícones na tela.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: {
            level: 3,
            text: 'Gráficos e diagramas'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Uma grande utilidade poderia ser a integração com bibliotecas e <i>frameworks</i>
                como Mermaid e Graphviz. Estas bibliotecas são de facil compreensão e muito
                úteis na hora de criar qualquer tipo de gráfico ou diagrama.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: {
            level: 2,
            text: 'Finalização'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Levando-se em consideração todas as funcionalidades desenvolvidas, (principalmente no que diz
                respeito à questão de <i>parsing</i>), o sistema funcionou de forma coerente trazendo bons resultados,
                se apresentando como uma solução sub-ótima, levando-se em consideração a concepção inicial.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
]