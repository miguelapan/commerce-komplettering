import { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext} from '../../providers/AuthProvider'
import API_URLS from '../../utils/apiURL';
import { validateLogin } from '../../utils/validateLogin';
import FormInput from './FormInput';
import RegistrationForm from './RegistrationForm';

function LoginForm () {

    const {setIsLoggedIn} = useContext(AuthContext)
    
    const modalRef = useRef(null)
    const navigate = useNavigate()

    const {getToken, validationMessage} = useContext(AuthContext)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({})

    const handleChange = e => {
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(!validateLogin(formData, setError)){
            setError(err => ({
                ...err,
                main: 'ENTER ALL FIELDS CORRECT'
            }))
            return
        }
        else {
            const response = await getToken(API_URLS.POST_LOGIN, formData)
            if(response){
                console.log(response)
                setIsLoggedIn(true)
                navigate('/userpage')
            }
        }
    }

    return <>
    <dialog className='form-modal' ref={modalRef}>
            <RegistrationForm />
        </dialog>
    <h1>LOGIN</h1>
    <div className="form-justify">
                <form 
                className="form-style" 
                onSubmit={handleSubmit}
                noValidate>
              <FormInput 
              label="email" 
              name="email" 
              errorMsg={error.email}
              value={formData.email} 
              onChange={handleChange}
              />
              <FormInput 
              type="password" 
              label="password" 
              name="password" 
              errorMsg={error.password}
              value={formData.password}
              onChange={handleChange}
               />

               {error.main && <div className="main-error">{error.main}</div>}
               {validationMessage && <div className="">{validationMessage}</div>}
        <button>LOG IN</button>
    </form> 
        <button onClick={() => modalRef.current.showModal()} >NOT A USER YET?</button>
    </div>
        
    </>
}

export default LoginForm