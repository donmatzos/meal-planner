import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    image: "",
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
        changeUrl: (state, action?) => {
            state.image = action.payload
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
        resetIngredients: (state) => {
            state.ingredients = ["Your list of all ingredients"]
        },
        addStep: (state, action) => {
            if (state.steps[0] === "Your list of all steps") {
                state.steps.pop()
            }
            state.steps.push(action.payload)
        },
        removeLastStep: (state) => {
            state.steps.pop()
        },
        resetSteps: (state) => {
            state.steps = ["Your list of all steps"]
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
    resetSteps
} = createRecipeSlice.actions

export default createRecipeSlice.reducer
