import * as S from './styles'
import coffee from '../../assets/Imagem.svg'

export const BannerSection = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
          <S.Image src={coffee} />
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
