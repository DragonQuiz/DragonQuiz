import React, { useState } from 'react';
import Homepage from './Homepage.jsx'

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
      <form onSubmit = {handleSubmit}>
        <label>
          <p>Username</p>
          <input type='text' onChange = {e => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type='password' onChange = {e => setPassword(e.target.value)} />
        </label>
        <input type='submit' value="login" />
      </form>
      <div>{invalid}</div>
    </div>
  )
}

export default Login;