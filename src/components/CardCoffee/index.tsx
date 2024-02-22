import * as S from './styles'
import '../../assets/Coffee.svg'
import { Chip } from '../Chip'
import { cardsCoffeeList } from '../../mocks/cardCoffee'
import { Count } from '../Count'
import { Button } from '../Button'
import { ShoppingCart } from 'phosphor-react'
import { Text } from '../Text'

export const CardCoffee = () => {
  return (
    <S.Container>
      {cardsCoffeeList.map(({ image, textChip, text, title, value }, index) => {
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
              <Count />
              <Button background="#4B2995">
                <ShoppingCart size={22} color="white" weight="fill" />
              </Button>
            </S.WrapperBuy>
          </S.Wrapper>
        )
      })}
    </S.Container>
  )
}
