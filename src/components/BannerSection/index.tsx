import * as S from './styles'
import coffee from '../../assets/Imagem.svg'
import { Chip } from '../Chip'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

type ContentCardList = {
  text: string
  icon: React.ReactNode
}

const contentCard: ContentCardList[] = [
  {
    text: 'Compra simples e segura',
    icon: (
      <Chip variant="secondary" borderRadius="1000px">
        <ShoppingCart size={22} weight="fill" color="white" />
      </Chip>
    ),
  },
  {
    text: 'Entrega rápida e rastreada',
    icon: (
      <Chip variant="secondary_ligth" borderRadius="1000px">
        <Timer size={22} weight="fill" color="white" />
      </Chip>
    ),
  },
  {
    text: 'Embalagem mantém o cagé intacto',
    icon: (
      <Chip variant="terciary" borderRadius="1000px">
        <Package size={22} weight="fill" color="white" />
      </Chip>
    ),
  },
  {
    text: 'O café chega fresquinho até você',
    icon: (
      <Chip variant="primary" borderRadius="1000px">
        <Coffee size={22} weight="fill" color="white" />
      </Chip>
    ),
  },
]

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
              {contentCard.map((item) => {
                return (
                  <S.ContentInstructions key={item.text}>
                    {item.icon}
                    <S.Text>{item.text}</S.Text>
                  </S.ContentInstructions>
                )
              })}
            </S.WrapperInstrutions>
          </S.Instrutions>
        </S.Content>
        <S.Image src={coffee} />
      </S.Wrapper>
    </S.Container>
  )
}
