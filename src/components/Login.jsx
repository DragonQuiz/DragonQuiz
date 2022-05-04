import React, { useState } from 'react';
import Homepage from './Homepage.jsx'
import { Link } from 'react-router-dom';

function Login() {
  const [ username, setUsername ] = useState();
  const [ password, setPassword] = useState();
  const [ invalid, setInvalid] = useState('');
  const [ verified, setVerified] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (typeof data === 'string') {
        setInvalid(data)
      }else {
        setVerified(true)
      }
    })
    //if we get valid response, redirect using conditional state 'validUser'
  }

  return(
    verified ? <Homepage username={username}/> : 
    <div className ='login'>
      <div className='container'>
        <h2>Welcome</h2>
        <form onSubmit = {handleSubmit}>
        <div className='inputDiv'>
          <input type='text' className = 'username' placeholder = 'Username' onChange = {e => setUsername(e.target.value)} />
          <input type='password' className = 'password' placeholder = 'Password' onChange = {e => setPassword(e.target.value)} />
        </div>
          <input type='submit' className='submit' id='login' value='Sign In' />
      </form>
      <div>{invalid}</div>
      </div>
      <div className='link' id='registration'>
        <Link id="createAccount" to="/registration" >Create Account</Link>
      </div>
    </div>
  )
}

export default Login;