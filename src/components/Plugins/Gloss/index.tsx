import { MdOutlineAbc } from "react-icons/md";
import { Button, Modal, Input } from 'antd';
import { PropsWithChildren, useEffect, useState } from "react";
import GlossClass from '@/components/Plugins/Gloss/class'
import { createPortal } from "react-dom";

import {
    ModalContent,
    ModalFooter,
} from '@/components/Plugins/Gloss/style';

const {
    Search
} = Input;

export default function Gloss({ context }: PropsWithChildren<Partial<{ context: GlossClass }>>){

    const [ range, setRange ] = useState<Range>();
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const inlineToolSurround = (_param: unknown) => {
        const param = _param as CustomEvent<{ context: GlossClass, range: Range }>;
        const { context, range } = param.detail;
        setRange(range);
        showModal();
    }

    const inlineToolCheckState = (_param: unknown) => {
        const param = _param as CustomEvent<{ context: GlossClass, selection: Selection }>;
        const { context } = param.detail;
        const plugin = context.api.selection.findParentTag(context.tag);
        context.state = Boolean(plugin);
    }

    const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

    useEffect(() => {
        document.addEventListener('InlineToolSurround', inlineToolSurround);
        document.addEventListener('InlineToolCheckState', inlineToolCheckState);
        return () => {
            document.removeEventListener('InlineToolSurround', inlineToolSurround);
            document.removeEventListener('InlineToolCheckState', inlineToolCheckState);
        }
    }, []);

    return <>
        <Button
            type="text"
            title="Abreviações/Siglas"
            style={{ padding: 0 }}
        >
            <MdOutlineAbc size={60} />
        </Button>
        <Modal
            title={`Atribuir Abreviação/Sigla para: ${range?.toString()}`}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={<ModalFooter>
                <Button type="primary">Adicionar Sigla</Button>
                <Button type="primary">Adicionar Abreviação</Button>
                <Button type="primary" disabled title="Em breve">Adicionar Termo</Button>
            </ModalFooter>}
        >
            <Search placeholder="Buscar Abreviação/Sigla" />
            <ModalContent>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </ModalContent>
        </Modal>
        {
            context?.actions &&
            context.state &&
            createPortal(
                <div>Actions aqui</div>,
                context.actions
            )
        }
    </>
}