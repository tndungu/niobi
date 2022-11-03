import React, {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import {userActions } from '../_actions'

export const Dashboard = () => {
  const dispatch = useDispatch()
  //const loggedIn = useSelector(state => state.authentication.loggedIn)
  
   useEffect(() => {
        // if(!loggedIn)
        //   dispatch(userActions.logout())
    },[]);

  return (
      <div>
         <h3>Dashboard Here!!</h3>
      </div>
  )
}
