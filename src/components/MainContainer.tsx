import React from "react"
import { ButtonModal } from "./modal/ButtonModal"
import { RecipeCreationBody } from "./body/RecipeCreationBody"
import { RecipesOverview } from "./body/RecipesOverview"
import { WeeklyPlanner } from "./body/WeeklyPlanner"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

type MainContainerProps = {
    children?: React.ReactNode
    title: string
    modalTitle?: string
}

export const MainContainer = ({ children, modalTitle }: MainContainerProps) => {
    const recipe = useSelector((state: RootState) => state.changeCategory)

    const getCurrentView = () => {
        if (recipe.showRecipes) {
            return <RecipesOverview></RecipesOverview>
        } else {
            return <WeeklyPlanner></WeeklyPlanner>
        }
    }

    return (
        <div className="card mx-auto w-100 h-100 bg-slate-800 shadow-lg flex ">
            <div className="border-bottom">
                <div>
                    {getCurrentView()}
                    {recipe.showRecipes && (
                        <ButtonModal
                            title={modalTitle || "-"}
                            isAddIcon={recipe.showRecipes}
                            children={<RecipeCreationBody />}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
