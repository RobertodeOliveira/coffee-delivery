import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import * as S from './styles'
import { SelectTypePay } from '../SelectTypePay'

export const PayCard = () => {
  return (
    <>
      <S.Container>
        <S.Title>Formulário de cadastro</S.Title>
        <S.Wrapper>
          <CurrencyDollar size={22} weight="fill" color="#8047F8" />
          <div>
            <S.Title>Pagamento</S.Title>
            <S.Text>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </S.Text>
          </div>
        </S.Wrapper>

        <S.WrapperContent>
          <SelectTypePay
            icon={<CreditCard size={14} color="#8047F8" />}
            text="CARTÃO DE CRÉDITO"
          />
          <SelectTypePay
            icon={<Bank size={14} color="#8047F8" />}
            text="CARTÃO DE DÉBITO"
          />
          <SelectTypePay
            icon={<Money size={14} color="#8047F8" />}
            text="DINHEIRO"
          />
        </S.WrapperContent>
      </S.Container>
    </>
  )
}
