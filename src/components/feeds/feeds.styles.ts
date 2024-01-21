import styled from "styled-components";
import { cardBase } from "../styledComponents";
import { MOBILE } from "../../constants";

export const FeedsContainer = styled.div`
    width: 100%;
    margin: 60px 0;
`

export const FeedSectionTitle = styled.h4`
  font-size: 14px;
  padding: 0 3px;
  color: #727272;
  margin-bottom: 12px;
`

export const EmptyFeeds = styled.div`
    padding: 0 3px;
`

export const FeedsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
`

export const FeedCard = styled.div`
    ${cardBase};
    position: relative;
    display: flex;
    gap: 36px;

    @media (max-width: ${MOBILE}) {
        gap: 18px;
        align-items: center;
    }
`

export const DeleteButton = styled.button`
    position: absolute;
    cursor: pointer;
    top: 12px;
    right: 12px;
    background: transparent;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c75524;
    border: 1px solid #c75524;
    transition: opacity 0.15s;

    &:hover {
        opacity: .7;
    }

    @media (max-width: ${MOBILE}) {
        top: 6px;
        right: 6px;
    }
`

export const FeedTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-right: 16px;

    @media (max-width: ${MOBILE}) {
        padding-right: 0;
        gap: 18px;
    }
`

export const FeedAuthorLabel = styled.h4`
    font-size: 14px;
    color: #565656;
    margin: 0 0 8px;
`

export const FeedAuthorName =  styled.p`
    font-size: 16px;
    color: #757575;
    margin: 0;
`