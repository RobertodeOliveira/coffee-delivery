import { MapPinLine } from 'phosphor-react'
import * as S from './styles'
import { HeaderTitle } from './components/HeaderTitle'
import { AdressForm } from './components/AdressForm'
import { CardItensPay } from './components/CardItensPay/intex'
import { PayCard } from './components/PayCard'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts'

enum paymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe o nome da rua'),
  numero: zod.string().min(1, 'Informe o núemro da residência'),
  complemento: zod.string(),
  cidade: zod.string().min(1, 'Informe a cidade'),
  bairro: zod.string().min(1, 'Informe o bairro'),
  uf: zod.string().min(1, 'Informe o UF'),
  paymentMethod: zod.nativeEnum(paymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderData = OrderData

export const RegisterForm = () => {
  const confirmOrderForm = useForm<ConfirmOrderData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { clearCart } = useContext(CartContext)
  const { handleSubmit } = confirmOrderForm
  const navigate = useNavigate()

  const handleConfirmOrder = (data: ConfirmOrderData) => {
    navigate('/sucess', { state: data })
    clearCart()
  }

  return (
    <>
      <FormProvider {...confirmOrderForm}>
        <S.ContainerForm onSubmit={handleSubmit(handleConfirmOrder)}>
          <S.Wrapper>
            <S.Title>Complete seu pedido</S.Title>
            <S.BaseContainer>
              <HeaderTitle
                icon={<MapPinLine size={22} color="#C47F17" />}
                title="Endereço de entrega"
                subTitle="Informe o endereço onde deseja receber seu pedido"
              />
              <AdressForm />
            </S.BaseContainer>
            <PayCard />
          </S.Wrapper>

          <S.Wrapper>
            <CardItensPay />
          </S.Wrapper>
        </S.ContainerForm>
      </FormProvider>
    </>
  )
}
