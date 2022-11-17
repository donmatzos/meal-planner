import { useEffect, useState } from "react"
import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../redux/store"
import { toggleOpen } from "../../redux/recipeSlice"
import { RecipeContents } from "../body/RecipeContents"
import { getRecipes, Recipe } from "../../util/JsonParser"

type RecipeModalProps = {
    id: string
    onClose?: () => void
    children?: ReactNode
}

export const RecipeModal = ({ id, onClose, children }: RecipeModalProps) => {
    const curRecipe = useSelector((state: RootState) => state.openRecipe)
    const dispatch = useAppDispatch()
    const [recipe, setRecipe] = useState<Recipe>()

    useEffect(() => {
        const filteredData = async () => {
            const recipes = await getRecipes()
            var res: Recipe | undefined
            res = recipes.find((r: Recipe) => r.id === curRecipe.id)
            if (!res) {
                return
            }
            setRecipe(res)
        }
        filteredData()
    }, [curRecipe])

    if (curRecipe.open && curRecipe.id && recipe) {
        return (
            <div
                className={`flex fixed z-20 w-full  text-white min-h-screen top-0 left-0`}
            >
                <div className="flex flex-row w-full  bg-zinc-900 shadow-md min-h-screen">
                    <img
                        className="object-cover w-1/3 h-full"
                        alt={recipe.name}
                        src={recipe.image}
                    />
                    <div className="flex-col text-left my-auto">
                        <div className="">
                            <h1 className="text-4xl font-bold font-oswald p-6">
                                {recipe.name}
                            </h1>
                            <h2 className="text-xl pl-8 pb-4">
                                - {recipe.description}
                            </h2>
                            <hr />
                        </div>

                        <RecipeContents
                            ingredients={
                                recipe!.ingredient
                                    ? recipe!.ingredient.map((ingredient) => (
                                          <li>
                                              {ingredient.amount}{" "}
                                              {ingredient.unit}{" "}
                                              {ingredient.name}
                                          </li>
                                      ))
                                    : ""
                            }
                            steps={
                                recipe.step
                                    ? recipe.step.map((step) => (
                                          <li>{step.description}</li>
                                      ))
                                    : ""
                            }
                        />
                    </div>
                    <button
                        className="fixed bg-zinc-900 hover:bg-violet-500 font-bold py-2 px-4 rounded-full m-4"
                        onClick={() => dispatch(toggleOpen(curRecipe))}
                    >
                        X
                    </button>
                </div>
            </div>
        )
    }
    return null
}
