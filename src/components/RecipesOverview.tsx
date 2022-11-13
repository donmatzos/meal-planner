import React from "react";
import data from "../db/recipes.json"
import { GenericCard } from "./GenericCard";
import set = Reflect.set;
import { RecipeModal} from "./RecipeModal";


export const RecipesOverview = () => {
    const [isModalOpen, setModalState] = React.useState(false);
    const toggleModal = () => setModalState(!isModalOpen);

    return (
        <div className="justify-center">
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
            <div className="grid grid-cols-6 grid-rows-3">
                {data.map((dat, index) => <GenericCard key={index} description={dat.Description || "-"}>{dat.Name}</GenericCard>)}
            </div>
        </div>
    );
}