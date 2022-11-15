import React, { ReactNode } from "react"
import {RecipeModal} from "./RecipeModal";
import data from "../db/recipes.json";
import {toggleOpen} from "../recipeSlice"
import {useAppDispatch} from "../store";

type CardProps = {
    description: string
    id: string
    children: ReactNode
}

export const GenericCard = ({description, id,  children}: CardProps) => {
    const dispatch = useAppDispatch();
    const [isModalOpen, setModalState] = React.useState(false);
    const recipe = data.recipe.find((r) => r.id === id);

    const layout = () => {
        if (!recipe) {
            return(
            <div className="flex w-80 h-96 drop-shadow-lg rounded-t-md text-white">
                <div className="flex-col h-[26rem] justify-between overflow-hidden rounded-md w-full bg-zinc-900 m-2">
                    <img className="rounded-t-md object-cover w-full h-60" alt={"Please choose recipe.."} src={"insert_recipe.png"}/>
                    <p>Please choose recipe...</p>
                    <h2 className="font-oswald text-2xl font-medium truncate">{children}</h2>
                    <p className="p-2 text-center text-ellipsis line-clamp-2 h-16 ..." >{description}</p>
                    <div>
                        <button className="bg-violet-600 hover:bg-violet-500 font-bold py-2 px-4 rounded-full m-4 bottom-0" onClick={() => dispatch(toggleOpen(id ?? 0))}>Add Recipe</button>
                    </div>
                </div>
            </div>
            )
        } else {
            return(
            <div className="flex w-full max-h-104 drop-shadow-lg rounded-t-md text-white">
                <div className="flex-col justify-between overflow-hidden rounded-md w-full bg-zinc-900 m-2">
                    <img className="rounded-t-md object-cover w-full h-60" alt={recipe.name} src={recipe.image}/>
                    <h2 className="font-oswald text-2xl font-medium truncate">{recipe.name}</h2>
                    <p className="p-2 text-left text-ellipsis line-clamp-2 h-16 ..." >{description}</p>
                    <div>
                        <button className="bg-violet-600 hover:bg-violet-500 font-bold py-2 px-4 rounded-full m-4 bottom-0" onClick={() => dispatch(toggleOpen(id ?? 0))}>Open Recipe</button>
                    </div>
                </div>
            </div>
            )
        }
    }

    return(
        layout()
    )
}