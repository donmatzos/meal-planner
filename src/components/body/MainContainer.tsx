import React from "react"
import { RecipeCreationButtonModal } from "../modal/RecipeCreationButtonModal"
import { RecipeCreationBody } from "./RecipeCreationBody"
import { RecipesOverview } from "./RecipesOverview"
import { WeeklyPlanner } from "./WeeklyPlanner"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

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
                        <RecipeCreationButtonModal
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
