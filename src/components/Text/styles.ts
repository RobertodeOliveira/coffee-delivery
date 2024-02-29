import styled, { css } from 'styled-components'

interface TextProps {
  fontSize?: string
  color?: string
  $fontWeigth?: number
}

const Container = styled.div``

const Text = styled.p<TextProps>`
  ${({ fontSize, color, $fontWeigth }) => css`
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${$fontWeigth};
  `}
`

export { Container, Text }
