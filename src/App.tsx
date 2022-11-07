import React from "react";
import "./App.css";
import { NotificationBox } from "./components/NotificationBox";
import { FeedHeader } from "./components/FeedHeader";
import { ReceipesOverview } from "./components/ReceipesOverview";

function App() {
    return (
        <div className="App">
            <FeedHeader></FeedHeader>
            <ReceipesOverview></ReceipesOverview>
        </div>
    );
}

export default App;
