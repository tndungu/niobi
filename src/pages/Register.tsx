import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {Link } from 'react-router-dom'
import {userActions } from '../_actions'
import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../index.css'
import { LoginHeader } from '../components/login/LoginHeader'
import { Logo } from '../components/login/Logo'

export const Register = () => {

    const [user,setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be atleast 6 characters")
        .required("Password is required"),

      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    });

    const handleSubmit = (e: any) => {
      console.log(e);
      
        if(e.email && e.password){
            //dispatch(userActions.register(e))
        }
    }

  return (
    <>
    <section>
    <div className="contentBx">
        <div className="formBx">
           <LoginHeader component="register"/>
           <Formik initialValues={user} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({errors, touched, isSubmitting}) =>(
                        <Form className='form-input'>
                            <div className='inputBx'>
                                <span>First Name</span>
                                <Field  name="firstName" type="text" placeholder="" className={'form-text form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback red" />
                            </div>
                            <div className='inputBx'>
                                <span>Last Name</span>
                                <Field  name="lastName" type="text" placeholder="" className={'form-text form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback red" />
                            </div>
                            <div className='inputBx'>
                                <span>Email</span>
                                <Field  name="email" type="text" placeholder="" className={'form-text form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback red" />
                            </div>
                            <div className='inputBx'>
                                <span>Password</span>
                                <Field name="password" placeholder="" type="password" className={'form-text form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className='inputBx'>
                                <span>Confirm Password</span>
                                <Field name="confirmPassword" placeholder="" type="password" className={'form-text form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
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
                <p>Already have an account? <Link className='link btn btn-link' to="../login">Login</Link></p>
            </div>
        </div>
    </div>
   <Logo />
</section>
</>
  )
}
