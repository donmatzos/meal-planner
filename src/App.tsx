import React from "react";
import "./App.css";
import { FeedHeader } from "./components/FeedHeader";
import { RecipesOverview } from "./components/RecipesOverview";
import { Collapsible } from "./components/Collapsible";
import { CreateRecipeBody } from "./components/CreateRecipeBody";

function App() {
    return (
        <div className="App">
            <FeedHeader></FeedHeader>
            <CreateRecipeBody></CreateRecipeBody>
            <Collapsible
                open={true}
                children={<RecipesOverview></RecipesOverview>}
                title={"Recipe List"}/>
        </div>
    );
}

export default App;
