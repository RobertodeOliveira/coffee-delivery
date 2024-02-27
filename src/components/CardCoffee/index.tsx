import * as S from './styles'
import '../../assets/Coffee.svg'
import { Chip } from '../Chip'
import { CardCoffeeList, cardsCoffeeList } from '../../mocks/cardCoffee'
import { Count } from '../Count'
import { Button } from '../Button'
import { ShoppingCart } from 'phosphor-react'
import { Text } from '../Text'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts'

type CardCoffee = {
  coffee: CardCoffeeList
}

export const CardCoffee = ({ coffee }: CardCoffee) => {
  const { addCoffeeToCart } = useContext(CartContext)
  const [count, setCount] = useState(0)

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleLess = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleAddToCart = () => {
    const coffeeAdd = {
      ...coffee,
      quantity: 1,
    }
    addCoffeeToCart(coffeeAdd)
  }

  return (
    <S.Container>
      {cardsCoffeeList.map(
        ({ image, textChip, text, title, value }: CardCoffeeList, index) => {
          return (
            <S.Wrapper key={index}>
              {image}
              <S.WrapperChip>
                {textChip.map((item, index) => {
                  return (
                    <Chip
                      borderRadius="100px"
                      variant="yellowLight"
                      fontSize="xxs"
                      color="yellowDark"
                      weigth={700}
                      key={index}
                    >
                      {item}
                    </Chip>
                  )
                })}
              </S.WrapperChip>
              <S.Title>{title}</S.Title>
              <S.Text>{text}</S.Text>
              <S.WrapperBuy>
                <S.WrapperPrice>
                  <Text $fontSize="11px">R$</Text>
                  <S.Value>{value}</S.Value>
                </S.WrapperPrice>
                <Count
                  count={count}
                  handlePlus={handlePlus}
                  handleLess={handleLess}
                />
                <Button background="#4B2995" onClick={handleAddToCart}>
                  <ShoppingCart size={22} color="white" weight="fill" />
                </Button>
              </S.WrapperBuy>
            </S.Wrapper>
          )
        },
      )}
    </S.Container>
  )
}
