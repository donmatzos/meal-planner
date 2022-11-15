import { useSelector } from "react-redux";
import { changeCategory } from "../categorySlice";
import logo from "../logo.svg";
import { RootState, useAppDispatch } from "../store";

export const FeedHeader = () => {
    const dispatch = useAppDispatch();

    return (
            <header className="App-header h-16">
                <div className="absolute bg-white w-full h-16 drop-shadow-md top-0">
                    <div className="flex h-full items-center">
                        <img
                            className="w-12 a"
                            src={logo}
                            alt="Meal Planner Logo"
                        ></img>
                        <h1 className="text-black text-left">Meal Planner</h1>
                        <button onClick={() => dispatch(changeCategory(false))} className="hover:opacity-75 ml-4 pl-5 pr-5 text-center text-black text-3xl h-full shadow-[inset_1px_0px_4px_rgba(0,0,0,0.6)]">📅 Meal Planner</button>
                        <button onClick={() => dispatch(changeCategory(true))} className="hover:opacity-75 pl-5 pr-5 text-center text-black text-3xl h-full shadow-[inset_-1px_0px_4px_rgba(0,0,0,0.6)]">🍔 Recipe List</button>
                    </div>
                </div>
            </header>
    );
};
