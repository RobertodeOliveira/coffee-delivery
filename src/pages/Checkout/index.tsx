import { RegisterForm } from '../../components/Form'
import { PayCard } from '../../components/PayCard'
import * as S from './styles'

export const Checkout = () => {
  return (
    <>
      <S.Title>Formulário de cadastro</S.Title>
      <S.Container>
        <RegisterForm />
        <PayCard />
      </S.Container>
    </>
  )
}
