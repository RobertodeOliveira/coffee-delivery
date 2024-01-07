import { Outlet } from "react-router-dom"
import * as S from  './styles'
import { Header } from "../components/Header"

export const Pages = () => {
  return (
    <>
      <S.Container>
        <Header />
      </S.Container>
      <div>
        <Outlet />
      </div>
    </>
  )
}