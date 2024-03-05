import { useFormContext } from 'react-hook-form'
import { Input } from '../../Input'
import * as S from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export const AdressForm = () => {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <>
      <S.Container>
        <Input
          className="cep"
          type="text"
          placeholder="CEP"
          {...register('cep')}
          error={errors.cep?.message}
        />
        <Input
          className="rua"
          placeholder="Rua"
          {...register('rua')}
          error={errors.rua?.message}
        />
        <Input
          placeholder="Número"
          type="number"
          {...register('numero')}
          error={errors.numero?.message}
        />
        <Input
          className="complemento"
          placeholder="Complemento"
          {...register('complemento')}
          error={errors.complemento?.message}
        />
        <Input
          placeholder="Bairro"
          {...register('bairro')}
          error={errors.bairro?.message}
        />
        <Input
          placeholder="Cidade"
          {...register('cidade')}
          error={errors.cidade?.message}
        />
        <Input
          placeholder="UF"
          {...register('uf')}
          error={errors.uf?.message}
        />
      </S.Container>
    </>
  )
}
