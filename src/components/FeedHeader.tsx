import logo from "../logo.svg";

export const FeedHeader = () => {
    return (
            <header className="App-header h-16">
                <div className="absolute bg-white w-full top-0">
                    <div className="flex h-full items-center">
                        <img
                            className="w-12 a"
                            src={logo}
                            alt="Meal Planner Logo"
                        ></img>
                        <h1 className="text-black text-left">Meal Planner</h1>
                    </div>
                </div>
            </header>
    );
};
