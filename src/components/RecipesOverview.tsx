import React from "react";
import data from "../db/recipes.json"
import { GenericCard } from "./GenericCard";
import {useSelector, useDispatch} from 'react-redux'
import {RootState, useAppDispatch} from "../store";

export const RecipesOverview = () => {
    const curSearchTerm = useSelector((state: RootState) => state.openRecipe);
    const filteredData = () => {
        return data.recipe.filter((r) => r.name.toLowerCase().includes(curSearchTerm.searchTerm.toLowerCase()))
    }
    return (
        <div className="justify-center">

            <div className="grid grid-cols-6 grid-rows-3">
                {filteredData().map((dat) =>
                    <GenericCard id={dat.id} key={dat.id}
                                 description={dat.description || "-"}>
                        {dat.name}
                    </GenericCard>
                )}
            </div>
        </div>
    );
}