import React from 'react'
import { Logo } from '../components/login/Logo'
import { ResetPasswordHeader } from '../components/PasswordReset/ResetPasswordHeader'
import './Pages.css';

export const ForgotPassword = () => {
  return (
    <>
    <section>
    <div className="contentBx">
        <div className="formBx resetpassword-header">
        <ResetPasswordHeader />
            <form>
                <div className="inputBx">
                    <span>Email Address</span>
                    <input type="text" name=""/>
                </div>
                
                <div className="inputBx">
                    <input type="submit" value="Reset Password" name=""/>
                </div>
            </form>
        </div>
    </div>
   <Logo />
</section>
</>
  )
}
