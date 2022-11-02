import {config} from '../api/config'
import {handleResponse } from '../_helpers'

export const userService = {
    login,
    logout,
    register
}

async function login(user){
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }
    const response = await fetch(`${config.apiUrl}/user/authenticate`, requestOptions)
    return handleResponse(response)
}

function logout(){

    localStorage.removeItem('user')
    window.location.href = '/login'
}

async function register(user){

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
    }
    const response = await fetch(`${config.apiUrl}/user/register`, requestOptions)
    return handleResponse(response)
}
