import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import React from 'react';
import Login from './components/Login.jsx';
import Homepage from './containers/Homepage.jsx'

function App() {
  return(
    <div className='app'>
      <div>
        <div>Dragon Quiz</div>
      </div>
        <Link to="/login">Login</Link> | { " " }
        <Link to="/registration">Registration</Link>
        <Outlet />
    </div>
  )
}

export default App;