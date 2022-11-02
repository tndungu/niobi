import {userConstants } from '../_constants/user.constants'


const initialState = {};

export function registration(state=initialState,action: { type: any }){
    switch(action.type){
        case userConstants.REGISTER_REQUEST:
            return {registering: true}
        case userConstants.REGISTER_SUCCESS:
            return {}
        case userConstants.REGISTER_FAILURE:
            return {}
        default:
            return state
    }
}