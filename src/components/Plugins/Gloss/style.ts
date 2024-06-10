import styled from "@emotion/styled";

export const ModalContent = styled('div')(() => ({
    height: 310,
    overflow: 'auto',
}));

export const ModalFooter = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-evenly'
}));

export const NoDataContainer = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
}));