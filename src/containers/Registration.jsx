import React, {useState } from 'react';
import Homepage from '../components/Homepage.jsx'
function Registration() {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [cohort, setCohort] = useState('');
  const [cohort_number, setCohortNumber] = useState(0);
  const [ verified, setVerified] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/createUser', {
      method: 'POST',
      body: JSON.stringify( {
        username,
        email,
        first_name,
        last_name,
        password,
        cohort,
        cohort_number,
      }),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(response => {
      if(response.locals.rows[0] === 'valid')
      setVerified(true)
    }) //check with backend on this value
  }  

  return(
    //if true, render homepage
    (verified) ? 
      <Homepage />
    :
    <div className ='register'>
      <form onSubmit = {handleSubmit}>
        <label>
          <p>First Name</p>
          <input type='text' onChange = {e => setFirstName(e.target.value)} />
        </label>
        <label>
          <p>Last Name</p>
          <input type='text' onChange = {e => setLastName(e.target.value)} />
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
          <input type='text' onChange = {e => setUserName(e.target.value)} />
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