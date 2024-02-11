import * as S from './styles'
import { CardInfoBuy } from '../../components/CardInfoBuy'

export const SucessPage = () => {
  return (
    <S.Container>
      <S.WrapperText>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <S.Text>Agora é só aguardar que logo o café chegará até você</S.Text>
      </S.WrapperText>
      <CardInfoBuy />
    </S.Container>
  )
}
