import styled from "@emotion/styled";

export const ModalContent = styled('div')(() => ({
    maxHeight: 310,
    overflow: 'auto',
}));

export const ModalFooter = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-evenly'
}));