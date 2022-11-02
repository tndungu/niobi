import { combineReducers } from "@reduxjs/toolkit"
import {registration } from './registration.reducer'
import {authentication } from './authentication.reducer'
 
const rootReducer = combineReducers({
    authentication,
    registration,
})

export default rootReducer