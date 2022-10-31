import { useState,useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link,useLocation } from 'react-router-dom'
import {userActions } from '../_actions'
import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../index.css'
import { LoginHeader } from '../components/login/LoginHeader'
import { Logo } from '../components/login/Logo'

const Login = () => {
    const [inputs,setInputs] = useState({
        email:'',
        password:''
    })
    const [submitted, setSubmitted] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    })

    useEffect(() => {
        localStorage.removeItem('user')
    },[]);

 
    const handleSubmit = e => {
        console.log({email:e.email, password: e.password});

        setSubmitted(true)
        if(e.email && e.password){
            
            const {from } = location.state || {from: {pathname: "/"}}
            dispatch(userActions.login(e, from))
        }
    }

  return (
    <>
        <section>
        <div className="contentBx">
            <div className="formBx">
               <LoginHeader component="login" />
                <form>
                    <div className="inputBx">
                        <span>Username / Email Address</span>
                        <input type="text" name=""/>
                    </div>
                    <div className="inputBx">
                        <span>Password</span>
                        <input type="password" name=""/>
                    </div>
                    <div className="remember">
                        <span><Link className='link btn btn-link' to="../forgotpassword">Forgot Password</Link></span>
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" name=""/>Remember me</label>
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" name=""/>I agree to <a href="#">terms & conditions</a></label>
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Sign in" name=""/>
                    </div>
                </form>
                <div className="inputBx">
                    <p>Don't have an account?<Link className='link btn btn-link' to="../register">Create account</Link></p>
                </div>
            </div>
        </div>
       <Logo />
    </section>
    </>
  )
}

export default Login
