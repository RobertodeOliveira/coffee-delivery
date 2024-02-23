import { SelectedCoffee } from './components/CoffeeSelect'
import * as S from './styles'
import Leite from '../../../../assets/com-leite.svg'
import { useNavigate } from 'react-router-dom'

export const CardItensPay = () => {
  const navigate = useNavigate()

  const redirect = (path: string) => {
    navigate(`${path}`)
  }
  return (
    <>
      <S.Container>
        <S.Title>Cafés selecionados</S.Title>
        <S.Wrapper>
          <SelectedCoffee srcImg={Leite} title="Expresso" price="9.90" />
          <S.Content>
            <S.Button onClick={() => redirect('/sucess')} type="submit">
              Confirmar pedido
            </S.Button>
          </S.Content>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
