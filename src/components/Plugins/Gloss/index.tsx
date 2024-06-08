import { MdOutlineAbc } from "react-icons/md";
import { Button, Modal, Input } from 'antd';
import { PropsWithChildren, useEffect, useState } from "react";
import GlossClass from '@/components/Plugins/Gloss/class'
import { createPortal } from "react-dom";

import {
    AcronmModal,
} from '@/components/Plugins/Gloss/components/AcronmModal'

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
        setIsModalOpen(true);
    }

    const inlineToolCheckState = (_param: unknown) => {
        const param = _param as CustomEvent<{ context: GlossClass, selection: Selection }>;
        const { context } = param.detail;
        const plugin = context.api.selection.findParentTag(context.tag);
        context.state = Boolean(plugin);
    }

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
        <AcronmModal
            isModalOpen={isModalOpen}
            range={range}
        />
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