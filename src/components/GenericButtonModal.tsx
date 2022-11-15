import React, { useState } from "react";
import { FloatingActionButton } from "./FloatingActionButton";

type CreateRecipeModalProps = {
    title: string
    isFab: boolean
    isAddIcon?: boolean
    children?: React.ReactNode
}

export const GenericButtonModal = ({ title, isFab, isAddIcon, children }: CreateRecipeModalProps) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {isFab ? (
                <FloatingActionButton isAddIcon={ isAddIcon || false } onClick={() => setShowModal(true)}/>
            ) : (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => setShowModal(true)}>
                    Open Recipe
                </button>
            )}
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed
                        inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-4/5 my-6 mx-auto max-w-screen-2xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col
                            w-full bg-white outline-none focus:outline-none">
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
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2
                                        text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3
                                        rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
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
