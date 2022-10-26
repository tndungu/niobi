
import Home from './pages/Home';
import { history } from './_helpers';
import { Register } from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <Router history={history}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </Router>
  );
}

export default App;
