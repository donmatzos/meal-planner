import { useEffect, useState } from "react"
import { getWeek, Days, Recipe } from "../../util/JsonParser"
import { EmptyCard } from "../card/EmptyCard"
import { RecipeCard } from "../card/RecipeCard"

export const WeeklyPlanner = () => {
    const [savedRecipes, setSavedRecipes] = useState<Map<string, Recipe>>()

    useEffect(() => {
        getWeek().then(setSavedRecipes)
    }, [])

    const getCard = (day: string) => {
        if (!savedRecipes?.has(day)) {
            return <EmptyCard day={day}></EmptyCard>
        }
        const recipe = savedRecipes.get(day)
        if (!recipe) {
            return <EmptyCard day={day}></EmptyCard>
        }
        return (
            <RecipeCard
                id={recipe.id}
                key={recipe.id}
                isSelectable={false}
                description={recipe.description || "-"}
            >
                {recipe.name}
            </RecipeCard>
        )
    }

    return (
        <div className="pl-14 pr-14 justify-center bg-slate-800 w-screen h-screen fixed">
            <div className="grid gap-x-96 grid-cols-7 items-center h-screen overflow-x-auto grid-rows-1">
                {Days.map((x, i) => (
                    <div key={x.toString()} className="w-80">
                        {getCard(x)}
                        <h2 className="pt-16 w-full text-center text-white font-oswald text-3xl font-medium">
                            {x}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
