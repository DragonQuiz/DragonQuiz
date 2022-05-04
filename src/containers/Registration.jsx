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
  
  const [verified, setVerified] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/createUser', {
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
      console.log(response)
      setVerified(true)
      console.log('verified user');
    }) //check with backend on this value
  }  

  return(
    //if true, render homepage
    (verified) ? 
      <Homepage username={username}/>
    :
    <div className ='register'>
      <div className='container'>
      <h2>Sign up</h2>
      <form onSubmit = {handleSubmit}>
        <div>
          <label>
          <span>First Name</span>
          </label>
          <input type='text' onChange = {e => setFirstName(e.target.value)} />
        </div>
      <div>
        <label>
        <span>Last Name</span>
        </label>
        <input type='text' onChange = {e => setLastName(e.target.value)} />
      </div>
      <div>
        <label>
          <span>Email</span>
        </label>
        <input type='text' onChange = {e => setEmail(e.target.value)} />
      </div>
      <div className='cohort'>
      <label>Cohort:</label>
          <select value = {cohort} onChange = {e => setCohort(e.target.value)} >
            <option value=''>--Select A Cohort--</option>
            <option value='LA'>LA</option>
            <option value='NY'>NY</option>
            <option value='PTRI'>PTRI</option>
          </select>
      </div>
      <div>
        <label>
          <span>Cohort Number</span>
        </label>  
        <input type='text' onChange = {e => setCohortNumber(Number(e.target.value))} />
      </div>
      <div>
        <label>
          <span>Username</span>
        </label>
          <input type='text' onChange = {e => setUserName(e.target.value)} />
      </div>
      <div>
        <label>
          <span>Password</span>
        </label>
          <input type='password' onChange = {e => setPassword(e.target.value)} />
      </div>
      <div className='registerButton'>
        <input className='submit' type='submit' value ='submit' />
      </div>
      </form>
      </div>
    </div>    
  )

}
export default Registration;