import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  background?: string
  size?: string
  // color?: string
}

export const Button = ({
  children,
  background,
  size,
  ...props
}: ButtonProps) => {
  return (
    <S.ContainerButton background={background} fontSize={size} {...props}>
      {children}
    </S.ContainerButton>
  )
}
