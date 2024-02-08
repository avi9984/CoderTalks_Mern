import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';
import Authenticate from "./pages/Authenticate/Authenticate.jsx";
import Activate from './pages/Activate/Activate.jsx';

const isAuth = false;  // Your authentication logic here

function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuth) {
      navigate('/rooms');
    }

  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth" element={<Authenticate />} />
      <Route path="/activate" element={<Activate />} />
    </Routes>
  );
}

export default App;
