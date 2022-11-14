import React from "react";
import "./App.css";
import { FeedHeader } from "./components/FeedHeader";
import { RecipesOverview } from "./components/RecipesOverview";
import { Collapsible } from "./components/Collapsible";

function App() {
    return (
        <div className="App">
            <FeedHeader></FeedHeader>
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
