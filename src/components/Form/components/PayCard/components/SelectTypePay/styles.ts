import styled, { css } from 'styled-components'

const Container = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors.brand.purpleLight};
      border: 1px solid ${theme.colors.brand.purple};

      &:hover {
        background: ${theme.colors.brand.purpleLight};
      }
    `}
  }
`

const ContentContainer = styled.div`
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
      transition: 0.2seg;
      cursor: pointer;
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

export { Container, Text, ContentContainer }
