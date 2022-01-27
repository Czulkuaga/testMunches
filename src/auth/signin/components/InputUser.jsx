function InputUser({ attributes, handleChange} ) {
    return (
        <div className="input-wrapper">
            <input
                id={attributes.id}
                type={attributes.type}
                name={attributes.name}
                placeholder={attributes.placeholder}
                onChange={(e) => {handleChange(e.target.name, e.target.value)}}
                className="form-input-signin w-10/12 bg-gray-100"
                autoFocus />
            <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </div>
    )
}

export default InputUser