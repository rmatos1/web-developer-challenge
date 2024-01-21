import styled from 'styled-components';

const TopBarContainer = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    height: 100px;
    background: #2b2b2b;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    z-index: 10;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Logo = styled.span`
    color: #71bb00;
    font-size: 32px;
    font-weight: bold
`

const Subtitle = styled.span`
    color: #707070;
    font-size: 16px;
    text-transform: uppercase;
`

export const TopBar = () => {

    return(
        <TopBarContainer>

            <TextContainer>

                <Logo data-testid="top-bar-logo">buildbox</Logo>
                <Subtitle data-testid="top-bar-subtitle">web challenge</Subtitle>

            </TextContainer>

        </TopBarContainer>
    )
}