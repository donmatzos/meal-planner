import React, {useEffect} from "react";
import {ReactNode} from "react"
import data from "../db/recipes.json";
import {useSelector, useDispatch} from 'react-redux'
import {RootState, useAppDispatch} from "../store";
import {toggleOpen} from "../recipeSlice";

type RecipeModalProps = {
    title: string;
    description: string
    isOpen?: boolean
    ingredients?: string []
    steps?: string []
    onClose?: () => void
    children?: ReactNode
}

export const RecipeModal = ({title, description, isOpen, ingredients, steps, onClose, children}: RecipeModalProps) => {
    const curRecipe = useSelector((state: RootState) => state.openRecipe);
    const dispatch = useAppDispatch();
    if (curRecipe.open) {
        return (
            <div className={`flex fixed z-20 w-full min-h-screen top-0 left-0`}>

                <div className="flex flex-row w-full bg-white cursor-pointer shadow-md min-h-screen ">


                    <img className="object-cover w-1/3 h-full" alt={data.recipe[curRecipe.index].name}
                         src={data.recipe[curRecipe.index].image}/>

                    <div className="flex-col text-left">

                        <div className="m-1">
                            <h1 className="text-4xl font-bold ml-10">{data.recipe[curRecipe.index].name}</h1>
                            <p className="ml-11 text-xl">- {data.recipe[curRecipe.index].description}</p>
                            <hr/>
                        </div>

                        <div className="flex flex-row text-left overflow-auto ...">
                            <div className="min-w-max pl-10 pt-5 ">
                                <h2 className="text-xl font-bold">Ingredients:</h2>
                                <br/>
                                <ol className="space-y-0 list-disc list-inside text-gray-500 dark:text-gray">
                                    {data.recipe[curRecipe.index].ingredient ? data.recipe[curRecipe.index].ingredient.map((ingred) =>
                                        <li>{ingred.amount} {ingred.unit} {ingred.name}</li>) : "-"}
                                </ol>
                            </div>
                            <div className="pt-5 pl-1 overflow-auto">
                                <h2 className="text-xl font-bold">Steps:</h2>
                                <br/>
                                <ol className="space-y-0 list-disc text-gray-500 dark:text-gray ">
                                    {data.recipe[curRecipe.index].step ? data.recipe[curRecipe.index].step.map((step) =>
                                        <li>{step.description}</li>) : "-"}
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="fixed bg-white rounded-full m-4 hover:bg-gray">
                        <button onClick={() => dispatch(toggleOpen(curRecipe))} >
                            <img src={"../icons/close.svg"} alt="close recipe"/>
                        </button>
                    </div>

                </div>

            </div>
        )
    }
    return null
}



