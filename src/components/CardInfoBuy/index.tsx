import { MapPinLine } from 'phosphor-react'
import { Highlight } from '../Highlight'
import { Text } from '../Text'
import * as S from './styles'

export const CardInfoBuy = () => {
  return (
    <S.Container>
      <Highlight
        backgroundIcon="#8047F8"
        title={
          <Text>
            Entrega em <strong>Rua João Daniel Martinelli, 102 </strong> <br />
            Farrapos - Porto Alegre, RS
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
            Pagamento na entrega <br /> <strong> Cartão de Crédito</strong>
          </Text>
        }
        icon={<MapPinLine size={14} color="white" weight="fill" />}
      />
    </S.Container>
  )
}
