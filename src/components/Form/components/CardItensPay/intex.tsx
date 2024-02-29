import { SelectedCoffee } from './components/CoffeeSelect'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts'
import { SectionTotalPrice } from './components/SectionTotalPrice'

export const CardItensPay = () => {
  const navigate = useNavigate()
  const { cartItem } = useContext(CartContext)
  const redirect = (path: string) => {
    navigate(`${path}`)
  }

  return (
    <>
      <S.Container>
        <S.Title>Cafés selecionados</S.Title>
        <S.Wrapper>
          <S.Content>
            {cartItem.map((item) => {
              return <SelectedCoffee key={item.id} coffee={item} />
            })}
          </S.Content>
          <SectionTotalPrice />
          <S.Button onClick={() => redirect('/sucess')} type="submit">
            Confirmar pedido
          </S.Button>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
