import {userConstants} from '../_constants'
import {userService } from '../_services'
import {history } from '../_helpers'
import { To } from 'history'

export const userActions = {
    login,
    logout,
    register
}

function login(user: any, from: To){
    return (dispatch: (arg0: { type: string; user?: any; error?: any }) => void) => {
        dispatch(request({user}))

        userService.login(user)
        .then(response => {
            return response.json()
        })
        .then(
            user => {
                if(user.statusCode == 200){
                    localStorage.setItem('user', JSON.stringify(user.data));
                    dispatch(success(user.data))
                    //dispatch(alertActions.success("Login successful"))
                    history.push(from)
                }else{
                    dispatch(failure(user.message))
                //dispatch(alertActions.error(user.message))
                }
                setTimeout(() =>{
                    window.location.reload()
                },2000)
                
            },
            error => {
                dispatch(failure(error.toString()))
                //dispatch(alertActions.error(error.toString()))
            }
        )
    }

    function request(user: { user: any }) {return {type: userConstants.LOGIN_REQUEST,user}}
    function success(user: any){return {type: userConstants.LOGIN_SUCCESS,user}}
    function failure(error: any) {return {type: userConstants.LOGIN_FAILURE,error}}
}

function logout(){
    userService.logout();
    return {type: userConstants.LOGOUT }
}

function register(user: any){
    return (dispatch: (arg0: { type: string; user?: any; error?: any }) => void) => {
        dispatch(request(user))

        userService.register(user)
        .then(response => {
            return response.json()
        })
        .then(
            user => {
                if(user.statusCode == 200){
                    dispatch(success(user));
                    //dispatch(alertActions.success('Registration successful'))
                    history.push('/login')
                }else{
                    dispatch(failure(user.message))
                //dispatch(alertActions.error(user.message))
                }
                setTimeout(() => {
                    window.location.reload()
                }, 4000);
            },
            error => {
                dispatch(failure(error.toString()))
                //dispatch(alertActions.error(error.toString()))
            }
        )
    }

    function request(user: any){return {type:userConstants.REGISTER_REQUEST,user}}
    function success(user: any) {return {type: userConstants.REGISTER_SUCCESS,user}}
    function failure(error: any) { return {type: userConstants.REGISTER_FAILURE,error}}
}
