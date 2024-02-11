import styled, { css } from 'styled-components'

interface InputProps {
  $width?: string
}

const Input = styled.input<InputProps>`
  ${({ theme, $width }) => css`
    padding: 0.75rem;
    border-radius: ${theme.radius.sm};
    border: 1px solid ${theme.colors.base.button};
    background: ${theme.colors.base.input};

    width: ${$width};

    &:focus {
      border-color: ${theme.colors.brand.yellow};
      outline: none;
    }
  `}
`

export { Input }
