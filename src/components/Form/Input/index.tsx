/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'
import { Text } from '../../Text'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <S.InputWrapper className={className}>
        <S.Input {...props} ref={ref} />
        {error && <Text>{error}</Text>}
      </S.InputWrapper>
    )
  },
)
