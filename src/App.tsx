import React from "react";
import "./App.css";
import { NotificationBox } from "./components/NotificationBox";
import { FeedHeader } from "./components/FeedHeader";

function App() {
    return (
        <div className="App">
            <FeedHeader></FeedHeader>
            <NotificationBox></NotificationBox>
        </div>
    );
}

export default App;
