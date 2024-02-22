import styled, { css } from 'styled-components'

const ContainerButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    padding: 8px;
    background: ${theme.colors.base.button};
    border-radius: ${theme.radius.md};
    width: fit-content;
  `}
`

const BaseButtonStyles = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    padding: 2px;
    border: none;
    background: ${theme.colors.base.button};
    cursor: pointer;

    svg {
      &:hover {
        color: #4b2995;
      }
    }
  `}
`

const CountNumber = styled.p`
  padding-left: 3.5px;
  padding-right: 3.5px;
`

const PlusButton = styled(BaseButtonStyles)``

const LessButton = styled(BaseButtonStyles)``

export { ContainerButton, PlusButton, LessButton, CountNumber }
