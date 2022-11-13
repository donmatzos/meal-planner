import React, { ReactNode } from "react"
import {RecipeModal} from "./RecipeModal";
import data from "../db/recipes.json";

type CardProps = {
    description: string
    children: ReactNode
}

export const GenericCard = ({  children, description}: CardProps) => {
    const [isModalOpen, setModalState] = React.useState(false);
    const toggleModal = () => setModalState(!isModalOpen);

    return(
        <div className="flex w-full max-h-96 shadow-md rounded-t-md">
            <div className="flex-col overflow-hidden rounded-md w-full bg-white m-2">
                <img className="rounded-t-md" src="/sus.jpg"/>
                <h2>{children}</h2>

                <p className="p-2 text-left text-ellipsis">{description}</p>

                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={toggleModal}>Open Recipe</button>
                    <div className="flex justify-center bg-white fixed w-0.8">
                        <RecipeModal
                            title={data[0].Name}
                            description={data[0].Description || "-"}
                            steps={data[0].Method}
                            ingredients={data[0].Ingredients}
                            isOpen={isModalOpen}
                            onClose={toggleModal}
                        />

                    </div>
                </div>

            </div>
        </div>
    )
}