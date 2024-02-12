// import { handleRegisterStreet } from '../Form'
import * as S from './styles'

type CardItensPay = {
  onClick: () => void
}

export const CardItensPay = ({ onClick }: CardItensPay) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>Cafés selecionados</S.Title>
        <S.Container>
          Teste card oisheishvuishndivnsiugisvuhnsiuhuishvnisuh
          <S.Content>
            <S.Button onClick={onClick}>Confirmar pedido</S.Button>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
