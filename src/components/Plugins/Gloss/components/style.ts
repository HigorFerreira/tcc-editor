import styled from "@emotion/styled";
import { blue } from '@ant-design/colors';

export const ItemContainer = styled('div')(() => ({
    '.ant-list-item': {
        paddingRight: 24,
        paddingLeft: 24,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: blue[0]
        }
    },
    'input[type="radio"]:checked + label': {
        '.ant-list-item': {
            backgroundColor: blue[0]
        }
    },
}));