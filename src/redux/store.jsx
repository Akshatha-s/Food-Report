import { configureStore } from '@reduxjs/toolkit'
import foodsReducer from './foodListSlice'
import favReducer from './favListSlice';

export const store = configureStore({
  reducer: {
    foodList: foodsReducer,
    favs: favReducer,
  },
})