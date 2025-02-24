import { useContext } from 'react'
import { defaultTheme } from '../../../../../../styles/themes/default'
import { Text } from '../../../../../Text'
import * as S from './styles'
import { CartContext } from '../../../../../../contexts'
import { formatMoney } from '../../../../../../utils/formatMoney'

export const SectionTotalPrice = () => {
  const deliveryPrice = 3.5

  const { valueTotalInCart, itemsQuantity } = useContext(CartContext)
  const totalCart = deliveryPrice + valueTotalInCart

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Text>Total de itens</Text>
          <Text>{itemsQuantity}</Text>
        </S.Wrapper>
        <S.Wrapper>
          <Text>Entrega</Text>
          <Text>3,50</Text>
        </S.Wrapper>
        <S.Wrapper>
          <Text fontweight={700} $fontSize={defaultTheme.fontSizes.lg}>
            Total
          </Text>
          <Text fontweight={700} $fontSize={defaultTheme.fontSizes.lg}>
            R$ {formatMoney(totalCart)}
          </Text>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
