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
import cubano from '../assets/Cubano.svg'
import havaiano from '../assets/Havaiano.svg'
import arabe from '../assets/Arabe.svg'
import irlandes from '../assets/Irlandes.svg'

export type Coffee = {
  id: number
  image: string
  textChip: string[]
  title: string
  text: string
  value: number
}

export const cardsCoffeeList: Coffee[] = [
  {
    id: 1,
    image: coffee,
    textChip: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    text: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
  },
  {
    id: 2,
    image: american,
    textChip: ['TRADICIONAL'],
    title: 'Expresso Americano',
    text: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
  },
  {
    id: 3,
    image: creamy,
    textChip: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    text: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
  },
  {
    id: 4,
    image: ice,
    textChip: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Gelado',
    text: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
  },
  {
    id: 5,
    image: milk,
    textChip: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    text: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
  },
  {
    id: 6,
    image: latte,
    textChip: ['TRADICIONAL', 'COM LEITE'],
    title: 'Latte',
    text: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
  },
  {
    id: 7,
    image: capuccino,
    textChip: ['TRADICIONAL', 'COM LEITE'],
    title: 'Capuccino',
    text: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
  },
  {
    id: 8,
    image: macchiato,
    textChip: ['TRADICIONAL', 'COM LEITE'],
    title: 'Macchiato',
    text: 'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
  },
  {
    id: 9,
    image: mocaccino,
    textChip: ['TRADICIONAL', 'COM LEITE'],
    title: 'Mocaccino',
    text: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
  },
  {
    id: 10,
    image: hotChocolate,
    textChip: ['ESPECIAL', 'COM LEITE'],
    title: 'Chocolate Quente',
    text: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
  },
  {
    id: 11,
    image: cubano,
    textChip: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    title: 'Cubano',
    text: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
  },
  {
    id: 13,
    image: havaiano,
    textChip: ['ESPECIAL'],
    title: 'Havaiano',
    text: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
  },
  {
    id: 14,
    image: arabe,
    textChip: ['ESPECIAL'],
    title: 'Árabe',
    text: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
  },
  {
    id: 15,
    image: irlandes,
    textChip: ['ESPECIAL', 'ALCOÒLICO'],
    title: 'Irlandês',
    text: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
  },
]
