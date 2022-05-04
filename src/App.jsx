import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import React from 'react';
import Login from './components/Login.jsx';
import Homepage from './components/Homepage.jsx'
import SumbitQ from './components/SubmitQ.jsx';

function App() {
  return(
    <div className='app'>
      <div className='nav'>
        Dragon Quiz
      </div>
      <div className='links'>
        <div className='link'>
        {/* <Link to="/login" >Login</Link> */}
        <Login />
        </div>
    <div className='link' id='registration'>
    <Link to="/registration">Create Account</Link>
    </div>
      </div>
    </div>
  )
}

export default App;