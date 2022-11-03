
import React from 'react';
import { history } from './_helpers';
import { Register } from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import { ForgotPassword } from './pages/ForgotPassword';
import { VerifyEmail } from './pages/VerifyEmail';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Admin } from './pages/Admin';
import { Payables } from './pages/Payables';
import { Suppliers } from './pages/Suppliers';
import { Payments } from './pages/Payments';
import { SidebarLayout } from './components/SidebarLayout';

export interface IAppProps {};

const App:React.FunctionComponent<IAppProps> = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path='verify-email' element={<VerifyEmail />} />
          <Route element={<SidebarLayout />}>
            <Route index element={<Dashboard/>} />
            <Route path='admin' element={<Admin />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='payables' element={<Payables />} />
            <Route path='suppliers' element={<Suppliers />} />
            <Route path='payments' element={<Payments />} />
            <Route path="*" element={<Login/>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
