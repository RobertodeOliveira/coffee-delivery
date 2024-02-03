import { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string
}

export const Input = ({ width, ...props }: InputProps) => {
  return (
    <>
      <S.Input $width={width} {...props} />
    </>
  )
}
