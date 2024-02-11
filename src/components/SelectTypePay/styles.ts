import styled, { css } from 'styled-components'

const Container = styled.button`
  ${({ theme }) => css`
    padding: 16px;
    width: 188px;
    border: none;
    background: ${theme.colors.base.button};
    border-radius: ${theme.radius.md};

    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      background: ${theme.colors.base.hover};
    }

    &:focus {
      border: 1px solid ${theme.colors.brand.purple};
    }
  `}
`

const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xs};
  `}
`

export { Container, Text }
