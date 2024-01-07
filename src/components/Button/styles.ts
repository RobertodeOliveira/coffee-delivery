import styled, { css } from "styled-components"

interface ContainerButton {
  background?: string
  fontSize?: string
  color?: string
}

const ContainerButton = styled.button<ContainerButton>`
  ${({ background, fontSize, color }) => css`
    display: flex;
    align-items: center;

    cursor: pointer;
    padding: 0.5rem;
    font-size: ${fontSize};
    background: ${background};
    color: ${color};
    border: none;
    border-radius: 0.375rem;
    gap: 0.25rem;


  `}
`

export { ContainerButton }