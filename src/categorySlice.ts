import { createSlice }from "@reduxjs/toolkit"

const initialState = {
    showRecipes: true,
    editPlanner: false,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
        changeCategory: (state, action?) => {
            state.showRecipes = action.payload;
            state.editPlanner = false;
        },
        enableEditMode: (state, action?) => {
            state.showRecipes = action.payload;
            state.editPlanner = action.payload;
        }
    },
});

export const { changeCategory, enableEditMode } = categorySlice.actions;

 export default categorySlice.reducer;