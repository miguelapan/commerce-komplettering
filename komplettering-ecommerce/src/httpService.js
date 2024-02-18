const handleHttpError = (error) => console.error(error);
const handleResponse = async(response) => {
    if(!response.ok){
        return handleHttpError('ERROR IN RESPONSE')
    }
    try{
        const data = await response.json()
        return { data }
    }catch(error){
        console.error(error)
        return handleHttpError('JSON PARSING ERROR')
    }
}

// GET ALL 

export const httpService = {
    get: async(url, token) => {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if(!response.ok) {
            return handleHttpError('HTTP ERROR IN HTTPSERVICE');
        }
        console.log("GET FETCH COMPLETE")
        return handleResponse(response)
    },

    // POST MESSAGE 
    post: async(url, message) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        if(!response.ok){
            return handleHttpError('RESPONSE POST !MESSAGE! NOT OK')
        }
        console.log(response)
        return handleResponse(response)
    },

    // REGISTER NEW USER / POST ORDER

    post: async(url, user, token) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(user)
        })
        if(!response.ok) {
            return handleHttpError('REGISTER NEW USER/POST ORDER FAILED IN FETCH')
        }
        return handleResponse(response)
    }
}











// AUTHENTICATION POST

export const loginService = {
    post: async(url, authentication) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authentication)
        });
        if(!response.ok){
            return handleHttpError('ERROR IN LOGIN SERVICE FETCH')
        }
        console.log('AUTHENTICATION IS OK')
        return handleResponse(response)
    }
}