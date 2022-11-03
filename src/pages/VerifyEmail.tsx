import React from 'react'
import { Link } from 'react-router-dom'
import { LoginHeader } from '../components/login/LoginHeader'
import { Logo } from '../components/login/Logo'

export const VerifyEmail = () => {
  return (
    <>
      <section>
        <div className="contentBx">
          <div className="formBx">

            <LoginHeader component="login" />
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
