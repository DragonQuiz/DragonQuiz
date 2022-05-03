import React, { useState } from 'react';

function SumbitQ() {

  const [ question, setQuestion ] = useState();
  const [ company, setCompany ] = useState();
  const [ round, setRound ] = useState();

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
            <p>Company</p>
            <input type='text' onChange = {e => setCompany(e.target.value)} />
          </label>
          <label>
          <p>Interview Round</p>
            <input type='text' onChange = {e => setRound(e.target.value)} />
          </label>        
          <div>
            <button type='submit'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default SumbitQ;