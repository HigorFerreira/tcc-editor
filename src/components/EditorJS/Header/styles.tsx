import styled from "@emotion/styled";

const converted = {
    ".ce-header": {
        padding: ".6em 0 3px",
        margin: "0",
        lineHeight: "1.25em",
        outline: "none"
    },
    ".ce-header p,.ce-header div": {
        padding: "0 !important",
        margin: "0 !important"
    },
    ".ce-header[contentEditable=true][data-placeholder]:before": {
        position: "absolute",
        content: "attr(data-placeholder)",
        color: "#707684",
        fontWeight: 400,
        display: "none",
        cursor: "text"
    },
    ".ce-header[contentEditable=true][data-placeholder]:empty:before": {
        display: "block"
    },
    ".ce-header[contentEditable=true][data-placeholder]:empty:focus:before": {
        display: "none"
    }
}

export const Container = styled("div")(() => ({
    'h1,h2,h3,h4':{
        padding: ".6em 0 3px",
        margin: "0",
        lineHeight: "1.25em",
        outline: "none",
        'p,div': {
            padding: "0 !important",
            margin: "0 !important"
        },
        "&:[contentEditable=true][data-placeholder]:before": {
            position: "absolute",
            content: "attr(data-placeholder)",
            color: "#707684",
            fontWeight: 400,
            display: "none",
            cursor: "text"
        },
        "&:[contentEditable=true][data-placeholder]:empty:before": {
            display: "block"
        },
        "&:[contentEditable=true][data-placeholder]:empty:focus:before": {
            display: "none"
        },
    }
}));