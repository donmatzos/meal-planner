import React, { ReactNode } from "react"
import {RecipeModal} from "./RecipeModal";
import data from "../db/recipes.json";

type CardProps = {
    description: string
    index: number
    children: ReactNode
}

export const GenericCard = ({description, index,  children}: CardProps) => {
    const [isModalOpen, setModalState] = React.useState(false);
    const toggleModal = () => setModalState(!isModalOpen);

    return(
        <div className="flex w-full max-h-104 drop-shadow-lg rounded-t-md">
            <div className="flex-col justify-between overflow-hidden rounded-md w-full bg-white m-2">
                <img className="rounded-t-md object-cover w-full h-60" alt={data.recipe[index].name} src={data.recipe[index].image}/>
                <h2 className="font-bold truncate">{data.recipe[index].name}</h2>

                <p className="p-2 text-left text-ellipsis line-clamp-2 h-16 ..." >{description}</p>

                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4 bottom-0" onClick={toggleModal}>Open Recipe</button>
                    <div>
                        <RecipeModal
                            title={data.recipe[index].name}
                            description={data.recipe[index].description || "-"}
                            /*steps={data.recipe[index].Method}
                            ingredients={data.recipe[index].Ingredients}*/
                            isOpen={isModalOpen}
                            onClose={toggleModal}
                        />

                    </div>
                </div>

            </div>
        </div>
    )
}