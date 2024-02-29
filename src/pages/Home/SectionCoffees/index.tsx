import { CardCoffee } from '../../../components/CardCoffee'
import { cardsCoffeeList } from '../../../mocks/cardCoffee'
import * as S from './styles'

export const SectionCoffees = () => {
  return (
    <S.ContainerSection>
      {cardsCoffeeList.map((coffee) => {
        return <CardCoffee key={coffee.id} coffee={coffee} />
      })}
    </S.ContainerSection>
  )
}
