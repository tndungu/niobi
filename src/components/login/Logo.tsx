import React from "react";
import '../LoginHeader.css';

export const Logo = () => {
  return (
    <div className="imgBx">
      <div className="background-img">
        <img src="/assets/2.jpg" />
      </div>
      <img className="logo-niobi" src="/assets/niobi-logo-bg.png" />
      <img className="logo-corporate" src="/assets/corporate.jpg" />
    </div>
  );
};
