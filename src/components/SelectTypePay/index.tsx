import * as S from './styles'

type SelectTypePayProps = {
  icon: React.ReactNode
  text: string
}

export const SelectTypePay = ({ icon, text }: SelectTypePayProps) => {
  return (
    <>
      <S.Container type="button">
        {icon}
        <S.Text>{text}</S.Text>
      </S.Container>
    </>
  )
}
