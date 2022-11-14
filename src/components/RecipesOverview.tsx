import React from "react";
import data from "../db/recipes.json"
import { GenericCard } from "./GenericCard";


export const RecipesOverview = () => {

    return (
        <div className="justify-center">

            <div className="grid grid-cols-6 grid-rows-3">
                {
                data.recipe.map((dat, index) =>
                    <GenericCard key={index} index={index}
                                 description={dat.description || "-"}>
                        {dat.name} {index}
                    </GenericCard>
                )}
            </div>
        </div>
    );
}