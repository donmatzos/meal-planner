import React, {useState} from "react";
import {GenericButtonModal} from "./GenericButtonModal";
import {RecipeCreationBody} from "./RecipeCreationBody";

type CollapsibleProps = {
    open?: boolean
    children?: React.ReactNode
    isAddIcon?: boolean
    title: string
    modalTitle?: string
}

export const Collapsible = ({ open, children, isAddIcon, title, modalTitle }: CollapsibleProps) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    }

    return(
        <>
            <div className="card mx-auto bg-white rounded-xl shadow-lg flex space-x-4 my-2">
                <div>
                    <button type="button"
                            className="btn flex w-screen p-1 justify-between bg-white rounded-lg
                            border border-gray-200 shadow-md hover:bg-slate-100 dark:hover:bg-slate-100
                            text-2xl font-semibold text-gray-900"
                            onClick={handleFilterOpening}>
                        &nbsp;
                        { title }
                        {!isOpen ? <span>&#8661;</span> : <span>&#215;</span>}
                    </button>
                    <div className="border-bottom">
                        <div>{isOpen
                            && <div className="p-3">
                                    {children}
                                </div>
                        }</div>
                        <div>{isOpen
                            && <GenericButtonModal
                                title={ modalTitle || "-" }
                                isAddIcon={ isAddIcon }
                                children={<RecipeCreationBody/>}/>
                        }</div>
                    </div>
                </div>

            </div>
        </>
    )
}

