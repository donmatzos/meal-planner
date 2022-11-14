import React from "react";

export const CreateRecipeBody = () => {

    return (
        <>
            <div className="bg-white">
                <form>
                    <label>
                        Title:
                        <input type="text" name="title" />
                    </label>
                </form>
                <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        I always felt like I could do anything. That’s the main
                        thing people are controlled by! Thoughts- their perception
                        of themselves! They're slowed down by their perception of
                        themselves. If you're taught you can’t do anything, you
                        won’t do anything. I was taught I could do everything.
                    </p>
                </div>
            </div>
        </>
    )
}