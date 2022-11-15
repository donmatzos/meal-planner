import React, { useState } from "react";
import { FloatingActionButton } from "./FloatingActionButton";

type CreateRecipeModalProps = {
    title: string
    isAddIcon?: boolean
    children?: React.ReactNode
}

export const GenericButtonModal = ({ title, isAddIcon, children }: CreateRecipeModalProps) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <FloatingActionButton isAddIcon={ isAddIcon || false } onClick={() => setShowModal(true)}/>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed
                        inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-4/5 my-6 mx-auto max-w-screen-2xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col
                            w-full bg-zinc-900 text-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5
                                border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        { title }
                                    </h3>
                                    <button
                                        className="p-1 ml-auto text-black float-right
                                        text-3xl leading-none font-semibold"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <img src={"../icons/close.svg"} alt="close"/>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="flex-auto">
                                    { children }
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-white background-transparent font-bold uppercase px-6 py-2
                                        text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-violet-400 hover:bg-violet-500 font-bold py-2 px-4 rounded-full m-4 bottom-0"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Recipe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
