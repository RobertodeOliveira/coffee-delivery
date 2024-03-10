import { InputHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

type SelectTypePayProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode
  text: string
  id: number | string
}

// eslint-disable-next-line react/display-name
export const SelectTypePay = forwardRef<HTMLInputElement, SelectTypePayProps>(
  ({ icon, text, id, ...props }, ref) => {
    return (
      <>
        <S.Container>
          <input id={id} type="radio" {...props} ref={ref} />
          <label htmlFor={id}>
            <S.ContentContainer>
              {icon}
              <S.Text>{text}</S.Text>
            </S.ContentContainer>
          </label>
        </S.Container>
      </>
    )
  },
)
