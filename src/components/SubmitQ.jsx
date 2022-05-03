import React, { useState } from 'react';

function SumbitQ() {

  const [ question, setQuestion ] = useState('');
  const [ answer, setAnswer ] = useState('');
  const [ company, setCompany ] = useState('');
  const [ round, setRound ] = useState('');
  const [ type, setType ] = useState('');

  const handleSubmit = e => {

  }

  return(
    <div className ='sumbitQuestion'>
      <h2>Submit Interview Question</h2>
      <form onSubmit = {handleSubmit}>
        <label>
          <p>Question</p>
            <input type='textarea' name = 'textValue' onChange = {e => setQuestion(e.target.value)} />
          </label>
          <label>
          <p>Answer</p>
            <input type='textarea' name = 'textValue' onChange = {e => setAnswer(e.target.value)} />
          </label>
          <label>
            <p>Company</p>
            <input type='text' onChange = {e => setCompany(e.target.value)} />
          </label>
          <label>
          <p>Interview Round</p>
          </label>   
          <select value = {round} onChange = {e => setRound(e.target.value)}>
            <option value = '1st Round'>1st Round</option>
            <option value = '2nd Round'>2nd Round</option>
            <option value = '3rd Round'>3rd Round</option>
            <option value = 'On Site'>On Site</option>
            </select>     
          <label>
          <p>Type of Question</p>
          </label>
            <select value = {type} onChange = {e => setType(e.target.value)}>
            <option value = 'Algorithm'>Algorithm</option>
            <option value = 'Behavioral'>Behavioral</option>
            <option value = 'System Design'>System Design</option>
            <option value = 'White Boarding'>White Boarding</option>
            </select>
          <div>
            <button type='submit'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default SumbitQ;