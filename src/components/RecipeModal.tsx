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
            <div className={`flex fixed z-20 w-full text-white min-h-screen top-0 left-0`}>

                <div className="flex flex-row w-full bg-zinc-900 shadow-md min-h-screen">


                    <img className="object-cover w-1/3 h-full" alt={data.recipe[curRecipe.index].name}
                         src={data.recipe[curRecipe.index].image}/>

                    <div className="flex-col text-left">
                        <div className="">
                            <h1 className="text-4xl font-bold font-oswald text-2xl p-6">{data.recipe[curRecipe.index].name}</h1>
                            <h2 className="pl-8 pb-4">- {data.recipe[curRecipe.index].description}</h2>
                            <hr/>
                        </div>

                        <div className="flex flex-row text-left overflow-auto...">
                            <div className="min-w-max p-10 ">
                                <h2 className="text-xl text-violet-400 font-bold pb-3">Ingredients:</h2>
                                <ol className="space-y-0 list-disc list-inside ">
                                    {data.recipe[curRecipe.index].ingredient ? data.recipe[curRecipe.index].ingredient.map((ingred) =>
                                        <li>{ingred.amount} {ingred.unit} {ingred.name}</li>) : "-"}
                                </ol>
                            </div>
                            <div className="p-10 overflow-auto">
                                <h2 className="text-xl text-violet-400 font-bold pb-2">Steps:</h2>
                                <ol className="space-y-0 list-disc">
                                    {data.recipe[curRecipe.index].step ? data.recipe[curRecipe.index].step.map((step) =>
                                        <li>{step.description}</li>) : "-"}
                                </ol>
                            </div>
                        </div>
                    </div>
                    <button className="fixed bg-zinc-900 hover:bg-violet-500 font-bold py-2 px-4 rounded-full m-4"
                            onClick={() => dispatch(toggleOpen(curRecipe))}>
                        X
                    </button>


                </div>

            </div>
        )
    }
    return null
}



