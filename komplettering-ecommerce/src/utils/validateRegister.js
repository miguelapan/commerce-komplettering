export const validateRegister = (FormData, setError) => {
    const err = {}

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^.{6,}$/


    if(FormData.email.trim() === '') {
        err.email = 'YOU NEED TO ENTER AN EMAIL'
    }else if(!emailRegex.test(FormData.email)){
        err.email = "YOU NEED TO ENTER A VALID EMAIL"
    }
    if(FormData.password === ''){
        err.password = 'YOU MUST ENTER THIS FIELD'
    }else if(!passwordRegex.test(FormData.password)){
        err.password = 'PASSWORD MUST HAVE AT LEAST 6 CHARACTERS'
    }
    if(FormData.confirmPassword === ''){
        err.confirmPassword = 'YOU MUST ENTER THIS FIELD'
    }
    if(FormData.password !== FormData.confirmPassword){
        err.confirmPassword = 'PASSWORDS MUST MATCH'
    }
    setError(err)
    return Object.keys(err).length < 1
}