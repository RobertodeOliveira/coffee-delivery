import { CardItensPay } from '../../components/CardItensPay/intex'
import { RegisterForm } from '../../components/Form'
import { PayCard } from '../../components/PayCard'
import * as S from './styles'

export const Checkout = () => {
  return (
    <>
      <S.Container>
        {/* <S.Title>Formulário de cadastro</S.Title> */}
        <S.Wrapper>
          <RegisterForm />
          <PayCard />
        </S.Wrapper>
        <CardItensPay />
      </S.Container>
    </>
  )
}
