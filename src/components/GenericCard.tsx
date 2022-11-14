import React, { ReactNode } from "react"
import {RecipeModal} from "./RecipeModal";
import data from "../db/recipes.json";
import {GenericButtonModal} from "./GenericButtonModal";

type CardProps = {
    description: string
    index: number
    children: ReactNode
}

export const GenericCard = ({description, index,  children}: CardProps) => {
    {/*const [isModalOpen, setModalState] = React.useState(false);*/}
    {/*const toggleModal = () => setModalState(!isModalOpen);*/}

    return(
        <div className="flex w-full max-h-96 shadow-md rounded-t-md">
            <div className="flex-col overflow-hidden rounded-md w-full bg-white m-2">
                <img className="rounded-t-md" src="/sus.jpg"/>
                <h2 className="font-bold">{data[index].Name}</h2>

                <p className="p-2 text-left text-ellipsis line-clamp-3 ..." >{description}</p>

                <div className="z-20">
                    {/*<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={toggleModal}>Open Recipe</button>*/}
                    <GenericButtonModal
                        title={data[index].Name}
                        isFab={false}
                        children={
                            <RecipeModal
                                title={data[index].Name}
                                description={data[index].Description || "-"}
                                steps={data[index].Method}
                                ingredients={data[index].Ingredients}
                            />}
                    />
                </div>

            </div>
        </div>
    )
}