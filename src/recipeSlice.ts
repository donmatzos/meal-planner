import {createSlice} from "@reduxjs/toolkit"
import { addDayEntry } from "./JsonParser"

const initialState = {
    open: false,
    id: "",
    searchTerm: ""
};

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        toggleOpen: (state, action?) => {
            state.open = !state.open;
            state.id = action.payload;
            console.log(state.open, state.id);
        },
        search: (state, action) => {
            state.searchTerm = action.payload;
            console.log(action.payload);
        }
    },
});

export const {toggleOpen, search} = recipeSlice.actions;

export default recipeSlice.reducer;