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

import NoData from '@/components/Plugins/Gloss/components/NoData';

const {
    Search
} = Input;

export function AcronmModal(
    {
        isModalOpen: _isModalOpen,
        range,
    }: {
        isModalOpen: boolean
        range?: Range
    }
){
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const glossList = useGlossList();
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
        title={`Atribuir Abreviação/Sigla para: ${range?.toString()}${false ? ` ➙ Algo` : ''}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={<ModalFooter>
            <Button
                type="primary"
                onClick={() => addAcronm({ label: 'Test label', short: 'Label' })}
            >
                Adicionar Sigla
            </Button>
            <Button
                type="primary"
            >
                Adicionar Abreviação
            </Button>
            <Button
                disabled
                type="primary"
                title="Em breve"
            >
                Adicionar Termo
            </Button>
        </ModalFooter>}
    >
        <Search placeholder="Buscar Abreviação/Sigla" />
        <ModalContent>
            {
                glossList.length === 0
                    ? <NoData text="Sem glossário" />
                    : glossList.map(({ label, uuid }) => {
                        return <div>
                            <span>{ label }</span>
                            <Button onClick={() => deleteGloss(uuid)}>Del</Button>
                        </div>
                    })
            }
        </ModalContent>
    </Modal>
}