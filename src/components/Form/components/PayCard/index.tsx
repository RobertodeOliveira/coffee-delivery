import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import * as S from './styles'
import { SelectTypePay } from '../../../SelectTypePay'
import { Headertitle } from '../HeaderTitle'

export const PayCard = () => {
  return (
    <>
      <S.Container>
        <Headertitle
          icon={<CurrencyDollar size={22} weight="fill" color="#8047F8" />}
          title="Pagamento"
          subTitle=" O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
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
