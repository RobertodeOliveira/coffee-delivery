import styled, { css } from 'styled-components'
import { ChipVariants } from '.'
import { defaultTheme } from '../../styles/themes/default'

export type Colors = keyof typeof defaultTheme.colors.base
export type FontSizes = keyof typeof defaultTheme.fontSizes

interface ContainerProps {
  $padding: string
  $borderRadius?: string
  weight?: number
  fontSize: FontSizes
  color: Colors
  $variant: ChipVariants
}

const Container = styled.div<ContainerProps>`
  ${({
    theme,
    color,
    $variant,
    $borderRadius,
    $padding,
    fontSize,
    weight,
  }) => css`
    display: flex;
    background: ${theme.colors.brand[$variant]};
    color: ${theme.colors.base[color]};
    border-radius: ${$borderRadius};
    padding: ${$padding};
    font-size: ${theme.fontSizes[fontSize]};
    font-weight: ${weight};

    width: fit-content;
  `}
`

export { Container }
