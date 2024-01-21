import * as S from './styles'
import { defaultTheme } from '../../styles/themes/default'

export type ChipVariants = keyof typeof defaultTheme.colors.brand

interface ChipProps {
  padding?: string
  borderRadius?: string
  weigth?: number
  variant?: ChipVariants
  children: React.ReactNode
  color?: S.Colors
  fontSize?: S.FontSizes
}

export const Chip = ({
  variant = 'purple',
  padding = '0.5rem',
  borderRadius = '4px',
  fontSize = 'xs',
  color = 'white',
  children,
  weigth,
}: ChipProps) => {
  return (
    <>
      <S.Container
        $borderRadius={borderRadius}
        $variant={variant}
        $padding={padding}
        color={color}
        fontSize={fontSize}
        weigth={weigth}
      >
        {children}
      </S.Container>
    </>
  )
}
