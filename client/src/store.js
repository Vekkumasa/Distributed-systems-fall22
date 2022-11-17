import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/ModalReducer'
import UserReducer from './reducers/UserReducer'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: UserReducer,
  },
})

export default store