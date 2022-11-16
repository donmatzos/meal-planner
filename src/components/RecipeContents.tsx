import React from "react";

type RecipeContentsProps = {
    ingredients: JSX.Element[] | string[],
    steps: JSX.Element[] | string[],
}

export const RecipeContents = ({ ingredients, steps }: RecipeContentsProps) => {
    return(
        <div className="flex flex-row text-left overflow-auto...">
            <div className="min-w-max p-10 ">
                <h2 className="text-xl text-violet-400 font-bold pb-3">Ingredients:</h2>
                <ol className="space-y-0 list-disc list-inside ">
                    {ingredients}
                </ol>
            </div>
            <div className="p-10 overflow-auto">
                <h2 className="text-xl text-violet-400 font-bold pb-2">Steps:</h2>
                <ol className="space-y-0 list-disc">
                    {steps}
                </ol>
            </div>
        </div>
    )
}