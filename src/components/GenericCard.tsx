import { ReactNode } from "react"

type CardProps = {
    description: string
    children: ReactNode
}

export const GenericCard = ({ children, description }: CardProps) => {
    return(
        <div className="flex w-full">
            <div className="flex-col rounded-md w-full bg-white m-2">
                <h2>{children}</h2>
                <p className="p-2">{description}</p>
            </div>
        </div>
    )
}