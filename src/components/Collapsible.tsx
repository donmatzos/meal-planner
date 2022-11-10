import React, {useState} from "react";

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
                    <div className="block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                        <button type="button" className="btn text-2xl" onClick={handleFilterOpening}>
                            {!isOpen ? (
                                <span>&#8643;</span>
                            ) : (
                                <span>&#8639;</span>
                            )}
                        </button>
                    </div>
                </div>

                <div className="border-bottom">
                    <div>{isOpen && <div className="p-3">{children}</div>}</div>
                </div>
            </div>
        </>
    )
}