import styled from '@emotion/styled'

export const Container = styled("div")(() => ({
    margin: '12px 0',
    backgroundColor: '#e9f6fb',
    borderRadius: 6
}));

export const ContentContainer = styled("div")(() => ({
    // padding: '1.5rem 0',
    padding: '0 1rem 1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

export const ImageTitle = styled("p")(() => ({
    padding: 5,
    outline: "none",
    border: "none",
    textAlign: "center",
    resize: "none",
    overflowY: "hidden",
    wordWrap: "break-word",
    fontSize: '14pt',
    fontWeight: 600,
}));

export const Caption = styled("div")(() => ({
    padding: 5,
    outline: "none",
    border: "none",
    textAlign: "center",
    resize: "none",
    overflowY: "hidden",
    wordWrap: "break-word",
    margin: '0.6em 0',
}));