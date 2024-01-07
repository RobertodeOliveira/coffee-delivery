import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: string
  color?: string
  Size?: string
}

export const Button = ({ children, color, Size, ...props }: ButtonProps) => {
  return (
    <S.ContainerButton color={color} fontSize={Size} {...props}>
      {children}
    </S.ContainerButton>
  )
} 
