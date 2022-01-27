function InputPassword({ attributes, handleChange, params} ) {
    return (
        <div className="input-wrapper mt-4">
            <input
                id={attributes.id}
                type={attributes.type}
                name={attributes.name}
                placeholder={attributes.placeholder}
                onChange={(e) => {handleChange(e.target.name, e.target.value)}}
                className={params ? 'pt-2 pr-2 pb-2 pl-8 outline-none rounded-md w-10/12 bg-gray-100 border-2 border-red-300 text-red-400': "form-input-signin w-10/12 bg-gray-100"}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        </div>
    )
}

export default InputPassword