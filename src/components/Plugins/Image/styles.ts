import styled from '@emotion/styled';

export const Container = styled('div')(() => {
    return {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        margin: '2rem 0',
        // minHeight: 256,
    }
});

export const SpinContainer = styled('div')(() => {
    return {
        position: 'absolute',
        inset: 0,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#edeef3'
    }
});

export const SettingsContainer = styled('div')(() => {
    return {
        padding: '0 0.5rem'
    }
});

export const SettingsButtonsContainer = styled('div')(() => {
    return {
        display: 'flex',
        gap: 5,
        marginBottom: '0.5rem'
    }
});

export const TextEditionContainer = styled('div')(() => {
    return {
        '>div': {
            outline: 'none'
        }
    }
});

export const CardContainer = styled('div')(() => {
    return {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    }
});

export const LoadingContainer = styled('div')(() => {
    return {
        minHeight: 180,
    }
});