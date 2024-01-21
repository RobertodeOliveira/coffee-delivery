import * as S from './styles'
import '../../assets/Coffee.svg'
import { Chip } from '../Chip'
import { cardsCoffeeList } from '../../mocks/cardCoffee'

export const CardCoffee = () => {
  return (
    <S.Container>
      {cardsCoffeeList.map(({ image, textChip, text, title, value }) => {
        return (
          <S.Wrapper key={text}>
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
            <S.Value>R$ {value}</S.Value>
          </S.Wrapper>
        )
      })}
    </S.Container>
  )
}
