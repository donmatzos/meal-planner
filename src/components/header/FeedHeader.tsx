import { changeCategory } from "../../redux/categorySlice"
import { search } from "../../redux/recipeSlice"
import { useAppDispatch } from "../../redux/store"

export const FeedHeader = () => {
    const dispatch = useAppDispatch()

    return (
        <header className="App-header h-16">
            <div className="fixed z-10 bg-zinc-900 w-full h-16 drop-shadow-md top-0 font-oswald text-violet-400 font-medium">
                <div className="flex h-full items-center">
                    <h1 className="text-left font-oswald">🍴Meal Planner</h1>
                    <button
                        onClick={() => dispatch(changeCategory(false))}
                        className="hover:opacity-75 ml-4 pl-5 pr-5 text-center text-3xl h-full shadow-[inset_1px_0px_4px_rgba(0,0,0,0.6)]"
                    >
                        📅 Meal Planner
                    </button>
                    <button
                        onClick={() => dispatch(changeCategory(true))}
                        className="hover:opacity-75 pl-5 pr-5 text-center text-3xl h-full shadow-[inset_-1px_0px_4px_rgba(0,0,0,0.6)]"
                    >
                        🍔 Recipe List
                    </button>
                    <input
                        className="px-4 ml-2 h-2/3 text-lg rounded-full bg-slate-800"
                        placeholder="🔎 search for recipe..."
                        type="text"
                        onChange={(e) => dispatch(search(e.target.value))}
                    />
                </div>
            </div>
        </header>
    )
}
