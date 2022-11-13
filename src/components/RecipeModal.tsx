import React from "react";
import {ReactNode} from "react"
import data from "../db/recipes.json";
import {GenericCard} from "./GenericCard";

type RecipeModalProps = {
    title: string;
    description: string
    isOpen: boolean
    ingredients?: string []
    steps?: string []
    onClose: () => void
    children?: ReactNode
}

export const RecipeModal = ({title, description, isOpen, ingredients, steps, onClose, children}: RecipeModalProps) => isOpen ? (

    <div className="flex fixed w-full min-h-screen top-0 left-0">
        <div className="flex flex-col bg-white cursor-pointer justify-center shadow-md min-h-screen">

            <div className="text-right">
                <button onClick={onClose} className="">
                    <img src={"../icons/close.svg"} alt="close recipe" />
                </button>
            </div>

            <div>
                <h1 className="text-4xl font-bold">{title}</h1>
                <br/>
                <h2 className="text-2xl">Description:</h2>
                <p className="p-2">{description}</p>
                <hr />
            </div>

            <div className="flex flex-row text-left overflow-auto ...">
                <div className="min-w-max p-10">
                    <h2 className="text-2xl">Ingredients:</h2>
                    <br/>
                    <ol className="space-y-0 list-disc list-inside text-gray-500 dark:text-gray">
                        {ingredients ? ingredients.map((ingred) => <li>{ingred}</li>) : "-" }
                    </ol>
                </div>
                <div className="p-10 overflow-auto">
                    <h2 className="text-2xl">Steps:</h2>
                    <br/>
                    <ol className="space-y-0 list-decimal list-inside text-gray-500 dark:text-gray ">
                            {steps ? steps.map((step) => <li><p>{step}</p></li>) : "-" }
                    </ol>
                </div>
            </div>


        </div>

    </div>

) : null;

