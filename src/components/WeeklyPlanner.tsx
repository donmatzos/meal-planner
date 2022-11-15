import React from "react";
import data from "../db/recipes.json";
import { GenericCard } from "./GenericCard";

export const WeeklyPlanner = () => {
    const days = [
        "Monday",
        "Thuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    return (
        <div className="pl-14 pr-14 justify-center bg-slate-800 w-screen h-screen fixed">
            <div className="grid gap-x-96 grid-cols-7 items-center h-screen overflow-x-auto grid-rows-1">
                {days.map((x, i) => (
                    <div className="w-100">
                        <GenericCard key={i} index={-1} description={x}>
                            <></>
                        </GenericCard>
                        <h2 className="pt-16 w-100 text-center text-white font-oswald text-3xl font-medium">{x}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};
