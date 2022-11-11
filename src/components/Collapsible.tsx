import React, {useState} from "react";
import {FloatingActionButton} from "./FloatingActionButton";

type CollapsibleProps = {
    open?: boolean,
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
            <div className="card mx-auto bg-white rounded-xl shadow-lg flex space-x-4 justify-center">
                <div>
                    <div className="block flex w-screen justify-center bg-white rounded-lg border border-gray-200
                    shadow-md hover:bg-slate-100 dark:hover:bg-slate-100">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                        <button type="button" className="btn text-2xl" onClick={handleFilterOpening}>
                            {!isOpen ? <span>&#8643;</span> : <span>&#8639;</span>}
                        </button>
                    </div>
                    <div className="border-bottom">
                        <div>{isOpen && <div className="p-3">{children}</div>}</div>
                        <div>{isOpen && <FloatingActionButton icon={0}/>}</div>
                    </div>
                </div>

            </div>
        </>
    )
}