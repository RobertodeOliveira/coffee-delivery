import { Trash } from 'phosphor-react'
import { Button } from '../../../../../Button'
import { Count } from '../../../../../Count'
import { Text } from '../../../../../Text'
import * as S from './styles'

type SelectedCoffeeProps = {
  srcImg?: string
  title?: string
  price?: string
}

export const SelectedCoffee = ({
  srcImg,
  title,
  price,
}: SelectedCoffeeProps) => {
  return (
    <>
      <S.Container>
        <S.Img src={srcImg} />
        <S.Wrapper>
          <Text>{title}</Text>
          <S.WrapperButton>
            <Count />
            <Button background="#E6E5E5" size="12px">
              <Trash size={14} color="#8047F8" /> REMOVER
            </Button>
          </S.WrapperButton>
        </S.Wrapper>
        <Text fontWeigth={700} $fontSize="16px">
          {price}
        </Text>
      </S.Container>
    </>
  )
}
