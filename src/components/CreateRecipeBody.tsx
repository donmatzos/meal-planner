import React from "react";
import {TextInput} from "./TextInput";

export const CreateRecipeBody = () => {

    return (
        <>
            <div className="flex flex-col bg-white w-auto">
                <div className="flex flex-row justify-between p-2">
                    <div className="w-1/3">
                        <TextInput label="Recipe Name"/>
                    </div>

                    <div className="w-1/3">
                        <TextInput label="Image URL"/>
                    </div>
                </div>
                <div className="flex flex-row justify-between p-2">
                    <div className="flex flex-col w-1/3">
                        <TextInput label="Add Ingredient"/>
                    </div>
                    <div className="flex flex-col w-7/12">
                        <TextInput label="Add Step"/>
                    </div>
                </div>
            </div>
        </>
    )
}