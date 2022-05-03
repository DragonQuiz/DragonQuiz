import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Login from './containers/Login.jsx';
import RegistrationContain from './containers/RegistrationContain.jsx';

function App() {
  return(
    <div className='app'>
      <BrowserRouter>
        <div>hello world</div>
        <Login />
        <RegistrationContain />
      </BrowserRouter>
      
      {/* <Routes>
         <Route path="/login" component= {Login} /> 
      </Routes> */}
    </div>
  )
}

export default App;