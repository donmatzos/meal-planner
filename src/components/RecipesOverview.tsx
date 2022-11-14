import React from "react";
import data from "../db/recipes.json"
import { GenericCard } from "./GenericCard";


export const RecipesOverview = () => {

    return (
        <div className="justify-center">

            <div className="grid grid-cols-6 grid-rows-3">
                {data.map((dat, index) =>
                    <GenericCard key={index} index={index}
                                 description={dat.Description || "-"}>
                        {dat.Name} {index}
                    </GenericCard>
                )}
            </div>
        </div>
    );
}