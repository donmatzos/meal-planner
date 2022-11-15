type InputProps = {
    label: string
    placeholder: string
}

export const TextInput = ({ label, placeholder}: InputProps) => {
    return(
        <div className="border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4">
            <label className="text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5">
                {label}
            </label>
            <input className="w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md"
                   type="text"
                   placeholder={placeholder}/>
        </div>
    )
}