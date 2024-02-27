import { ReactNode, createContext, useState } from 'react'
import { CardCoffeeList } from '../mocks/cardCoffee'
import { produce } from 'immer'

export interface CartItem extends CardCoffeeList {
  quantity: number
}

interface CartContextType {
  cartItem: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItem, setCartItem] = useState<CartItem[]>([])

  const addCoffeeToCart = (coffee: CartItem) => {
    const coffeeCart = cartItem.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

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
    <CartContext.Provider value={{ cartItem, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
