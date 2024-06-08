import { useEffect, useState } from "react";
import { Button, Modal, Input } from 'antd';

import {
    ModalContent,
    ModalFooter,
} from '@/components/Plugins/Gloss/style';

import {
    useAddAbbrev,
    useAddAcronm,
    useDeleteGloss,
    useGlossList,
} from '@/components/Providers/Gloss';

import NewItemButton from '@/components/Plugins/Gloss/components/NewItemButton';

import GlossList from '@/components/Plugins/Gloss/components/GlossList';

import NoData from '@/components/Plugins/Gloss/components/NoData';

const {
    Search
} = Input;

export function GlossModal(
    {
        isModalOpen: _isModalOpen,
        range,
    }: {
        isModalOpen: boolean
        range?: Range
    }
){

    const [ filter, setFilter ] = useState('');

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const glossList = useGlossList();
    const addAbbrev = useAddAbbrev();
    const addAcronm = useAddAcronm();
    const deleteGloss = useDeleteGloss();

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
        setIsModalOpen(_isModalOpen);
    }, [ _isModalOpen ]);

    return <Modal
        title={`Atribuir glossário para: ${
            range?.toString()}${false ? ` ➙ Algo` : ''
        }`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={(e) => {
            if((e.target as HTMLDialogElement).classList.contains('ant-modal-wrap')){
            }
            else{
                handleCancel();
            }
        }}
        footer={<ModalFooter>
            <NewItemButton
                label="Adicionar Sigla"
                placement="topLeft"
                placeholders={[ 'Sigla', 'Descrição' ]}
                buttonProps={{
                    type: 'primary',
                }}
                onAdd={([ short, label ]) => {
                    addAcronm({
                        short,
                        label,
                    });
                }}
            />
            <NewItemButton
                label="Adicionar Abreviação"
                placement="top"
                placeholders={[ 'Abreviação', 'Descrição' ]}
                buttonProps={{
                    type: 'primary',
                }}
                onAdd={([ short, label ]) => {
                    addAbbrev({
                        short,
                        label,
                    });
                }}
            />
            <NewItemButton
                label="Adicionar Termo"
                placement="topRight"
                placeholders={[ 'Abreviação', 'Descrição' ]}
                buttonProps={{
                    disabled: true,
                    type: 'primary',
                }}
                onAdd={([ short, label ]) => {
                }}
            />
        </ModalFooter>}
    >
        <Search value={filter} onChange={e => setFilter(e.target.value)} placeholder="Buscar Abreviação/Sigla/Termo" />
        <ModalContent>
            {
                glossList.length === 0
                    ? <NoData text="Sem glossário" />
                    : <GlossList query={filter} items={glossList} />
            }
        </ModalContent>
    </Modal>
}