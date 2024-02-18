import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductContext } from "../../providers/ProductProvider"
import API_URLS from "../../utils/apiURL"
import { validateRegister } from "../../utils/validateRegister"
import FormInput from "./FormInput"

function RegistrationForm () {

    const {registerUser} = useContext(ProductContext)

    const navigate = useNavigate()

    const {validationMessage } = useContext(ProductContext)
    const [error, setError] = useState({})
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = e => {
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!validateRegister(formData, setError)){
            setError(err => ({
                ...err,
                main: 'FIELDS ARE INCORRECT'
            }))
            return
        }else {
            const {confirmPassword, ...excludedConfirmData} = formData;
            await registerUser(API_URLS.POST_REGISTER, excludedConfirmData)
            navigate('/login')
        }


    }

return <>

    <form className="form-modal-style" onSubmit={handleSubmit} >
        <h2>REGISTER A NEW USER</h2>
<FormInput 
name="email"
label="EMAIL"
errorMsg={error.email}
onChange={handleChange}
 />
<FormInput 
name="password"
label="PASSWORD"
type="password"
errorMsg={error.password}
onChange={handleChange}
 />
<FormInput 
name="confirmPassword"
label="CONFIRM PASSWORD"
type="password"
errorMsg={error.confirmPassword}
onChange={handleChange}
 />
 <button>SUBMIT NEW USER</button>
 {error.main && <div className="main-error">{error.main}</div>}
 {validationMessage && <div>{validationMessage}</div>}
    </form>
    </>
}

export default RegistrationForm