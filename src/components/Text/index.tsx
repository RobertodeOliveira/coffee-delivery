import { ReactNode } from 'react'
import * as S from './styles'

interface TextProps {
  children?: ReactNode
  $fontSize?: string
  $color?: string
  fontweight?: number
}

export const Text = ({
  children,
  $color,
  $fontSize,
  fontweight,
}: TextProps) => {
  return (
    <>
      <S.Text color={$color} fontSize={$fontSize} $fontweight={fontweight}>
        {children}
      </S.Text>
    </>
  )
}
