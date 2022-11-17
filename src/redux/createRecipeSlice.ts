import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    image: "",
    ingredient: [{ name: "Your list of all ingredients" }],
    step: [{ description: "Your list of all step" }],
}

export const createRecipeSlice = createSlice({
    name: "createRecipe",
    initialState,
    reducers: {
        changeName: (state, action?) => {
            state.name = action.payload
        },
        changeUrl: (state, action?) => {
            state.image = action.payload
        },
        addIngredient: (state, action?) => {
            if (
                state.ingredient.length &&
                state.ingredient[0].name === "Your list of all ingredients"
            ) {
                state.ingredient.pop()
            }
            state.ingredient.push({ name: action.payload })
        },
        removeLastIngredient: (state) => {
            state.ingredient.pop()
        },
        resetIngredients: (state) => {
            state.ingredient = [{ name: "Your list of all ingredients" }]
        },
        addStep: (state, action) => {
            if (
                state.step.length === 1 &&
                state.step[0].description === "Your list of all step"
            ) {
                state.step.pop()
            }
            state.step.push({ description: action.payload })
        },
        removeLastStep: (state) => {
            state.step.pop()
        },
        resetSteps: (state) => {
            state.step = [{ description: "Your list of all step" }]
        },
    },
})

export const {
    changeName,
    changeUrl,
    addIngredient,
    removeLastIngredient,
    resetIngredients,
    addStep,
    removeLastStep,
    resetSteps,
} = createRecipeSlice.actions

export default createRecipeSlice.reducer
