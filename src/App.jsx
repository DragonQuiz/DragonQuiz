import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import React from 'react';
import Login from './components/Login.jsx';
import Homepage from './components/Homepage.jsx'
import SumbitQ from './components/SubmitQ.jsx';

function App() {
  return(
    <div className='app'>
        <Link to="/login">Login</Link> | { " " }
        <Link to="/registration">Registration</Link>
    </div>
  )
}

export default App;