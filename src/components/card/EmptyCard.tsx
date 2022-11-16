import { useAppDispatch } from "../../redux/store"
import { enableEditMode } from "../../redux/categorySlice"

type CardProps = {
    day: string
}

export const EmptyCard = ({ day }: CardProps) => {
    const dispatch = useAppDispatch()

    return (
        <div className="flex w-80 h-96 drop-shadow-lg rounded-t-md text-white">
            <div className="flex-col h-[26rem] justify-between overflow-hidden rounded-md w-full bg-zinc-900 m-2">
                <img
                    className="rounded-t-md object-cover w-full h-60"
                    alt={"Please choose recipe.."}
                    src={"insert_recipe.png"}
                />
                <p>Please choose recipe...</p>
                <h2 className="font-oswald text-2xl font-medium truncate">
                    {/*
                    {children}
*/}
                </h2>
                <div>
                    <button
                        className="bg-violet-600 hover:bg-violet-500 font-bold py-2 px-4 rounded-full m-4 bottom-0"
                        onClick={() =>
                            dispatch(enableEditMode({ enable: true, day: day }))
                        }
                    >
                        Add Recipe
                    </button>
                </div>
            </div>
        </div>
    )
}
