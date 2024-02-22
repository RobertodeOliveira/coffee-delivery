import * as S from './styles'
import Logo from '../../assets/Logo.svg'
import { Button } from '../Button'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  const redirect = (router: string) => {
    navigate(`${router}`)
  }

  return (
    <S.Container>
      <S.ButtonLogo onClick={() => redirect('/')}>
        <img src={Logo} alt="" />
      </S.ButtonLogo>
      <S.Content>
        <Button background="#EBE5F9" size="14px">
          <MapPin size={22} color="#8047F8" weight="fill" />
          Rio de Janeiro, RJ
        </Button>
        <Button background="#F1E9C9" onClick={() => redirect('/checkout')}>
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </Button>
      </S.Content>
    </S.Container>
  )
}
