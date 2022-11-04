import logo from "../logo.svg";

export const FeedHeader = () => {
    return (
        <header>
            <header className="App-header">
                <div className="absolute bg-white w-full h-16 top-0">
                    <div className="flex h-full items-center">
                        <img
                            className="w-12"
                            src={logo}
                            alt="Meal Planner Logo"
                        ></img>
                        <h1 className="text-black text-left">Meal Planner</h1>
                    </div>
                </div>
            </header>
        </header>
    );
};
