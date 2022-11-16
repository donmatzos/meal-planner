import React, {ChangeEvent, useState} from "react";
import {TextInput} from "./TextInput";
import {RootState, useAppDispatch} from "../store";
import {useSelector} from "react-redux";
import {addIngredient, addStep, changeName, removeLastIngredient, removeLastStep} from "../createRecipeSlice";

export const CreateRecipeBody = () => {
    const [name, onNameChanged] = useState("")
    const [url, onUrlChanged] = useState("")
    const [ingredient, onIngredientChanged] = useState("")
    const [step, onStepChanged] = useState("")
    const createRecipe = useSelector((state:RootState) => state.createRecipe);
    const dispatch = useAppDispatch();

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
        dispatch(addIngredient(ingredient))
        onIngredientChanged("")
    }

    const popIngredient = () => {
        if (createRecipe.ingredients.length > 0) {
            dispatch(removeLastIngredient)
        }
    }

    const pushStep = () => {
        dispatch(addStep(step))
        onStepChanged("")
    }

    const popStep = () => {
        if (createRecipe.steps.length > 0) {
            dispatch(removeLastStep)
        }
    }

    return (
        <>
            <div className="flex flex-col bg-zinc-900 w-auto text-white">
                <div className="flex flex-row justify-between p-2">
                    <div className="w-1/3">
                        <TextInput label="Recipe Name" text={name} onChange={nameInputChanged}/>
                    </div>

                    <div className="w-1/3">
                        <TextInput label="Image URL" text={url} onChange={urlInputChanged}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between p-2">
                    <div className="flex flex-col w-1/3">
                        <TextInput label="Add Ingredient" text={ingredient} onChange={ingredientInputChanged}/>
                        <div className="flex flex-row justify-between">
                            <button onClick={pushIngredient}>Add Ingredient</button>
                            <button onClick={popIngredient}>Remove Last</button>
                        </div>
                    </div>
                    <div className="flex flex-col w-7/12">
                        <TextInput label="Add Step" text={step} onChange={stepInputChanged}/>
                        <div className="flex flex-row justify-between">
                            <button onClick={pushStep}>Add Step</button>
                            <button onClick={popStep}>Remove Last</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}