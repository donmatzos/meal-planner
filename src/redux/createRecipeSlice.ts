import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    ingredients: ["Your list of all ingredients"],
    steps: ["Your list of all steps"],
}

export const createRecipeSlice = createSlice({
    name: "createRecipe",
    initialState,
    reducers: {
        changeName: (state, action?) => {
            state.name = action.payload
        },
        addIngredient: (state, action?) => {
            if (state.ingredients[0] === "Your list of all ingredients") {
                state.ingredients.pop()
            }
            state.ingredients.push(action.payload)
        },
        removeLastIngredient: (state) => {
            state.ingredients.pop()
        },
        addStep: (state, action) => {
            if (state.steps[0] === "Your list of all  steps") {
                state.steps.pop()
            }
            state.steps.push(action.payload)
        },
        removeLastStep: (state) => {
            state.steps.pop()
        },
    },
})

export const {
    changeName,
    addIngredient,
    removeLastIngredient,
    addStep,
    removeLastStep,
} = createRecipeSlice.actions

export default createRecipeSlice.reducer
