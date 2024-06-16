import {
    Block,
} from '@/parser/types';

import { v4 as uuidv4 } from 'uuid';

import { image } from '@/tests/chapter3/editorjs/image'

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
export const editorjs: Block[] = [
    {
        type: 'header',
        data: { level: 2, text: 'Editor' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O Editor é o principal componente da aplicação em termos de interatividade
                com o usuário e
                <plugin-gloss id="ux"></plugin-gloss>.
                Através dele o usuário poderá inserir os blocos a comporem o seu trabalho acadêmico.
                Veja na
                <plugin-ref-fig data-fig="estrutura-editor-componente">Figura 1</plugin-ref-fig>
                a localização da estrutura de pastas no projeto.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'estrutura-editor-componente',
            fileType: 'png',
            imageUrl: '',
            width: 0.9,
            title: 'Estrutura de pastas do componente Editor',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'header',
        data: { level: 3, text: 'Provider' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O componente do Editor propriamente dito, aqui denominado
                Provider, é exportado pelo arquivo Editor/index.tsx. É Chamado de
                Provider pois em seu contexto são colocadas funções que poderão ser
                utilizadas no decorrer de toda a aplicação, com a condição de que os componentes
                utilizadores sejam filhos de Editor.
                A
                <plugin-ref-fig data-fig="class-editor-component">Figura 1</plugin-ref-fig>
                contém a descrição do componente:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'class-editor-component',
            fileType: 'png',
            imageUrl: '',
            width: 0.6,
            title: 'Componente React - Editor',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Os dois principais atributos deste componente são: editor e editorContainerRef,
                ambos anotados como Ref.
                Desta vez, estes atributos não são estados, mas sim referências. A referência,
                ao contrário do estado não possui função de atualização. São objetos especiais
                que podem guardar referências para objetos no
                <plugin-gloss id="dom"></plugin-gloss>
                ou outros objetos <i>JavaScript</i>. Isso acontece pois editor guardará a instância
                do EditorJs, ao passo que editorContainerRef referenciará uma div no
                <plugin-gloss id="dom"></plugin-gloss>.
                Esta div será utilizada por editor para inputar a ferramenta de edição de
                texto.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe na
                <plugin-ref-fig data-fig="sub-tree-render-editor">Figura 1</plugin-ref-fig>
                que o Context.Provider renderiza dois elmentos div irmãos. O azul, que conterá
                os plugins nomais e in-line. E o vermelho que é a div na qual se define
                o atributo ref com editorContainerRef.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'sub-tree-render-editor',
            fileType: 'png',
            imageUrl: '',
            width: 0.7,
            title: 'Sub árvore de renderização do componente Editor',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe que a div azul não é exibida em tela através da propriedade
                style='display: none'. Isso acontece porque os plugins listados
                nela serão transportados para dentro da div vermelha por meio de
                um conceito chamado <i>React Portals</i>. Virtualmente, para o React,
                os plugins estarão na div azul. Porém praticamente, eles estarão na verdade
                dentro da div vermelha num lugar a ser definido pelo EditorJs, que define
                isso automaticamente. Este recurso é usado para se injetar os componentes
                do React dentro do editor sem quebrar sua árvore lógica. Mais a frente
                será demonstrado que a classe EditorJs é quem é responsável por chamar
                e decidir a localização de cada componente através da
                instanciação de classes.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A
                <plugin-ref-fig data-fig="effect-ready-editor-component">Figura 1</plugin-ref-fig>
                ilustra o processo simplificado de quando o estado <i>ready</i> é disparado.
                <i>Ready</i> é disparado quando acontece a primeira renderização da página, por meio
                de um efeito que não monitora nenhum estado em particular. A tarefa deste efeito
                é apenas setar o estado <i>ready</i> para <i>true</i>. Isto funciona pois o efeito que
                não monitora nenhum estado é executado apenas uma vez, quando o componente é
                renderizado.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    // {
    //     type: 'paragraph',
    //     data: {
    //         text: `
    //             Uma vez definido como true, (ou modificado), ready dispara o efeito ilustrado na
    //             <plugin-ref-fig data-fig="effect-ready-editor-component">Figura 1</plugin-ref-fig>
    //         `.trim().replace(/^\s{16}/gm, '')
    //     }
    // },
    // {
    //     type: 'header',
    //     data: { level: 3, text: 'Classe Editor' }
    // },
    {
        type: 'image',
        data: {
            uuid: 'effect-ready-editor-component',
            fileType: 'png',
            imageUrl: '',
            width: 0.7,
            title: 'Simplificação do Efeito ready no componente Editor',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Event Listener' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O quadro vermelho na
                <plugin-ref-fig data-fig="effect-ready-editor-component">Figura 1</plugin-ref-fig>
                corresponde a adição de um escutador de
                evento personalizado denominado <i>editor-plugin-render</i>.
                Isto é importante pois este evento recebe a criação dos plugins que
                são disparados de dentro da classe EditorJs. Observe o código abaixo:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 136,
            text: `
[...]
document.addEventListener('editor-plugin-render', e => {
    // console.log('editor-plugin-render');
    // console.log({ e });
    setPluginsList(prev => [
        ...prev,
        {
            excluded: false,
            // @ts-ignore
            plugin: e.detail.context
        }
    ]);
});
[...]
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Na linha 137 o escutador é adicionado ao objeto
                <plugin-gloss id="dom"></plugin-gloss>. Este evento monitora
                qualquer renderização de plugin que é despachada, seja ela da onde
                for. Quando acontece um despache a função é chamada, de modo que na linha
                140 tem-se a adição do plugin na lista de plugins.
                Note que o objeto adicionado possui uma propriedade excluded
                que controla quando o plugin sai de cena.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Quando o estado
                pluginsList
                é atualizado por setPluginsList, a lista de plugins
                é memorizada em pluginsRender, que é então
                renderizado na linha 213 do código abaixo:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 208,
            text: `
[...]
    return <Context.Provider value={{
        editor: editor.current
    }}>
        <div style={{ display: 'none' }}>
            { pluginsRender }
            { inlinePluginsRender }
        </div>
        <div ref={ editorContainerRef } ></div>
    </Context.Provider>
}
`.trim()
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Instância do EditorJs' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Os quadros laranja, violeta e azul da
                <plugin-ref-fig data-fig="effect-ready-editor-component">Figura 1</plugin-ref-fig>
                correspondem a instanciação do EditorJs e suas configurações.
                Quando a referência editor ainda não foi atribuida mas o editorContainerRef
                já está renderizado em tela conforme a linha 173, a linha 175 se encarrega
                de instanciar a classe EditorJS.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe a importancia da linha 177 em que a referência editorContainerRef
                é repassada para a propriedade holder. O EditorJS utiliza essa propriedade para
                colocar a ferramenta de edição na
                <plugin-gloss id="dom"></plugin-gloss>
                através da referência ao elemento repassado.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A propriedade tools recebe o register na linha 178, que nada mais é do que a lista
                de plugins repassada quando o componente vai ser utilizado.
                na linha 190 há uma espécie de trava que aguarda até que o editor esteja pronto
                antes de chamar a função onReady na linha 192. Note que onReady só é chamada caso
                a mesma tenha sido repassada. Ao chamar, a instância do editor é repassada na linha
                193.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 172,
            text: `
[...]
if(!editor.current && editorContainerRef.current){
    // console.log("Comming to assing editorjs...");
    editor.current = new EditorJS({
        ...config,
        holder: editorContainerRef.current,
        tools: Object.keys(register).reduce((prev, key) => {
            const { component, ...restOfProps } = register[key];
            return {
                ...prev,
                [key]: restOfProps
            };
        }, {}),
        onChange: (api, event) => {
            onChange && onChange(api, event);
        },
    });

    await editor.current.isReady;

    onReady && onReady({
        editor: editor.current
    })
}
[...]
`.trim()
        }
    },
    {
        type: 'header',
        data: { level: 3, text: 'BasePlugin' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A classe BasePlugin será a classe na qual todos os plugins irão derivar.
                Ela implementa os métodos chamados pelo EditorJS quando um plugin customizado
                é chamado pela
                <plugin-gloss id="api"></plugin-gloss>
                do EditorJS.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'class-base-plugin',
            fileType: 'png',
            imageUrl: '',
            width: 0.6,
            title: 'Classe - BasePlugin',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A tabela
                <plugin-ref-table data-table="base-plugin-methods">Tabela</plugin-ref-table>
                mostra a descrição dos métodos da classe e suas atribuições.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'table',
        data: {
            id: 'base-plugin-methods',
            title: 'Métodos da classe BasePlugin',
            description: '',
            width: 1,
            column_sizes: [ 0.35, 0.65 ],
            header: [
                'Método', 'Descrição'
            ],
            items: [
                [ 'toolbox()', 'Método estático que retorna o ícone do plugin a ser renderizado no menu' ],
                [
                    'render()',
                    `
                        Método que renderiza o plugin na ferramenta de edição
                    `
                ],
                [
                    'renderSettings()',
                    `
                        Método que renderiza o menu personalizado do plugin
                    `
                ],
                [
                    'save()',
                    `
                        Método que retorna o estado do componente quando saver da
                        <plugin-gloss id="api"></plugin-gloss>
                        é chamado
                    `
                ],
                [
                    'redered()',
                    `
                        Método disparado quando o plugin é renderizado
                    `
                ],
                [
                    'updated()',
                    `
                        Método disparado quando o plugin é atualizado
                    `
                ],
                [
                    'removed()',
                    `
                        Método disparado quando o plugin é removido
                    `
                ],
                [
                    'moved()',
                    `
                        Método disparado quando o plugin é movido
                    `
                ],
                [
                    'getName()',
                    `
                        Método abstrado que retorna o nome do Plugin.
                        Toda implementação de plugin deve implementar essa
                        classe obrigatoriamente
                    `
                ],
                [
                    'getUuid()',
                    `
                        Método abstrado que retorna um identificador único ao instanciar o plugin.
                        Toda implementação de plugin deve implementar essa
                        classe obrigatoriamente
                    `
                ],
            ]
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O método mais importante da classe base é o render(). É ele quem coloca o plugin
                em tela quando o usuário escolhe um plugin a partir do menu de plugins.
                Observe no código abaixo o funcionamento da classe:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 50,
            text: `
[...]
public render(){
    const wrapper = document.createElement('div');
    wrapper.id = this.pluginId;

    const ev = new CustomEvent<{ context: BasePlugin }>(
        'editor-plugin-render', {
            detail: {
                context: this
            }
        }
    );
    setTimeout(() => document.dispatchEvent(ev), 20);

    return wrapper;
}
[...]
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe que o método render cria um wrapper a partir de um elemento
                div na linha 52. Na linha 53 é atribuído um id a partir da chamada do método
                getUuid(). Na linha 55 a 61 é criado um evento customizado que é despachado
                20 milissegundos após o retorno do wrapper.
                O wrapper é o que o EditorJS renderiza na ferramenta. O despache do evento
                juntamente com a referência à instância da classe é então capturada pelo
                escutador discutido na
                <plugin-ref-fig data-fig="effect-ready-editor-component">Figura 1</plugin-ref-fig>
                da sessão Provider. Assim, o plugin do react vai para a lista de plugins ao mesmo
                tempo que é renderizado de forma integrada ao EditorJS.
                (Falar do código do portal)
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    // {
    //     type: 'header',
    //     data: { level: 3, text: 'InlineBasePlugin' }
    // },
    {
        type: 'header',
        data: { level: 3, text: 'Plugins' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Plugins são o principal objetivo em se usar o EditorJS, pois cada plugin é o que
                se traduz nos blocos da escrita em blocos conceituada no capítulo 1.
                A
                <plugin-ref-fig data-fig="estrutura-plugins">Figura 1</plugin-ref-fig>
                ilustra a estrutura de pastas dos plugins que foram desenvolvidos:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'estrutura-plugins',
            fileType: 'png',
            imageUrl: '',
            width: 1,
            title: 'Estrutura de pastas dos plugins',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe que as condições mínimas para a existência de um plugin é possuir
                os arquivos index.tsx e class.ts. O arquivo class.ts é a classe propriamente
                dita que é derivada de BasePlugin, que consequentemente há de se implementar
                os dois métodos abstratos obrigatórios.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O arquivo index.tsx é o componente React interativo. É neste arquivo em que
                se programa a aparência e comportamentos do mesmo.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Header' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O plugin de Header, (até o momento de escrita deste trabalho), pode ser considerado um dos mais simples
                que foi desenvolvido. Observe abaixo a implementação do arquivo class.tsx:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 16,
            text: `
[...]
export default class HeaderClass extends BasePlugin<DataType> {
    text: string = ""
    public setLevel:
        Dispatch<SetStateAction<HeaderLevelsType>> | null = null

    static get conversionConfig() {
        return {
            export: 'text',
            import: 'text',
        };
    }
[...]
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Na linha 17, é realizada a exportação da classe HeaderClass,
                que estende a classe BasePlugin. Observe que nas linhas 18 e 19,
                são definidas uma propriedade text (que armazenará o texto do Header)
                e a função setLevel (que é uma função de atualização de estado do React).
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                No caso do plugin Header, é importante ter uma referência à função
                de atualização do nível (level) do Header, pois é nesta classe que
                o menu, onde o usuário selecionará o nível do título, é definido,
                conforme o código abaixo:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 35,
            text: `
[...]
public renderSettings(): TunesMenuConfigItem[] {
    return ([1,2,3,4,5] as HeaderLevelsType[]).map(lv => ({
        title: \`Nível \${lv}\`,
        // @ts-ignore
        onActivate: () => {
            console.log({ setLevel: this.setLevel });
            this.setLevel && this.setLevel(lv);
        },
        closeOnActivate: true,
        isActive: lv === this?.pluginData?.level,
[...]
`.trim()
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Observe como a função de atualização de estado é chamada a partir de onActivate
                na linha 40. Isso garante a comunicação do menu com o componente React, permitindo
                ao usuário selecionar o nível de título a partir do menu.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                No código abaixo tem-se a implementação das duas funções abstratas obrigatórias
                getName() e getUuid(). Observe que em getName retorna-se o nome header do plugin,
                ao passo que em getUuid retorna-se um uuid versão 4 para criar um identificador
                único para o plugin.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'code',
        data: {
            uuid: `Code${uuidv4().replace(/-/g, '')}`,
            start_line: 51,
            text: `
[...]
    getName(): string {
        return 'header';
    }

    getUuid(): string {
        return uuidv4();
    }
}
`.trim()
        }
    },
    {
        type: 'header',
        data: { level: 5, text: 'Plugin React' }
    },
    {
        type: 'image',
        data: {
            uuid: 'header-plugin-component',
            fileType: 'png',
            imageUrl: '',
            width: 0.7,
            title: 'Plugin: Componente React',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'header',
        data: { level: 5, text: 'Aparência' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                A
                <plugin-ref-fig data-fig="show-header">Figura</plugin-ref-fig>
                mostra como o plugin de Header se parece na interface do editor.
                Também é possível observar seus subtítulos juntamente blocos de
                parágrafo.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'show-header',
            fileType: 'png',
            imageUrl: '',
            width: 0.9,
            title: 'Plugin de Header na interface gráfica',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O nível do título, (Capítulo, sessão e subsessões), é escolhido
                a partir do submenu do próprio bloco conforme a
                <plugin-ref-fig data-fig="show-header-1">Figura</plugin-ref-fig>:
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    {
        type: 'image',
        data: {
            uuid: 'show-header-1',
            fileType: 'png',
            imageUrl: '',
            width: 0.36,
            title: 'Submenu do Header na interface gráfica',
            description: 'Fonte: Autoria própria'
        }
    },
    {
        type: 'header',
        data: { level: 4, text: 'Paragraph' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                Não há uma construção de um plugin paragraph pois se utiliza
                o plugin padrão já pronto fornecido pelo EditorJS.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    ...image,
    {
        type: 'header',
        data: { level: 4, text: 'List' }
    },
    {
        type: 'paragraph',
        data: {
            text: `
                O plugin List que será utilizado será o padrão fornecido pelo
                EditorJS.
            `.trim().replace(/^\s{16}/gm, '')
        }
    },
    // {
    //     type: 'header',
    //     data: { level: 4, text: 'Table' }
    // },
    // {
    //     type: 'paragraph',
    //     data: {
    //         text: `
    //             O plugin de Table, apesar de ter um parser desenvolvido para ele,
    //             (checar a sessão Parsing), não será tratado neste trabalho devido,
    //             ficando para a posteridade em trabalhos futuros.
    //         `.trim().replace(/^\s{16}/gm, '')
    //     }
    // },
    // {
    //     type: 'header',
    //     data: { level: 4, text: 'FootNote' }
    // },
]