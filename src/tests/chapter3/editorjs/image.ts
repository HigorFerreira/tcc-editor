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

// @ts-ignore
export const image: Block[] = [
    {
        type: 'header',
        data: { level: 4, text: 'Image' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O plugin de imagem é um dos mais importantes e complexos do projeto.
                É com ele que pode-se trazer ilustrações de imagens para o trabalho escrito,
                de forma a enriquecer a monografia, seja ela qual for.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O plugin de imagem possui casos de uso interessantes, como: Trazer imagens
                a partir de links ou de arquivos do sistema; Atribuir um título à imagem;
                Atribuir uma descrição; Definir a porcentagem de ocupação na folha do documento;
                e etc...
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 5, text: 'O plugin' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe na
                <plugin-ref-fig data-fig="class-plugin-image">Figura</plugin-ref-fig>
                a modelagem do plugin de imagem:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'class-plugin-image',
            fileType: 'png',
            imageUrl: '',
            width: 0.8,
            title: 'Plugin Image',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Tem-se primeiramente, as referências a titleRef e descriptionRef, que são
                os elementos
                <plugin-gloss id="html"></plugin-gloss>
                que receberão o título e descrição, respectivamente.
                Note também que há um estado denominado settings juntamente com settingsContainer,
                que guarda um elmento
                <plugin-gloss id="html"></plugin-gloss>.
                Isto se dá devido a uma particularidade do componente Header, pois o mesmo
                tem um menu personalizado que se difere do padrão do EditorJs. Este menu é
                um componente React que é guardado
                no estado settings, que por ventura é renderizado através do portal no elemento
                indicado por settingsContainer.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe que state; error; loading e setImageState fazem parte de um estado especial
                denominado ImageState. Isto se dá devido a complexiade do plugin de imagem, que possui
                um hook personalizado em um código separado, de modo a ajudar a gerenciar os casos
                de uso do plugin.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O método settingsHandler é o responsável por controlar o estado settings, de modo que
                é este quem define quando o menu aparecerá em tela. O controlador do menu é o EditorJs,
                que através da chamada de um evento em sua
                <plugin-gloss id="api"></plugin-gloss>
                define quando tal estado será definido.
                Desta forma pode-se controlar a renderização de um menu personalizado no EditorJs.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 5, text: 'Renderização do componente imagem' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A
                <plugin-ref-fig data-fig="image-component-tree">Figura</plugin-ref-fig>
                demonstra a sub-árvore de renderização do plugin de imagem:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'image-component-tree',
            fileType: 'png',
            imageUrl: '',
            width: 0.8,
            title: 'Sub-árvore de renderização do plugin Image',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe que há quatro componentes demarcados em azul. Estes componentes
                são componentes de renderização condicional, pois o plugin de imagem
                altera o seu visual diversas vezes a depender das ações de usuário.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe primeiramente o <i>SpinContainer</i>. Ele é renderizado sempre que
                o estado loading é verdadeiro, ao passo que seus outros três irmãos não.
                O SpinContainer nada mais é do que um receptáculo que possui um componente
                Spin, que é um indicador animado com papel de mostrar ao usuário que algo está
                sendo carregado.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                <i>LoadingContainer</i> é renderizado quando não há nenhuma imagem atribuída ao componente
                e é controlado pelo estado <i>state</i>. Possui como filhos um componete Input e Dragger.
                O componente Input é onde pode-se colar um link para uma imagem, ao passo que Dragger é
                onde se pode arrastar algum arquivo de imagem a partir do Sistema Operacional. O Dragger
                também possui três elementos de parágrfos que são textos que orientam o usuário em como
                o mesmo pode fazer uso do componente. A
                <plugin-ref-fig data-fig="show-image">Figura</plugin-ref-fig>
                mostra como é a aparência desta parte na interface gráfica.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                <i>CardContainer</i> é rederizado quando o usuário atribui alguma imagem ao compoente e também
                é controlado pelo estado <i>state</i>.
                Possui um componente Card que vai abrigar a imagem propriamente dita, além também de uma área
                textual denominada <i>TextEditionContainer</i> onde o usuário pode definir o título e a descrição
                da imagem. A
                <plugin-ref-fig data-fig="show-image-image">Figura</plugin-ref-fig>
                demonstra a aparência de um componente imagem com uma imagem atribuída.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Por fim o <i>SettingsPortal</i> renderizará uma aparente quebra de árvore no
                <plugin-gloss id="dom"></plugin-gloss>
                do menu do componente. A condição para tal renderização é a chamada do menu
                a partir da
                <plugin-gloss id="api"></plugin-gloss>
                do EditorJs. Desta forma, tem-se um componente totalmente integrado ao seu
                menu que responde às ações do mesmo e vice versa.
                A
                <plugin-ref-fig data-fig="show-image-menu">Figura</plugin-ref-fig>
                mostra a renderização deste menu personalizado.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 5, text: 'Aparência do plugin de imagem' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Abaixo é descutida as diversas aparências do plugin de imagem
                a depender de seus respectivos estados e ações do usuário.
                Inicialmente são renderizadas as instruções para que o usuário possa
                atribuir uma imagem ao componente. O desenho de tal tentou ser o mais
                simples e objetivo possível, de modo que o usuário não necessite de
                nenhum manual para entender o que está acontecendo.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'show-image',
            fileType: 'png',
            imageUrl: '',
            width: 1,
            title: 'Visual do plugin de imagem',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Quando uma imagem é atribuida, como no caso abaixo, a imagem será exibida
                em tela através do editor com um título e uma descrição genérica.
                Caso o usuário tenha importando a imagem da internet através de um link, a
                descrição padrão automaticamente conterá a referência à sua fonte original.
                Note que os campos de título e descrição são editáveis.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'show-image-image',
            fileType: 'png',
            imageUrl: '',
            width: 0.9,
            title: 'Imagem atrelada no plugin',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O menu de personalização do componente de imagem possui configurações
                adicionais. Pode-se alterar a porcentagem de ocupação da imagem no documento,
                bem como desatribuir a imagem corrente através do botão limpar. Caso o usuário
                desatribuia, o estado retorna para o exibido na
                <plugin-ref-fig data-fig="show-image">Figura</plugin-ref-fig>.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'show-image-menu',
            fileType: 'png',
            imageUrl: '',
            width: 0.6,
            title: 'Sub-menu do plugin de imagem',
            description: 'Fonte: Autoria própria'
        }
    },
]