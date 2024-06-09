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
    useGetGloss,
} from '@/components/Providers/Gloss';

import { FaCheck as AttachIcon } from "react-icons/fa";

import NewItemButton from '@/components/Plugins/Gloss/components/NewItemButton';

import GlossList from '@/components/Plugins/Gloss/components/GlossList';

import NoData from '@/components/Plugins/Gloss/components/NoData';
import { GlossaryType } from "@/parser/types";

const {
    Search
} = Input;

export function GlossModal(
    {
        range,
        onAttach,
        isModalOpen: _isModalOpen,
    }: {
        isModalOpen: boolean
        range?: Range
        onAttach?: (uuid: string, gloss: GlossaryType) => void
    }
){

    const [ selected, setSelected ] = useState('');
    const [ filter, setFilter ] = useState('');

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const getGloss = useGetGloss();
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
        title={`Atribuir glossário para: ${ range?.toString()}${
            `${
                !selected
                    ? ''
                    : ` ➙ ${getGloss(selected).short}`
            }`
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
            {
                selected &&
                <Button
                    title={`Atribuir: ${getGloss(selected).short}`}
                    icon={<AttachIcon size={18} />}
                    onClick={() => {
                        onAttach && onAttach(selected, getGloss(selected))
                    }}
                />
            }
        </ModalFooter>}
    >
        <Search value={filter} onChange={e => setFilter(e.target.value)} placeholder="Buscar Abreviação/Sigla/Termo" />
        <ModalContent>
            {
                glossList.length === 0
                    ? <NoData text="Sem glossário" />
                    : <GlossList
                        query={filter}
                        items={glossList}
                        onSelect={uuid => {
                            setSelected(uuid);
                        }}
                    />
            }
        </ModalContent>
    </Modal>
}