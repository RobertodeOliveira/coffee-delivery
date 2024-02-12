import { MapPinLine } from 'phosphor-react'
import { Text } from '../Text'
import * as S from './styles'
import { Input } from './Input'
import { useForm } from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRegisterStreet = (data?: any) => {
    console.log(data)
  }
  return (
    <>
      <S.Title>Complete seu pedido</S.Title>
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
        <form action="" onSubmit={handleSubmit(handleRegisterStreet)}>
          {/* <S.Form onSubmit={handleSubmit(handleRegisterStreet)}> */}
          <Input placeholder="CEP" width="35%" {...register('cep')} />
          <Input placeholder="Rua" width="100%" {...register('rua')} />

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Input
              placeholder="Número"
              type="number"
              width="35%"
              {...register('numero')}
            />
            <Input
              placeholder="Complemento"
              width="65%"
              {...register('complemento')}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Input placeholder="Bairro" width="36%" {...register('bairro')} />
            <Input placeholder="Cidade" width="45% " {...register('cidade')} />
            <Input placeholder="UF" width="20%" {...register('uf')} />
          </div>
          <button type="submit">Teste form</button>
          {/* </S.Form> */}
        </form>
      </S.Container>
    </>
  )
}
