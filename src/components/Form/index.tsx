import { MapPinLine } from 'phosphor-react'
import { Text } from '../Text'
import * as S from './styles'
import { Input } from './Input'

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
        <S.ContentForm>
          <div style={{ width: '200px' }}>
            <Input placeholder="CEP" />
          </div>

          <div>
            <Input placeholder="Rua" width="536px" />
          </div>

          <div style={{ display: 'flex', gap: '12px', width: '560px' }}>
            <Input placeholder="Número" width="176px" />
            <Input placeholder="Complemento" width="348px" />
          </div>
          <div style={{ display: 'flex', gap: '12px', width: '560px' }}>
            <Input placeholder="Bairro" width="176px" />
            <Input placeholder="Cidade" width="276px" />
            <Input placeholder="UF" width="60px" />
          </div>
        </S.ContentForm>
      </S.Container>
    </>
  )
}
