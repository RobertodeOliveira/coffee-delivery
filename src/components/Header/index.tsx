import * as S from './styles'
import Logo from '../../assets/Logo.svg'
import { Button } from '../Button'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  return (
    <S.Container>
      <img src={Logo} alt="" />
      <S.Content>
        <Button
          background='#EBE5F9'
          size="14px"
        >
          <MapPin size={22}
            color='#8047F8'
            weight="fill"
          />
          Rio de Janeiro, RJ
        </Button>
        <Button background='#F1E9C9'>
          <ShoppingCart
            size={22}
            color='#C47F17'
            weight='fill'
          />
        </Button>
      </S.Content>
    </S.Container>
  )
}