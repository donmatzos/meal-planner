import React from "react";
import "./App.css";
import { FeedHeader } from "./components/FeedHeader";
import { RecipesOverview } from "./components/RecipesOverview";
import { MainContainer } from "./components/MainContainer";
import { RecipeModal } from "./components/RecipeModal";
import { toggleOpen } from "./recipeSlice";

function App() {
    return (
        <div className="App">
            <FeedHeader></FeedHeader>
            <RecipeModal
                id={""}
                /*steps={data.recipe[index].Method}
                ingredients={data.recipe[index].Ingredients}
                isOpen={isModalOpen}*/
                onClose={() => toggleOpen(0)}
            />
            <MainContainer
             children={<></>}
             title={"Recipe List"}
             modalTitle={"Create new Recipe"}></MainContainer>
        </div>
    );
}

export default App;
