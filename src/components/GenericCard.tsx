import React, { ReactNode } from "react"
import {RecipeModal} from "./RecipeModal";
import data from "../db/recipes.json";
import {toggleOpen} from "../recipeSlice"
import {useAppDispatch} from "../store";

type CardProps = {
    description: string
    index: number
    children: ReactNode
}

export const GenericCard = ({description, index,  children}: CardProps) => {
    const dispatch = useAppDispatch();
    const [isModalOpen, setModalState] = React.useState(false);

    const layout = () => {
        if (index == -1) {
            return(
            <div className="flex w-80 max-h-104 drop-shadow-lg rounded-t-md text-white">
                <div className="flex-col justify-between overflow-hidden rounded-md w-full bg-zinc-900 m-2">
                    <img className="rounded-t-md object-cover w-full h-60" alt={"Please choose recipe.."} src={""}/>
                    <h2 className="font-oswald text-2xl font-medium truncate">{children}</h2>
                    <p className="p-2 text-center text-ellipsis line-clamp-2 h-16 ..." >{description}</p>
                    <div>
                        <button className="bg-violet-400 hover:bg-violet-500 font-bold py-2 px-4 rounded-full m-4 bottom-0" onClick={() => dispatch(toggleOpen(index ?? 0))}>Add Recipe</button>
                    </div>
                </div>
            </div>
            )
        } else {
            return(
            <div className="flex w-full max-h-104 drop-shadow-lg rounded-t-md text-white">
                <div className="flex-col justify-between overflow-hidden rounded-md w-full bg-zinc-900 m-2">
                    <img className="rounded-t-md object-cover w-full h-60" alt={data.recipe[index].name} src={data.recipe[index].image}/>
                    <h2 className="font-oswald text-2xl font-medium truncate">{data.recipe[index].name}</h2>
                    <p className="p-2 text-left text-ellipsis line-clamp-2 h-16 ..." >{description}</p>
                    <div>
                        <button className="bg-violet-400 hover:bg-violet-500 font-bold py-2 px-4 rounded-full m-4 bottom-0" onClick={() => dispatch(toggleOpen(index ?? 0))}>Open Recipe</button>
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