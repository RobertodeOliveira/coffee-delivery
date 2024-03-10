import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import * as S from './styles'
import { SelectTypePay } from './components/SelectTypePay'
import { HeaderTitle } from '../HeaderTitle'
import { useFormContext } from 'react-hook-form'
import { Text } from '../../../Text'

const ListPayCard = {
  credit: {
    label: 'CARTÃO DE CRÉDITO',
    icon: <CreditCard size={14} color="#8047F8" />,
  },
  debit: {
    label: 'DÉBITO',
    icon: <Bank size={14} color="#8047F8" />,
  },
  money: {
    label: 'DINHEIRO',
    icon: <Money size={14} color="#8047F8" />,
  },
}

export const PayCard = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const SelectTypePayError = errors?.paymentMethod?.message as unknown as string

  return (
    <>
      <S.Container>
        <HeaderTitle
          icon={<CurrencyDollar size={22} weight="fill" color="#8047F8" />}
          title="Pagamento"
          subTitle=" O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <S.WrapperContent>
          {Object.entries(ListPayCard).map(([key, { label, icon }]) => {
            return (
              <SelectTypePay
                key={label}
                icon={icon}
                text={label}
                id={key}
                value={key}
                {...register('paymentMethod')}
              />
            )
          })}
        </S.WrapperContent>
        {SelectTypePayError && <Text>{SelectTypePayError}</Text>}
      </S.Container>
    </>
  )
}
