import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.brand.yellow};
    font-size: ${theme['font-size'].xl};
  `}
`
