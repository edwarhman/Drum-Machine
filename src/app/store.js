import { configureStore } from '@reduxjs/toolkit'
import drumReducer from '../drumSlice'

export const store = configureStore({
  reducer: {
    drum: drumReducer,
  },
})
