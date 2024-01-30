import { MapPinLine } from 'phosphor-react'
import { Text } from '../Text'
import * as S from './styles'

export const RegisterForm = () => {
  return (
    <>
      <S.Title>Formulário de cadastro</S.Title>
      <S.Container>
        <S.InfoForm>
          <MapPinLine size={22} weight="fill" color="#C47F17" />
          <div>
            <Text $fontSize="16px">Endereço de Entrega</Text>
            <Text $fontSize="14px">
              Informe o endereço onde deseja receber seu pedido
            </Text>
          </div>
        </S.InfoForm>
      </S.Container>
    </>
  )
}
