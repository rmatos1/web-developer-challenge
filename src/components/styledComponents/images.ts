import styled, { css } from "styled-components";

export const imageBase = css`
    width: 100px;
    height: 100px;
    border-radius: 40px;
`

export const FeedImg = styled.img`
    ${imageBase};
    object-fit: cover;
`

export const Icon = styled.img`
    width: auto;
    height: 20px;
`