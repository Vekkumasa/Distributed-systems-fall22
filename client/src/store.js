import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/ModalReducer'
import UserReducer from './reducers/UserReducer'
import ShoppingCartReducer from './reducers/ShoppingCartReducer'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: UserReducer,
    shoppingCart: ShoppingCartReducer
  },
})

export default store