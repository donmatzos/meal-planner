import React from "react";

type RecipeModalProps = {
    title: string;
    description: string
    ingredients?: string []
    steps?: string []
}

export const RecipeModal = ({title, description, ingredients, steps}: RecipeModalProps) => {
    return(
        <div className="flex w-full min-h-screen top-0 left-0">
            <div className="flex flex-col bg-white cursor-pointer justify-center shadow-md min-h-screen">

                {/*<div className="text-right">
                <button onClick={onClose} className="">
                    <img src={"../icons/close.svg"} alt="close recipe" />
                </button>
            </div>*/}

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
    )
}

