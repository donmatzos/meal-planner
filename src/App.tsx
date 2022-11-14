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
                isAddIcon={false}
                title={"My Weekly Meal Plan"} />
            <Collapsible
                open={true}
                children={<RecipesOverview></RecipesOverview>}
                isAddIcon={true}
                title={"Recipe List"}/>
        </div>
    );
}

export default App;
