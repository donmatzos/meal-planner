import React from "react";
import "./App.css";
import { FeedHeader } from "./components/FeedHeader";
import { RecipesOverview } from "./components/RecipesOverview";
import { Collapsible } from "./components/Collapsible";
import {RecipeModal} from "./components/RecipeModal";
import {toggleOpen} from "./recipeSlice";

function App() {
    return (
        <div className="App">
            <FeedHeader></FeedHeader>
            <RecipeModal
                title={""}
                description={""}
                /*steps={data.recipe[index].Method}
                ingredients={data.recipe[index].Ingredients}
                isOpen={isModalOpen}*/
                onClose={() => toggleOpen(0)}
            />
            <Collapsible
                open={false}
                children={<></>}
                isFab={true}
                isAddIcon={false}
                title={"My Weekly Meal Plan"}
                modalTitle={"Export my Recipes"}
            />
            <Collapsible
                open={true}
                children={<RecipesOverview></RecipesOverview>}
                isFab={true}
                isAddIcon={true}
                title={"Recipe List"}
                modalTitle={"Add Recipe"}
            />
        </div>
    );
}

export default App;
