import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.ts'

const store = configureStore({
  reducer: counterReducer
})

export default store