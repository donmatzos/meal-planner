import React from "react"
import "./App.css"
import { FeedHeader } from "./components/header/FeedHeader"
import { MainContainer } from "./components/MainContainer"
import { RecipeModal } from "./components/modal/RecipeModal"
import { toggleOpen } from "./redux/recipeSlice"

function App() {
    return (
        <div className="App">
            <FeedHeader></FeedHeader>
            <RecipeModal id={""} onClose={() => toggleOpen(0)} />
            <MainContainer
                children={<></>}
                title={"Recipe List"}
                modalTitle={"Create new Recipe"}
            ></MainContainer>
        </div>
    )
}

export default App
