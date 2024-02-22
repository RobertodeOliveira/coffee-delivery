import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'
import { useState } from 'react'

export const Count = () => {
  const [count, setCount] = useState(0)

  const handlePlusCoffee = () => {
    setCount(count + 1)
  }

  const handleLessCoffee = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <S.ContainerButton>
        <S.LessButton onClick={handleLessCoffee}>
          <Minus size={12} color="#8047F8" weight="bold" />
        </S.LessButton>
        <S.CountNumber>{count}</S.CountNumber>
        <S.PlusButton onClick={handlePlusCoffee}>
          <Plus size={12} color="#8047F8" weight="bold" />
        </S.PlusButton>
      </S.ContainerButton>
    </>
  )
}
