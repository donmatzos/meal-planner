import React from "react";
import {TextInput} from "./TextInput";

export const CreateRecipeBody = () => {

    return (
        <>
            <div className="flex bg-white">
                <div className="flex flex-row justify-between">
                    <TextInput label="Recipe Name" placeholder="add name here..."/>
                    <input type="file"/>
                </div>

            </div>
        </>
    )
}