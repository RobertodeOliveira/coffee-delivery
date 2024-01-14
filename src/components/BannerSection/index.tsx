import * as S from './styles'
import coffee from '../../assets/Imagem.svg'
import { Chip } from '../Chip'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export const BannerSection = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
          <S.Text fontSize="20px">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.Text>
          <S.Instrutions>
            <S.WrapperInstrutions>
              <S.ContentInstructions>
                <Chip variant="secondary" borderRadius="1000px">
                  <ShoppingCart size={22} weight="fill" color="white" />
                </Chip>
                <S.Text>Compra simples e segura</S.Text>
              </S.ContentInstructions>
              <S.ContentInstructions>
                <Chip variant="secondary_ligth" borderRadius="1000px">
                  <Timer size={22} weight="fill" color="white" />
                </Chip>
                <S.Text>Entrega rápida e rastreada</S.Text>
              </S.ContentInstructions>
            </S.WrapperInstrutions>

            <S.WrapperInstrutions>
              <S.ContentInstructions>
                <Chip variant="terciary" borderRadius="1000px">
                  <Package size={22} weight="fill" color="white" />
                </Chip>
                <S.Text>Embalagem mantém o café intacto</S.Text>
              </S.ContentInstructions>
              <S.ContentInstructions>
                <Chip variant="primary" borderRadius="1000px">
                  <Coffee size={22} weight="fill" color="white" />
                </Chip>
                <S.Text>O café chega fresquinho até você</S.Text>
              </S.ContentInstructions>
            </S.WrapperInstrutions>
          </S.Instrutions>
        </S.Content>
        <S.Image src={coffee} />
      </S.Wrapper>
    </S.Container>
  )
}
