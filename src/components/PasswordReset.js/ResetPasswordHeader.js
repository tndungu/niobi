import React from 'react';
import './ResetPasswordHeader.scss';

export const ResetPasswordHeader = () => {
  return (
    <>
    <div className="header-section">
      <div className="welcome">
        <span> Forgot Password</span>
      </div>
      <div className="details">
        <span>Type In Your Email Address Below And We'll Send You An Email With Instructions On How To Create A New Password</span>
      </div>
    </div>
  </>
  )
}
