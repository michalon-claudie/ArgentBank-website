import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/Sign_in';
import User from './Pages/User';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </Router>
  );
}

export default App;
