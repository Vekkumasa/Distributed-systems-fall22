import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'modal',
  initialState: {
    'login': false
  },
  reducers: {
    handleLoginModal(state, { payload }) {
      state.login = payload
    },
  },
})

export const { handleLoginModal } = slice.actions
export default slice.reducer