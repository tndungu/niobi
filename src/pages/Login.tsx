import React from 'react'
import { useState,useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link,useLocation } from 'react-router-dom'
import {userActions } from '../_actions'
import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './Pages.css'
import { LoginHeader } from '../components/login/LoginHeader'
import { Logo } from '../components/login/Logo'
import showPwdImg from '../components/login/ShowPassword/show-password.svg';
import hidePwdImg from '../components/login/ShowPassword/hide-password.svg';


export interface ILogin {};

interface LoginValues {
    email: string,
    password: string,
    rememberMe: boolean,
    tandc: boolean
}

const Login : React.FunctionComponent<ILogin> = () => {
    const [inputs,setInputs] = useState<LoginValues>({
        email:'',
        password:'',
        rememberMe:false,
        tandc: false
    })
    const [submitted, setSubmitted] = useState(false)
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const dispatch = useDispatch()
    const location = useLocation()

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string().required('Password is required'),
        tandc : Yup.boolean().oneOf([true],'Please accept the Terms and Conditions')
    })

    useEffect(() => {
        localStorage.removeItem('user')
    },[]);

 
    const handleSubmit = (e: any) => {
        console.log("Login");
        console.log(e);

        setSubmitted(true)
        // if(e.target.email && e.password){
            
        //     const {from } = location.state || {from: {pathname: "/"}}
            //dispatch(userActions.login(e, from))
        //}
    }

  return (
    <>
        <section>
        <div className="contentBx">
            <div className="formBx">
               <LoginHeader component="login" />
                <Formik initialValues={inputs} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({errors, touched, isSubmitting, handleChange, values}) =>(
                        <Form className='form-input'>
                            <div className='inputBx'>
                                <span>Username / Email Address</span>
                                <Field  name="email" type="text" placeholder="Email" className={'form-text form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback red" />
                            </div>
                            <div className='inputBx'>
                                <span>Password</span>
                                <div className='pwd-container'>
                                    <Field name="password" placeholder="Password" type={isRevealPwd ? "text" : "password"} 
                                    className={'form-text form-control' + (errors.password && touched.password ? ' is-invalid' : '')} 
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    />
                                    <img title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? hidePwdImg : showPwdImg} onClick={() => setIsRevealPwd(prevState => !prevState)} />
                                </div>
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="remember">
                                <span><Link className='link btn btn-link' to="../forgotpassword">Forgot Password</Link></span>
                            </div>
                            <div className="remember">
                                <Field name="rememberMe" type="checkbox" className={'form-check-input' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <label>Remember me</label>
                            </div>
                            <div className="remember">
                                <Field name="tandc" type="checkbox" className={'form-check-input' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <label>I agree to <a href="#">terms & conditions</a></label>
                                <ErrorMessage name="tandc" component="div" className="invalid-feedback" />
                            </div>
                            <div className='inputBx'>
                                <button type="submit" disabled={isSubmitting} className="form-button">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Sign In
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="inputBx">
                    <p>Don't have an account? <Link to="../register">Create account</Link></p>
                </div>
            </div>
        </div>
       <Logo />
    </section>
    </>
  )}

export default Login
