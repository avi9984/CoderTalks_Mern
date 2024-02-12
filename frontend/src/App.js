import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register.jsx';
import Authenticate from './pages/Authenticate/Authenticate.jsx';
import Activate from './pages/Activate/Activate.jsx';
import Rooms from './pages/Rooms/Rooms.jsx';

const isAuth = false;
const user = { activated: false };

function App() {
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (isAuth && user.activated) {
  //     console.log('Navigating to /rooms');
  //     navigate('/rooms');
  //   } else if (!isAuth) {
  //     console.log('Navigating to /');
  //     navigate('/');
  //   } else if (isAuth && !user.activated) {
  //     console.log('Navigating to /activate');
  //     navigate('/activate');
  //   }
  // }, [isAuth, user.activated, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/authenticate" element={<Authenticate />} />
      <Route path="/activate" element={<Activate />} />
      <Route path="/rooms" element={<Rooms />} />
    </Routes>
  );
}

export default App;
