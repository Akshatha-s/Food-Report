import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    foods: []
};

export const foodListSlice = createSlice({
  name: 'foodList',
  initialState,
  reducers: {
    updateList: (state, action) => {
        state.foods = [...action.payload];
    }
  },
})

export const { updateList } = foodListSlice.actions;

export default foodListSlice.reducer;