import { MapPinLine } from 'phosphor-react'
import { Highlight } from '../Highlight'
import { Text } from '../Text'
import * as S from './styles'
import { OrderData } from '../Form'

interface CardInfoBuy {
  state: OrderData
}

export const CardInfoBuy = ({ state }: CardInfoBuy) => {
  return (
    <S.Container>
      <Highlight
        backgroundIcon="#8047F8"
        title={
          <Text>
            Entrega em
            <strong>
              {state.rua}, {state.numero}
            </strong>
            <br />
            {state.bairro}-{state.cidade}, {state.uf}
          </Text>
        }
        icon={<MapPinLine size={14} color="white" weight="fill" />}
      />
      <Highlight
        backgroundIcon="#DBAC2C"
        title={
          <Text>
            Previsão de entrega <br />
            <strong>20 min - 30 min</strong>
          </Text>
        }
        icon={<MapPinLine size={14} color="white" weight="fill" />}
      />
      <Highlight
        backgroundIcon="#C47F17"
        title={
          <Text>
            Pagamento na entrega <br /> <strong>{state.paymentMethod}</strong>
          </Text>
        }
        icon={<MapPinLine size={14} color="white" weight="fill" />}
      />
    </S.Container>
  )
}
