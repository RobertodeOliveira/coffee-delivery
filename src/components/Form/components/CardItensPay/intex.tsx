import { SelectedCoffee } from './components/CoffeeSelect'
import * as S from './styles'
import Leite from '../../../../assets/com-leite.svg'

export const CardItensPay = () => {
  return (
    <>
      <S.Container>
        <S.Title>Cafés selecionados</S.Title>
        <S.Wrapper>
          <SelectedCoffee srcImg={Leite} title="Expresso" price="9.90" />
          <S.Content>
            <S.Button type="submit">Confirmar pedido</S.Button>
          </S.Content>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
