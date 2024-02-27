import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'

type CountProps = {
  handlePlus: () => void
  handleLess: () => void
  count: number
}

export const Count = ({ handlePlus, handleLess, count }: CountProps) => {
  return (
    <>
      <S.ContainerButton>
        <S.LessButton onClick={handleLess}>
          <Minus size={12} color="#8047F8" weight="bold" />
        </S.LessButton>
        <S.CountNumber>{count}</S.CountNumber>
        <S.PlusButton onClick={handlePlus}>
          <Plus size={12} color="#8047F8" weight="bold" />
        </S.PlusButton>
      </S.ContainerButton>
    </>
  )
}
