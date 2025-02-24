import styled, { css } from 'styled-components'

interface TextProps {
  fontSize?: string
  color?: string
  $fontweight?: number
}

const Container = styled.div``

const Text = styled.p<TextProps>`
  ${({ fontSize, color, $fontweight }) => css`
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${$fontweight};
  `}
`

export { Container, Text }
