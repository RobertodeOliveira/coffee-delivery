import styled, { css } from 'styled-components'

interface InputProps {
  $width?: string
}

const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    position: relative;

    > p {
      color: ${theme.colors.base.error};
      font-size: ${theme.fontSizes.xs};
    }
  `}
`

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

export { Input, InputWrapper }
