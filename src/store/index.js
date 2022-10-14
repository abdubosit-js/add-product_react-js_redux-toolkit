import { configureStore } from '@reduxjs/toolkit'
import appSlice  from './reducer'

export const store = configureStore({
  reducer: appSlice
})