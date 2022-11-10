import data from "../db/recipes.json"
import { GenericCard } from "./GenericCard";

export const RecipesOverview = () => {
    return (
        <div>
        <div>
            Hello World
        </div>
        <div className="grid grid-cols-6 grid-rows-3">
            {data.map((dat, index) => <GenericCard key={index} description={dat.Description || "-"}>{dat.Name}</GenericCard>)}
        </div>
        </div>
    );
}