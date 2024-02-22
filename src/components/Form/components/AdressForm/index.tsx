import { useForm } from 'react-hook-form'
import { Input } from '../../Input'
import * as S from './styles'

export const AdressForm = () => {
  const { register } = useForm()

  return (
    <>
      <S.Container>
        <Input
          className="cep"
          type="text"
          placeholder="CEP"
          {...register('cep')}
        />
        <Input className="rua" name="rua" placeholder="Rua" />
        <Input placeholder="Número" type="number" />
        <Input className="complemento" placeholder="Complemento" />
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="UF" />
      </S.Container>
    </>
  )
}
