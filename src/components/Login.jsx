import React, { useState } from 'react';

function Login() {
  const [ username, setUsername ] = useState();
  const [ password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/login', {
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
    //if we get valid response, redirect using conditional state 'validUser'
  }

  return(
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
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;