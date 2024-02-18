function FormInput ({type, label, name, errorMsg, ...rest}) {
    return<>
    <div className="form-group">
        <label htmlFor={`${name}`}>{label}</label>
        <input type={type} name={`${name}`} {...rest}/>
        {errorMsg && <p className='invalid-input'>{errorMsg}</p>}
            </div>      
    </>
}

export default FormInput