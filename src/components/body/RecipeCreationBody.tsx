import React, { ChangeEvent, useState } from "react"
import { TextInput } from "../input/TextInput"
import { RootState, useAppDispatch } from "../../redux/store"
import { useSelector } from "react-redux"
import {
    addIngredient,
    addStep,
    changeName,
    removeLastIngredient,
    removeLastStep,
} from "../../redux/createRecipeSlice"
import { RecipeContents } from "./RecipeContents"

export const RecipeCreationBody = () => {
    const [name, onNameChanged] = useState("")
    const [url, onUrlChanged] = useState("")
    const [ingredient, onIngredientChanged] = useState("")
    const [step, onStepChanged] = useState("")
    const createRecipe = useSelector((state: RootState) => state.createRecipe)
    const dispatch = useAppDispatch()

    const nameInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        onNameChanged(event.target.value)
    }

    const urlInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        onUrlChanged(event.target.value)
    }

    const ingredientInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        onIngredientChanged(event.target.value)
    }

    const stepInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        onStepChanged(event.target.value)
    }

    const pushIngredient = () => {
        if (ingredient.length > 1) {
            dispatch(addIngredient(ingredient))
            onIngredientChanged("")
        }
    }

    const popIngredient = () => {
        if (createRecipe.ingredients.length > 0) {
            dispatch(removeLastIngredient())
        }
    }

    const pushStep = () => {
        if (step.length > 1) {
            dispatch(addStep(step))
            onStepChanged("")
        }
    }

    const popStep = () => {
        if (createRecipe.steps.length > 0) {
            dispatch(removeLastStep())
        }
    }

    return (
        <>
            <div className="flex flex-col bg-zinc-900 w-auto text-white">
                <div className="flex flex-row justify-between p-2">
                    <div className="w-1/3">
                        <TextInput
                            label="Recipe Name"
                            text={name}
                            onChange={nameInputChanged}
                        />
                    </div>

                    <div className="w-1/3">
                        <TextInput
                            label="Image URL"
                            text={url}
                            onChange={urlInputChanged}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between p-2">
                    <div className="flex flex-col w-1/3">
                        <TextInput
                            label="Ingredient and amount"
                            text={ingredient}
                            onChange={ingredientInputChanged}
                        />
                        <div className="flex flex-row justify-end">
                            <button onClick={pushIngredient}>
                                Add Ingredient
                            </button>
                            &ensp;
                            <button onClick={popIngredient}>Remove Last</button>
                        </div>
                    </div>
                    <div className="flex flex-col w-7/12">
                        <TextInput
                            label="Add Step"
                            text={step}
                            onChange={stepInputChanged}
                        />
                        <div className="flex flex-row justify-end">
                            <button onClick={pushStep}>Add Step</button>
                            &ensp;
                            <button onClick={popStep}>Remove Last</button>
                        </div>
                    </div>
                </div>
                <div className="flex w-full">
                    <RecipeContents
                        ingredients={
                            createRecipe.ingredients
                                ? createRecipe.ingredients.map((ingredient) => (
                                      <li key={ingredient}>{ingredient}</li>
                                  ))
                                : "-"
                        }
                        steps={
                            createRecipe.steps
                                ? createRecipe.steps.map((step) => (
                                      <li key={step}>{step}</li>
                                  ))
                                : "-"
                        }
                    />
                </div>
            </div>
        </>
    )
}
