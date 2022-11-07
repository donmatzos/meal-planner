type FloatingActionButtonProps = {
    icon: number
}

export const FloatingActionButton = ({icon}: FloatingActionButtonProps) => {
        return (
            <button /*onClick="buttonHandler()"*/
                className="fixed z-90 bottom-10 right-8 bg-slate-100 w-20 h-20
                rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl
                hover:bg-slate-300"
            >
                { icon === 0 ? <span>&#10133;</span> : <span>&#128190;</span>}
            </button>
        )
}