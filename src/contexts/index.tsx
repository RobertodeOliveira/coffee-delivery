import { ReactNode, createContext, useEffect, useState } from 'react'
import { CardCoffeeList } from '../mocks/cardCoffee'
import { produce } from 'immer'

export interface CartItem extends CardCoffeeList {
  quantity: number
}

interface CartContextType {
  cartItem: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  itemsQuantity: number
  changeQuantityItemCart: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeItemCart: (carItemId: number) => void
  valueTotalInCart: number
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivey:cartItems'

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItem, setCartItem] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const itemsQuantity = cartItem.length

  const valueTotalInCart = cartItem.reduce((total, cartItem) => {
    return total + cartItem.value * cartItem.quantity
  }, 0)

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

  const changeQuantityItemCart = (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => {
    const newCart = produce(cartItem, (draft) => {
      const coffeeExistCart = cartItem.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (coffeeExistCart >= 0) {
        const item = draft[coffeeExistCart]
        draft[coffeeExistCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItem(newCart)
  }

  const removeItemCart = (cartItemId: number) => {
    const newCart = produce(cartItem, (draft) => {
      const coffeeExistCart = cartItem.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (coffeeExistCart >= 0) {
        draft.splice(coffeeExistCart, 1)
      }
    })
    setCartItem(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItem))
  }, [cartItem])

  return (
    <CartContext.Provider
      value={{
        cartItem,
        valueTotalInCart,
        addCoffeeToCart,
        itemsQuantity,
        changeQuantityItemCart,
        removeItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
