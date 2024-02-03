import { MapPinLine } from 'phosphor-react'
import { Text } from '../Text'
import * as S from './styles'
import { Input } from './Input'

export const RegisterForm = () => {
  return (
    <>
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
        <S.ContentForm>
          <Input placeholder="CEP" width="35%" />
          {/* <div style={{ display: 'flex' }}> */}
          <Input placeholder="Rua" width="100%" />
          {/* </div> */}

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Input placeholder="Número" width="35%" />
            <Input placeholder="Complemento" width="65%" />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Input placeholder="Bairro" width="36%" />
            <Input placeholder="Cidade" width="45% " />
            <Input placeholder="UF" width="20%" />
          </div>
        </S.ContentForm>
      </S.Container>
    </>
  )
}
