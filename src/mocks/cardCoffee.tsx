import coffee from '../assets/Coffee.svg'
import american from '../assets/americano.svg'
import creamy from '../assets/cremoso.svg'
import milk from '../assets/com-leite.svg'
import ice from '../assets/Ice.svg'
import latte from '../assets/Latte.svg'
import capuccino from '../assets/Capuccino.svg'
import macchiato from '../assets/Macchiato.svg'
import mocaccino from '../assets/Mocaccino.svg'
import hotChocolate from '../assets/hotChocolate.svg'
import cubano from '../assets/cubano.svg'
import havaiano from '../assets/Havaiano.svg'
import arabe from '../assets/Arabe.svg'
import irlandes from '../assets/Irlandes.svg'

import { ReactNode } from 'react'
import { Image } from '../components/CardCoffee/styles'

export type CardCoffeeList = {
  image: ReactNode
  textChip: string[]
  title: string
  text: string
  value: string
}

export const cardsCoffeeList: CardCoffeeList[] = [
  {
    image: <Image src={coffee} alt="" />,
    textChip: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    text: 'O tradicional café feito com água quente e grãos moídos',
    value: '9,90',
  },
  {
    image: <Image src={american} alt="" />,
    textChip: ['TRADICIONAL'],
    title: 'Expresso Americano',
    text: 'Expresso diluído, menos intenso que o tradicional',
    value: '9,90',
  },
  {
    image: <Image src={creamy} alt="" />,
    textChip: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    text: 'Café expresso tradicional com espuma cremosa',
    value: '9,90',
  },
  {
    image: <Image src={ice} alt="" />,
    textChip: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Gelado',
    text: 'Bebida preparada com café expresso e cubos de gelo',
    value: '9,90',
  },
  {
    image: <Image src={milk} alt="" />,
    textChip: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    text: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: '9,90',
  },
  {
    image: <Image src={latte} alt="" />,
    textChip: ['TRADICIONAL', 'COM LEITE'],
    title: 'Latte',
    text: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: '9,90',
  },
  {
    image: <Image src={capuccino} alt="" />,
    textChip: ['TRADICIONAL', 'COM LEITE'],
    title: 'Capuccino',
    text: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: '9,90',
  },
  {
    image: <Image src={macchiato} alt="" />,
    textChip: ['TRADICIONAL', 'COM LEITE'],
    title: 'Macchiato',
    text: 'Café expresso misturado com um pouco de leite quente e espuma',
    value: '9,90',
  },
  {
    image: <Image src={mocaccino} alt="" />,
    textChip: ['TRADICIONAL', 'COM LEITE'],
    title: 'Mocaccino',
    text: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: '9,90',
  },
  {
    image: <Image src={hotChocolate} alt="" />,
    textChip: ['ESPECIAL', 'COM LEITE'],
    title: 'Chocolate Quente',
    text: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: '9,90',
  },
  {
    image: <Image src={cubano} alt="" />,
    textChip: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    title: 'Cubano',
    text: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: '9,90',
  },
  {
    image: <Image src={cubano} alt="" />,
    textChip: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    title: 'Cubano',
    text: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: '9,90',
  },
  {
    image: <Image src={havaiano} alt="" />,
    textChip: ['ESPECIAL'],
    title: 'Havaiano',
    text: 'Bebida adocicada preparada com café e leite de coco',
    value: '9,90',
  },
  {
    image: <Image src={arabe} alt="" />,
    textChip: ['ESPECIAL'],
    title: 'Árabe',
    text: 'Bebida preparada com grãos de café árabe e especiarias',
    value: '9,90',
  },
  {
    image: <Image src={irlandes} alt="" />,
    textChip: ['ESPECIAL', 'ALCOÒLICO'],
    title: 'Irlandês',
    text: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: '9,90',
  },
]
