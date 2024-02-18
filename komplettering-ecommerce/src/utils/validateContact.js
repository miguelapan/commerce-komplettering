export const validateContact = (formData, setError) => {
    const err = {}
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(formData.name.trim() === ''){
        err.name = 'NAME IS EMPTY'
    }
    if(formData.email.trim() === '') {
        err.email = 'EMAIL IS EMPTY'
    }else if(!emailRegex.test(formData.email.trim())){
        err.email = "INVALID EMAIL"
    }
    if(formData.message.trim() === '')
    err.message = 'MESSAGE IS EMPTY'

    setError(err)
    return Object.keys(err).length < 1
}