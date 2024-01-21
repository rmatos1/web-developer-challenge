import styled, { css } from 'styled-components';

interface IButton {
  $height?: number;
  $width?: number;
  $backgroundColor?: string;
  $isDisabled?: boolean;
  $color?: string;
}

export const StyledButton = styled.button<IButton>`
  width: ${(props) => (props.$width ? `${props.$width}px` : '112px')};
  height: ${(props) => (props.$height ? `${props.$height}px` : '46px')};
  border-radius: 10px;
  border: 0;
  color: ${(props) => props.$color || '#fff'};
  cursor: pointer;
  transition: filter 0.15s, box-shadow 0.15s;
  background-color: ${(props) => props.$backgroundColor || '#71bb00'};
  font-size: 16px;
  box-shadow: 0 1px 3.5px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  transition: background 0.15s;

  &:hover {
    background: #7acc00;
  }

  ${(props) =>
    props.$isDisabled &&
    css`
      background-color: #5f5f5f;
      color: #343434;
      box-shadow: none;
      cursor: not-allowed;
      pointer-events: none;

      &:hover,
      &:focus,
      &:active {
        filter: none;
        box-shadow: none;
      }
    `}
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  font-size: 16px;
  color: #5f5f5f;
  padding: 5px;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover {
    opacity: .7;
  }
`;

export const DeleteButton = css`
  position: absolute;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover {
      opacity: .7;
  }
`