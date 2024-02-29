import { Trash } from 'phosphor-react'
import { Button } from '../../../../../Button'
import { Count } from '../../../../../Count'
import { Text } from '../../../../../Text'
import * as S from './styles'
import { CartItem } from '../../../../../../contexts'
import { formatMoney } from './../../../../../../utils/formatMoney'

type SelectedCoffeeProps = {
  coffee: CartItem
}

export const SelectedCoffee = ({ coffee }: SelectedCoffeeProps) => {
  return (
    <>
      <S.Container>
        <S.Img src={coffee.image} />
        <S.Wrapper>
          <Text>{coffee.title}</Text>
          <S.WrapperButton>
            <Count quantity={coffee.quantity} />
            <Button background="#E6E5E5" size="12px">
              <Trash size={14} color="#8047F8" /> REMOVER
            </Button>
          </S.WrapperButton>
        </S.Wrapper>
        <Text fontWeigth={700} $fontSize="16px">
          R${formatMoney(coffee.value)}
        </Text>
      </S.Container>
    </>
  )
}
