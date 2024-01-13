import * as S from './styles'
import coffee from '../../assets/Imagem.svg'
import { Button } from '../Button'

export const BannerSection = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
          <S.Text>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.Text>
          <S.Instrutions>
            <Button>fd</Button>
            <S.Text>Compra simples e segura</S.Text>
            <S.Text>Entrega rápida e rastreada</S.Text>
          </S.Instrutions>
        </S.Content>
        <S.Image src={coffee} />
      </S.Wrapper>
    </S.Container>
  )
}
