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
      <div className='container'>
        <h2>Welcome</h2>
        <form onSubmit = {handleSubmit}>
        <div className='inputDiv'>
          <input type='text' className = 'username' placeholder = 'Username' onChange = {e => setUsername(e.target.value)} />
          <input type='password' className = 'password' placeholder = 'Password' onChange = {e => setPassword(e.target.value)} />
        </div>
          <input type='submit' className='submit' id='login' value='Sign In' />
      </form>
      </div>

    </div>
  )
}

export default Login;