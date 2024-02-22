import { MapPinLine } from 'phosphor-react'
import * as S from './styles'
import { Headertitle } from './components/HeaderTitle'
import { AdressForm } from './components/AdressForm'
import { CardItensPay } from './components/CardItensPay/intex'
import { PayCard } from './components/PayCard'
import { useForm } from 'react-hook-form'
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const RegisterForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRegisterStreet = (data?: any) => {
    console.log(data)
  }

  const { handleSubmit } = useForm()

  return (
    <>
      <S.ContainerForm onSubmit={handleSubmit(handleRegisterStreet)}>
        <S.Wrapper>
          <S.Title>Complete seu pedido</S.Title>
          <S.BaseContainer>
            <Headertitle
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
    </>
  )
}
