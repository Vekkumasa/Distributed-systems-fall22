import { createSlice } from '@reduxjs/toolkit'

const createProduct = (payload) => {
  return {
    id: payload.id,
    name: payload.name,
    description: payload.description,
    quantity: payload.quantity,
    price: payload.price
  }
}

const slice = createSlice({
  name: 'shoppingCart',
  initialState: [],
  reducers: {
    addNewProduct(state, { payload }) {
      const product = createProduct(payload)
      return state.concat({quantity: 1, product})
    },

    increaseQuantity(state, { payload }) {
      const product = createProduct(payload)
      return state.map(p => p.product.id !== payload.id ? p : {quantity: p.quantity + 1, product})
    },

    removeProduct(state, { payload }) {
      return state.filter(p => p.product.id !== payload.id)
    },

    clearShoppingCart(state, { payload }) {
      return []
    } 
  },
})

export const { addNewProduct, increaseQuantity, removeProduct, clearShoppingCart } = slice.actions
export default slice.reducer