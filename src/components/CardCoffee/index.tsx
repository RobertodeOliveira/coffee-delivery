import * as S from './styles'
import '../../assets/Coffee.svg'
import { Chip } from '../Chip'
import { Count } from '../Count'
import { ShoppingCart } from 'phosphor-react'
import { Text } from '../Text'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts'
import { formatMoney } from './../../utils/formatMoney'
import { Coffee } from '../../mocks/cardCoffee'

type CardCoffeeProps = {
  coffee: Coffee
}

export const CardCoffee = ({ coffee }: CardCoffeeProps) => {
  const { addCoffeeToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleLess = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    const coffeeAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeAdd)
  }

  return (
    <S.Wrapper>
      <S.Image src={coffee.image} />
      <S.WrapperChip>
        {coffee.textChip.map((item, index) => {
          return (
            <Chip
              borderRadius="100px"
              variant="yellowLight"
              fontSize="xxs"
              color="yellowDark"
              weight={700}
              key={index}
            >
              {item}
            </Chip>
          )
        })}
      </S.WrapperChip>
      <S.Title>{coffee.title}</S.Title>
      <S.Text>{coffee.text}</S.Text>
      <S.WrapperBuy>
        <S.WrapperPrice>
          <Text $fontSize="11px">R$</Text>
          <S.Value>{formatMoney(coffee.value)}</S.Value>
        </S.WrapperPrice>
        <Count
          quantity={quantity}
          handlePlus={handlePlus}
          handleLess={handleLess}
        />
        <S.ButtonCart onClick={handleAddToCart}>
          <ShoppingCart size={22} color="white" weight="fill" />
        </S.ButtonCart>
      </S.WrapperBuy>
    </S.Wrapper>
  )
}
