import { ReactNode, createContext, useState } from 'react'
import { CardCoffeeList } from '../mocks/cardCoffee'
import { produce } from 'immer'

export interface CartItem extends CardCoffeeList {
  quantity: number
}

interface CartContextType {
  cartItem: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  itemsQuantity: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItem, setCartItem] = useState<CartItem[]>([])

  console.log('cartItem', cartItem)

  const itemsQuantity = cartItem.length

  const addCoffeeToCart = (coffee: CartItem) => {
    const coffeeCart = cartItem.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )
    console.log('coffeeCart', coffeeCart)

    const newCart = produce(cartItem, (draft) => {
      if (coffeeCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeCart].quantity += coffee.quantity
      }
    })
    setCartItem(newCart)
  }

  return (
    <CartContext.Provider value={{ cartItem, addCoffeeToCart, itemsQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
