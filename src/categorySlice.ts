import { createSlice }from "@reduxjs/toolkit"

const initialState = {
    showRecipes: true,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
        changeCategory: (state, action?) => {
            state.showRecipes = action.payload;
        },
    },
});

export const { changeCategory } = categorySlice.actions;

 export default categorySlice.reducer;