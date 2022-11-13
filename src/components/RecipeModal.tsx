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

    <div className="bg-white fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="flex-col cursor-pointer justify-center shadow-md rounded-t-md">

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

            <div className="flex flex-row text-left ...">
                <div className="overflow-auto md:overflow-scroll">
                    <h2 className="text-2xl">Ingredients:</h2>
                    <br/>
                    <ol className="space-y-1 list-inside text-gray-500 dark:text-gray-400">
                        {ingredients ? ingredients.map((ingred) => <li>{ingred}</li>) : "-" }
                    </ol>
                </div>
                <div className="overflow-auto md:overflow-scroll">
                    <h2 className="text-2xl">Steps:</h2>
                    <br/>
                    <ul className="space-y-1 list-disc list-inside text-gray-500 dark:text-gray-400">
                        {steps ? steps.map((step) => <li>{step}</li>) : "-" }
                    </ul>
                </div>
            </div>


        </div>

    </div>

) : null;

