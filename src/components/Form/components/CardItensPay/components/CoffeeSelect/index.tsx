import { Trash } from 'phosphor-react'
import { Button } from '../../../../../Button'
import { Count } from '../../../../../Count'
import { Text } from '../../../../../Text'
import * as S from './styles'
import { CartContext, CartItem } from '../../../../../../contexts'
import { formatMoney } from './../../../../../../utils/formatMoney'
import { useContext } from 'react'

type SelectedCoffeeProps = {
  coffee: CartItem
}

export const SelectedCoffee = ({ coffee }: SelectedCoffeeProps) => {
  const coffeeTotal = coffee.value * coffee.quantity
  const { changeQuantityItemCart, removeItemCart } = useContext(CartContext)

  const handleIncrease = () => {
    changeQuantityItemCart(coffee.id, 'increase')
  }

  const handleDecrease = () => {
    if (coffee.quantity > 0) changeQuantityItemCart(coffee.id, 'decrease')
  }

  return (
    <>
      <S.Container>
        <S.Img src={coffee.image} />
        <S.Wrapper>
          <Text>{coffee.title}</Text>
          <S.WrapperButton>
            <Count
              quantity={coffee.quantity}
              handleLess={handleDecrease}
              handlePlus={handleIncrease}
            />
            <Button
              background="#E6E5E5"
              size="12px"
              onClick={() => removeItemCart(coffee.id)}
            >
              <Trash size={14} color="#8047F8" /> REMOVER
            </Button>
          </S.WrapperButton>
        </S.Wrapper>
        <Text fontweight={700} $fontSize="16px">
          R${formatMoney(coffeeTotal)}
        </Text>
      </S.Container>
    </>
  )
}
