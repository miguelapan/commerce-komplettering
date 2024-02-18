export const validateLogin = (formData, setError) => {
    const err = {}

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^.{6,}$/

    if(formData.email.trim() === '') {
        err.email = 'YOU NEED TO ENTER AN EMAIL'
    }else if(formData.email.length < 3){
        err.email = 'YOUR email IS NOT LONG ENOUGH'
    }else if(!emailRegex.test(formData.email)){
        err.email = 'NOT A VALID EMAIL'
    }
    
    if(formData.password.trim() === '') {
        err.password = 'YOU NEED TO ENTER A PASSWORD'
    }else if(!passwordRegex.test(formData.password)){
        err.password = 'YOU NEED A VALID PASSWORD'
    }
    
    setError(err)
    return Object.keys(err).length < 1
}