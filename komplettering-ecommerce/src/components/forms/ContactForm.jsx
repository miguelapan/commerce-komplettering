import { useContext } from "react"
import { useState } from "react"
import { ProductContext } from "../../providers/ProductProvider"
import API_URLS from "../../utils/apiURL"
import { validateContact } from "../../utils/validateContact"
import FormInput from "./FormInput"

function ContactForm () {

    const {postMessage, validationMessage} = useContext(ProductContext)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [error, setError] = useState({})

    const handleChange = e => {
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(!validateContact(formData, setError)) {
            setError(err => ({
                ...err,
                main: 'ALL FIELDS NEEDS TO BE FILLED IN'
            }))
            return
        }else
        postMessage(API_URLS.POST_MESSAGES, formData)
    }

return <>
<h1>CONTACT</h1>
<div className="form-justify">
<form className="form-style" action="" onSubmit={handleSubmit} noValidate>
    {/* NAMN  */}
    <FormInput 
    label="NAME" 
    inputname="name-contact" 
    name="name"
    errorMsg={error.name}
    value={formData.name}
    onChange={handleChange}
    />
    {/* EMAIL */}
    <FormInput 
    type="email" 
    label="EMAIL" 
    name="email"
    inputname="email-contact" 
    errorMsg={error.email}
    value={formData.email}
    onChange={handleChange}
    />
    {/* MESSAGE  */}
    <FormInput 
    type="textarea" 
    label="message" 
    name="message"
    inputname="message-contact" 
    errorMsg={error.message}
    value={formData.message}
    onChange={handleChange}
    />

    {validationMessage && <div className="success-message">{validationMessage}</div>}

    <button>SUBMIT</button>
</form>
</div>
</>
}

export default ContactForm