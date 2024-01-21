import styled from "styled-components";
import { imageBase, DeleteButton } from "../styledComponents";

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

export const RemoveImg = styled.button`
    ${DeleteButton};
    transform: translateX(75px);
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