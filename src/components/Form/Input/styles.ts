import styled, { css } from 'styled-components'

interface InputProps {
  $width?: string
}

const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.3rem;
    position: relative;
    /* background-color: beige; */

    > p {
      color: ${theme.colors.base.error};
      font-size: ${theme.fontSizes.xs};
    }
  `}
`

interface InputStyleContainerProps {
  hasError: boolean
}

const InputStyleContainer = styled.div<InputStyleContainerProps>`
  ${({ theme, hasError }) => css`
    align-items: center;
    transition: 0.4s;
    overflow: hidden;
    /* ${hasError} */

    &:focus-within {
      border-color: ${theme.colors.brand.yellowDark};
    }
  `}
`

const RightText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xs};
    margin-right: 0.75rem;
    font-style: italic;
    color: ${theme.colors.base.label};
  `}
`

const Input = styled.input<InputProps>`
  ${({ theme }) => css`
    padding: 0.75rem;
    border-radius: ${theme.radius.sm};
    border: 1px solid ${theme.colors.base.button};
    background: ${theme.colors.base.input};

    width: 100%;

    &:focus {
      border-color: ${theme.colors.brand.yellow};
      outline: none;
    }
  `}
`

export { Input, InputWrapper, InputStyleContainer, RightText }
