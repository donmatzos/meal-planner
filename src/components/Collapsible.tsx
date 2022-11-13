import React, {useState} from "react";
import {FloatingActionButton} from "./FloatingActionButton";

type CollapsibleProps = {
    open?: boolean
    children?: React.ReactNode
    title: string
}

export const Collapsible = ({ open, children, title }: CollapsibleProps) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return(
        <>
            <div className="card mx-auto bg-white rounded-xl shadow-lg flex space-x-4">
                <div>
                    <button type="button"
                            className="btn flex w-screen p-1 justify-between bg-white rounded-lg
                            border border-gray-200 shadow-md hover:bg-slate-100 dark:hover:bg-slate-100
                            text-2xl font-bold text-gray-900"
                            onClick={handleFilterOpening}>
                        &nbsp; {title} {!isOpen ? <span>&#8643;</span> : <span>&#215;</span>}
                    </button>
                    <div className="border-bottom">
                        <div>{isOpen && <div className="p-3">{children}</div>}</div>
                        <div>{isOpen && <FloatingActionButton icon={0} onClick={() => alert("clicked")}/>}</div>
                    </div>
                </div>

            </div>
        </>
    )
}