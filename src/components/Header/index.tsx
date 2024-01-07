import * as S from './styles'
import Logo  from '../../assets/Logo.svg'
import { Button } from '../Button'

export const Header = () => {
  return (
    <S.Container>
      <img src={Logo} alt="" />
      <S.Content>
        <Button color='purple'>Rio de Janeiro, RJ</Button>
        <Button>Rio de Janeiro, RJ</Button>
      </S.Content>
    </S.Container>
  )
}