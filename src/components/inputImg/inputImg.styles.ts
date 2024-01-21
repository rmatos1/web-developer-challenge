import styled from "styled-components";
import { imageBase } from "../styledComponents";

export const StyledFileInput = styled.input`
    display: none;
`

export const ImgUploadedContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DeleteButton = styled.button`
    position: absolute;
    border: 0;
    background: transparent;
    transform: translateX(75px);
    cursor: pointer;
    transition: opacity 0.15s;

    &:hover {
        opacity: .7;
    }
`

export const DeleteIcon = styled.img`
    width: auto;
    height: 20px;
`

export const InputImgContainer = styled.div`
    ${imageBase};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #404040;
    box-sizing: border-box;
    transition: border 0.15s;

    &:hover {
        border: 2px solid #a5a5a5;
    }
`

export const EmptyImgIcon = styled.img`
    width: 32px;
    height: auto
`    