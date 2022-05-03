import React, { useState } from 'react';

function SumbitQ() {

  const [ company_name, setCompanyName ] = useState('');
  const [ interview_round, setInterviewRound ] = useState('');
  const [ job_description, setJobDescription ] = useState('');
  const [ job_type, setJobType] = useState('');
  const [ question_type, setQuestionType ] = useState('');
  const [ question_creator, setQuestionCreator ] = useState(''); //this is their username
  const [ question_name, setQuestionName ] = useState('');
  const [ question, setQuestion ] = useState('Enter your question here.');
  const [ answer, setAnswer ] = useState('Enter your answer here.');

  const handleSubmit = e => {
    e.preventDefault();

    fetch('', {
      method: 'POST',
      body: {
        company_name,
        interview_round,
        job_description,
        job_type,
        question_type,
        question_creator,
        question_name,
        question,
        answer
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return(
    <div className ='sumbitQuestion'>
      <h2>Submit Interview Question</h2>
      <form onSubmit = {handleSubmit}>
        <label>
          <p>Company Name:</p>
          <input type='text' onChange = {e => setCompanyName(e.target.value)} />
        </label>
        <label>
          <p>Interview Round</p>
        </label>   
          <select value = {interview_round} onChange = {e => setInterviewRound(e.target.value)}>
            <option value = '1st Round'>1st Round</option>
            <option value = '2nd Round'>2nd Round</option>
            <option value = '3rd Round'>3rd Round</option>
            <option value = 'On Site'>On Site</option>
          </select>  
        <label>
          <p>Job Description:</p>
          <input type='text' onChange = {e => setJobDescription(e.target.value)} />        
        </label>

        <label>
          <p>Job Type:</p>
        </label>   
          <select value = {job_type} onChange = {e => setJobType(e.target.value)}>
            <option value = 'Frontend'>Frontend</option>
            <option value = 'Backend'>Backend</option>
            <option value = 'Fullstack'>Fullstack</option>
        </select>  

        <label>
          <p>Question Type:</p>
        </label>
          <select value = {question_type} onChange = {e => setQuestionType(e.target.value)}>
            <option value = 'Algorithm'>Algorithm</option>
            <option value = 'Behavioral'>Behavioral</option>
            <option value = 'System Design'>System Design</option>
            <option value = 'White Boarding'>White Boarding</option>
          </select>
          
        <label>
          <p>Question Name:</p>
          <input type='text' onChange = {e => {setQuestionName(e.target.value)}}/>
        </label>
        
        <label>
          <p>Question:</p>
        </label>
        <textarea value = {question} onChange = {e => setQuestion(e.target.value)} />

        <label>
          <p>Answer:</p>
        </label>  
        <textarea value ={answer} onChange = {e => setAnswer(e.target.value)} />
 

          <div>
            <button type='submit'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default SumbitQ;