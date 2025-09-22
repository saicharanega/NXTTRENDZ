import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeCartItem: () => {},
  addCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
