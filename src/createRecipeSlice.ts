import { createSlice }from "@reduxjs/toolkit"

const initialState = {
    name: "",
    ingredients: [""],
    steps: [""]
};

export const createRecipeSlice = createSlice({
    name: 'createRecipe',
    initialState,
    reducers: {
        changeName: (state, action?) => {
            state.name = action.payload;
            console.log("name changed to " + action.payload);
        },
        addIngredient: (state, action?) => {
            state.ingredients.push(action.payload);
        },
        removeLastIngredient: (state) => {
            state.ingredients.pop();
        },
        addStep: (state, action) => {
            state.steps.push(action.payload);
        },
        removeLastStep: (state) => {
            state.steps.pop();
        }
    },
});

export const { changeName, addIngredient, removeLastIngredient, addStep, removeLastStep } = createRecipeSlice.actions;

export default createRecipeSlice.reducer;