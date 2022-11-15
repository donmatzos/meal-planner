import React, { useState } from "react";
import { GenericButtonModal } from "./GenericButtonModal";
import { CreateRecipeBody } from "./CreateRecipeBody";
import { RecipesOverview } from "./RecipesOverview";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type MainContainerProps = {
    children?: React.ReactNode;
    title: string;
    modalTitle?: string;
};

export const MainContainer = ({
    children,
    title,
    modalTitle,
}: MainContainerProps) => {
    const recipe = useSelector((state:RootState) => state.changeCategory);

    const getCurrentView = () => {
        if (recipe.showRecipes) {
            return <RecipesOverview></RecipesOverview>;
        } else {
            return <div>Sus</div>
        }
    }

    return (
        <div className="card mx-auto w-100 h-100 bg-slate-800 shadow-lg flex ">
            <div className="border-bottom">
                <div>
                    {getCurrentView()}
                    {recipe.showRecipes && (
                        <GenericButtonModal
                            title={modalTitle || "-"}
                            isAddIcon={recipe.showRecipes}
                            children={<CreateRecipeBody />}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
