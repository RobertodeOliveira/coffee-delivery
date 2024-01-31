import { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string
}

export const Input = ({ width, ...props }: InputProps) => {
  return (
    <>
      <S.Container>
        <S.Input $width={width} {...props} />
      </S.Container>
    </>
  )
}
