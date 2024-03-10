import Delivery from '../../assets/Delivery.svg'
import * as S from './styles'
import { CardInfoBuy } from '../../components/CardInfoBuy'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../../components/Form'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export const SucessPage = () => {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <S.Container>
      <S.WrapperText>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <S.Text>Agora é só aguardar que logo o café chegará até você</S.Text>
      </S.WrapperText>
      <S.SectionSucess>
        <CardInfoBuy state={state} />
        <img src={Delivery} alt="" />
      </S.SectionSucess>
    </S.Container>
  )
}
