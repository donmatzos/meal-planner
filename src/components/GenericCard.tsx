import { ReactNode } from "react"

type CardProps = {
    description: string
    children: ReactNode
}

export const GenericCard = ({ children, description }: CardProps) => {
    return(
        <div className="flex w-full max-h-96 shadow-md rounded-t-md">
            <div className="flex-col overflow-hidden rounded-md w-full bg-white m-2">
                <img className="rounded-t-md" src="/sus.jpg"/>
                <h2>{children}</h2>
                <p className="p-2 text-left text-ellipsis">{description}</p>
            </div>
        </div>
    )
}