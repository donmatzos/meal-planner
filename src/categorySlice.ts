import { createSlice }from "@reduxjs/toolkit"
import { addDayEntry } from "./JsonParser";

const initialState = {
    showRecipes: true,
    editPlanner: false,
    selectedDay: ""
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
        changeCategory: (state, action?) => {
            state.showRecipes = action.payload;
            state.editPlanner = false;
            state.selectedDay = "";
        },
        enableEditMode: (state, action?) => {
            state.showRecipes = action.payload.enable;
            state.editPlanner = action.payload.enable;
            state.selectedDay = action.payload.day;
        },
        addDayToDb: (state, action?) => {
            state.showRecipes = false;
            addDayEntry({"day":state.selectedDay, "recipeId":action.payload});
            state.selectedDay = "";
        },
    },
});

export const { changeCategory, enableEditMode, addDayToDb } = categorySlice.actions;

 export default categorySlice.reducer;