import { createSlice } from '@reduxjs/toolkit'

if (!localStorage.getItem("favFoods")) {
	localStorage.setItem("favFoods", JSON.stringify([]));
}

const initialState = {
    favFoods: JSON.parse(localStorage.getItem("favFoods"))
};

export const favSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav: (state, action) => {
        localStorage.setItem("favFoods", JSON.stringify([...state.favFoods, action.payload]));
        state.favFoods = [...state.favFoods, action.payload];
    },
    removeFav: (state, action) => {
        const list = state.favFoods.filter(item => (+item.id !== +action.payload));
        state.favFoods = [...list];
        localStorage.setItem("favFoods", JSON.stringify(list));
    },
  },
})

export const { addFav, removeFav } = favSlice.actions;

export default favSlice.reducer;