import styled, { css } from 'styled-components'
import { ChipVariants } from '.'
import { defaultTheme } from '../../styles/themes/default'

export type Colors = keyof typeof defaultTheme.colors.base
export type FontSizes = keyof typeof defaultTheme.fontSizes

interface ContaineProps {
  $padding: string
  $borderRadius?: string
  weigth?: number
  fontSize: FontSizes
  color?: Colors
  $variant: ChipVariants
}

const Container = styled.div<ContaineProps>`
  ${({
    theme,
    color,
    $variant,
    $borderRadius,
    $padding,
    fontSize,
    weigth,
  }) => css`
    display: flex;
    background: ${theme.colors.brand[$variant]};
    color: ${theme.colors.base[color]};
    border-radius: ${$borderRadius};
    padding: ${$padding};
    font-size: ${theme.fontSizes[fontSize]};
    font-weight: ${weigth};

    width: fit-content;
  `}
`

export { Container }
