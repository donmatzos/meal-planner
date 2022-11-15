import React, {useState} from "react";
import {TextInput} from "./TextInput";
import {RootState, useAppDispatch} from "../store";
import {useSelector} from "react-redux";
import {changeName} from "../createRecipeSlice";

export const CreateRecipeBody = () => {
    const [name, onNameChanged] = useState("")
    const [url, onUrlChanged] = useState("")
    const [ingredient, onIngredientChanged] = useState("")
    const [step, onStepChanged] = useState("")
    const createRecipe = useSelector((state:RootState) => state.createRecipe);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="flex flex-col bg-zinc-900 w-auto text-white">
                <div className="flex flex-row justify-between p-2">
                    <div className="w-1/3">
                        <TextInput label="Recipe Name" text={name} onChange={() => onNameChanged}/>
                        <button onClick={() => dispatch(changeName(name))}>+</button>
                    </div>

                    <div className="w-1/3">
                        <TextInput label="Image URL" text={url} onChange={() => onUrlChanged}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between p-2">
                    <div className="flex flex-col w-1/3">
                        <TextInput label="Add Ingredient" text={ingredient} onChange={() => onIngredientChanged}/>
                    </div>
                    <div className="flex flex-col w-7/12">
                        <TextInput label="Add Step" text={step} onChange={() => onStepChanged}/>
                    </div>
                </div>
            </div>
        </>
    )
}