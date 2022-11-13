type FloatingActionButtonProps = {
    icon: number
    onClick: () => void
}

export const FloatingActionButton = ({icon, onClick}: FloatingActionButtonProps) => {
        return (
            <button onClick={onClick}
                className="fixed z-90 bottom-10 right-8 bg-slate-100 w-20 h-20
                rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl
                hover:bg-slate-300 dark:hover:bg-slate-300"
            >
                { icon === 0 ? <span>&#10133;</span> : <span>&#128190;</span>}
            </button>
        )
}