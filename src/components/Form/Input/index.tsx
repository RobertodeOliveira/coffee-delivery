/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <S.Input {...props} ref={ref} />
})
