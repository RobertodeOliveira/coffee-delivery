import * as S from './styles'

export type ChipVariants =
  | 'primary'
  | 'secondary'
  | 'secondary_dark'
  | 'secondary_ligth'
  | 'terciary'
  | 'quaternary'

interface ChipProps {
  color?: string
  borderRadius?: string
  children: React.ReactNode
  variant: ChipVariants
}

export const Chip = ({
  children,
  variant = 'primary',
  borderRadius = '4px',
}: ChipProps) => {
  return (
    <>
      <S.Container borderRadius={borderRadius} variant={variant}>
        {children}
      </S.Container>
    </>
  )
}
