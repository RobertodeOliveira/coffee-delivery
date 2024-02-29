import { defaultTheme } from '../../../../../../styles/themes/default'
import { Text } from '../../../../../Text'
import * as S from './styles'

type SectionTotalPrice = {
  totalValueItems?: string
  deliveryValue?: string
  totalValue?: string
}

export const SectionTotalPrice = ({
  totalValueItems = '0',
  deliveryValue = '0',
  totalValue = '0',
}: SectionTotalPrice) => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Text>Total de itens</Text>
          <Text>{totalValueItems}</Text>
        </S.Wrapper>
        <S.Wrapper>
          <Text>Entrega</Text>
          <Text>{deliveryValue}</Text>
        </S.Wrapper>
        <S.Wrapper>
          <Text fontWeigth={700} $fontSize={defaultTheme.fontSizes.lg}>
            Total
          </Text>
          <Text fontWeigth={700} $fontSize={defaultTheme.fontSizes.lg}>
            {totalValue}
          </Text>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
