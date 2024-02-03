import { CurrencyDollar } from 'phosphor-react'
import * as S from './styles'

export const PayCard = () => {
  return (
    <>
      <S.Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CurrencyDollar size={22} weight="fill" color="#8047F8" />
          <S.Title>Pagamento</S.Title>
        </div>
        <S.Text>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </S.Text>
      </S.Container>
    </>
  )
}
