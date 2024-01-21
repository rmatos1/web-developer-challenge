import { css } from 'styled-components';
import { MOBILE } from '../../constants';

export const cardBase = css`
    background: #313131;
    border-radius: 5px;
    border: 3px solid #363636;
    width: 100%;
    padding: 25px;
    box-sizing: border-box;
    display: flex;

    @media (max-width: ${MOBILE}) {
        padding: 25px 15px; 
    }
`