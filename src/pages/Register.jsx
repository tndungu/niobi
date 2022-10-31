import {useEffect, useState} from 'react'
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

    const handleSubmit = e => {

      const req = {
        firstName:e.firstName,
        lastName: e.lastName,
        email: e.email,
        password:e.password
      };

      console.log(req);
      
        if(e.email && e.password){
            dispatch(userActions.register(e))
        }
    }

  return (
    <>
    <section>
    <div className="contentBx">
        <div className="formBx">
           <LoginHeader component="register"/>
            <form>
            <div className="inputBx">
                    <span>First Name</span>
                    <input type="text" name=""/>
                </div>
                <div className="inputBx">
                    <span>Last Name</span>
                    <input type="text" name=""/>
                </div>
                <div className="inputBx">
                    <span>Email</span>
                    <input type="text" name=""/>
                </div>
                <div className="inputBx">
                    <span>Password</span>
                    <input type="password" name=""/>
                </div>
                <div className="inputBx">
                    <span>Confirm Password</span>
                    <input type="password" name=""/>
                </div>
                
                <div className="inputBx">
                    <input type="submit" value="Submit" name=""/>
                </div>
            </form>
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
