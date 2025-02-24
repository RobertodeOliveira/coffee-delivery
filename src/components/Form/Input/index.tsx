/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'
import { Text } from '../../Text'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  rigthText?: string
  // hasError: boolean
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rigthText, ...props }, ref) => {
    return (
      <S.InputWrapper className={className}>
        <S.InputStyleContainer $hasError={!!error}>
          <S.Input {...props} ref={ref} />
          {rigthText && <S.RightText>{rigthText}</S.RightText>}
        </S.InputStyleContainer>
        {error && <Text>{error}</Text>}
      </S.InputWrapper>
    )
  },
)
