import { Outlet } from 'react-router-dom'
import * as S from './styles'
import { Header } from '../components/Header'

export const Pages = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Header />
        </S.Wrapper>
        <S.Content>
          <Outlet />
        </S.Content>
      </S.Container>
    </>
  )
}
