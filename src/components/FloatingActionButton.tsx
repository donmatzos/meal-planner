type FloatingActionButtonProps = {
    isAddIcon: boolean
    onClick: () => void
}

export const FloatingActionButton = ({ isAddIcon, onClick }: FloatingActionButtonProps) => {
    return (
        <button onClick={onClick}
            className="fixed z-10 bottom-10 right-8 w-20 h-20
            rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl
            bg-slate-100 hover:bg-violet-500"
        >
            { isAddIcon ? <span>&#10133;</span> : <span>&#128190;</span>}
        </button>
    )
}