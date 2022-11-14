import { createSlice }from "@reduxjs/toolkit"

const initialState = {
    open: false,
    index: -1,
};

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers:{
        toggleOpen: (state, action?) => {
            state.open = !state.open;
            state.index = action.payload;
            console.log(state.open, state.index);
        },
        changeIndex: (state, action) =>{
            state.index = action.payload
        },
    },
});

export const { toggleOpen, changeIndex } = recipeSlice.actions;

 export default recipeSlice.reducer;