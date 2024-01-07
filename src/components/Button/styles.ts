import styled, { css } from "styled-components"

interface ContainerButton {
  color?: string
  fontSize?: string
}

const ContainerButton = styled.button<ContainerButton>`
  ${({ color, fontSize }) => css `
    padding: 0.5rem;
    font-size: ${fontSize};
    background: ${color};
    border: none;
    border-radius: 0.375rem;
    gap: 0.25rem;

  `}
`

export { ContainerButton }