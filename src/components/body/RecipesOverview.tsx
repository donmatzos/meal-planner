import React, { useEffect, useState } from "react"
import { RecipeCard } from "../card/RecipeCard"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { getRecipes, Recipe } from "../../util/JsonParser"

export const RecipesOverview = () => {
    const curSearchTerm = useSelector((state: RootState) => state.openRecipe)
    const categorySlice = useSelector(
        (state: RootState) => state.changeCategory
    )
    const [recipes, setRecipes] = useState<Recipe[]>([])

    useEffect(() => {
        const filteredData = async () => {
            const recipes = await getRecipes()
            let res: Recipe[]
            res = recipes.filter((r: Recipe) =>
                r.name
                    .toLowerCase()
                    .includes(curSearchTerm.searchTerm.toLowerCase())
            )
            if (!res) {
                console.log("res is undefined")
                return
            }
            setRecipes(res)
        }
        filteredData()
    }, [curSearchTerm])

    return (
        <div className="justify-center bg-slate-900 h-screen">
            <div className="grid grid-cols-6 bg-slate-900 grid-rows-3">
                {recipes.map((dat: Recipe) => (
                    <RecipeCard
                        id={dat.id}
                        key={dat.id}
                        isSelectable={categorySlice.editPlanner}
                        description={dat.description || "-"}
                    >
                        {dat.name}
                    </RecipeCard>
                ))}
            </div>
        </div>
    )
}
