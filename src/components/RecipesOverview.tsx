import React from "react";
import data from "../db/recipes.json"
import { RecipeCard } from "./RecipeCard";
import {useSelector, useDispatch} from 'react-redux'
import {RootState, useAppDispatch} from "../store";

export const RecipesOverview = () => {
    const curSearchTerm = useSelector((state: RootState) => state.openRecipe);
    const categorySlice = useSelector((state: RootState) => state.changeCategory);
    const filteredData = () => {
        return data.recipe.filter((r) => r.name.toLowerCase().includes(curSearchTerm.searchTerm.toLowerCase()))
    }
    return (
        <div className="justify-center bg-slate-900 h-screen">
            <div className="grid grid-cols-6 grid-rows-3">
                {filteredData().map((dat) =>
                    <RecipeCard id={dat.id} key={dat.id} isSelectable={categorySlice.editPlanner}
                                 description={dat.description || "-"}>
                        {dat.name}
                    </RecipeCard>
                )}
            </div>
        </div>
    );
}