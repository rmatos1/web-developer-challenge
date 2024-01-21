import styled, { css } from "styled-components";
import { cardBase } from "../styledComponents";

export const FormContainer = styled.form`
    ${cardBase};
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 25px;
    gap: 16px;
`;

const inputBase = css`
    background: #494949;
    font-size: 16px;
    color: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 15px 20px;
    border: 0;
    box-sizing: border-box;

    &::placeholder {
        color: #9f9f9f; 
    }
`;

export const StyledInput = styled.input`
    ${inputBase};
    height: 46px;
`

export const StyledTextArea = styled.textarea`
    ${inputBase};
    min-width: 100%;
    max-width: 100%;
    min-height: 90px;
    max-height: 150px;
`

export const FormBottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 10px;
`