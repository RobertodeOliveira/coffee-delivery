import styled, { css } from 'styled-components'
import { ChipVariants } from '.'

interface ContaineProps {
  color?: string
  borderRadius?: string
  variant: ChipVariants
}

const chipVariants = {
  primary: '#8047F8',
  secondary: '#C47F17',
  secondary_dark: '#C47F17',
  secondary_ligth: '#DBAC2C',
  terciary: '#574F4D',
  quaternary: '#8047F8',
}

const Container = styled.div<ContaineProps>`
  ${({ color, variant, borderRadius }) => css`
    display: flex;
    background: ${chipVariants[variant]};
    color: ${color};
    border-radius: ${borderRadius};
    padding: 0.5rem;
    width: fit-content;
  `}
`

export { Container }
