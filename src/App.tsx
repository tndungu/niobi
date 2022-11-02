
import React from 'react';
import Home from './pages/Home';
import { history } from './_helpers';
import { Register } from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import { ForgotPassword } from './pages/ForgotPassword';
import { VerifyEmail } from './pages/VerifyEmail';

export interface IAppProps {};

const App:React.FunctionComponent<IAppProps> = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgotpassword" element={<ForgotPassword />}/>
      <Route path='verify-email' element={<VerifyEmail />}/>
    </Routes>
  </Router>
  );
}

export default App;
