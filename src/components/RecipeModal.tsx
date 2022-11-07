import { ReactNode } from "react"

type RecipeModalProps = {
    description: string
    children: ReactNode
}

export const RecipeModal = ({ children, description }: RecipeModalProps) => {
    return (
        <div className="flex w-full">
            <div className="flex-col rounded-md w-full bg-white m-2">
                <h2>{children}</h2>
                <p className="p-2">{description}</p>
                <p>Description</p>
                <h2>Ingredients:</h2>
                <ul>
                    <li>...</li>
                </ul>
                <h2>Steps:</h2>
                <ul>
                    <li>...</li>
                </ul>
            </div>
        </div>

    );
};