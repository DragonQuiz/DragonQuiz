import React, { useState } from 'react';

function Login() {
  const [ userName, setUserName ] = useState();
  const [ password, setPassword] = useState();

  const handleSubmit = e => {

  }

  return(
    <div className ='login'>
      <form onSubmit = {handleSubmit}>
        <label>
          <p>Username</p>
          <input type='text' onChange = {e => setUserName(e.target.value)} />
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