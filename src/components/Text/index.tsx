import { ReactNode } from 'react'
import * as S from './styles'

interface TextProps {
  children?: ReactNode
  $fontSize?: string
  $color?: string
  fontWeigth?: number
}

export const Text = ({
  children,
  $color,
  $fontSize,
  fontWeigth,
}: TextProps) => {
  return (
    <>
      <S.Text color={$color} fontSize={$fontSize} $fontWeigth={fontWeigth}>
        {children}
      </S.Text>
    </>
  )
}
