import React, {useState } from 'react';

function Registration() {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [userFirstname, setFirstname] = useState();
  const [password, setPassword] = useState();
  const [cohort, setCohort] = useState();

  const handleSubmit = e => {

  }

  return(
    <div className ='register'>
      <form onSubmit = {handleSubmit}>
        <label>
          <p>First Name</p>
          <input type='text' onChange = {e => setFirstname(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
          <input type='text' onChange = {e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Cohort</p>
          <input type='text' onChange = {e => setCohort(e.target.value)} />
        </label>
        <label>
          <p>Username</p>
          <input type='text' onChange = {e => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type='password' onChange = {e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>    
  )

}
export default Registration;