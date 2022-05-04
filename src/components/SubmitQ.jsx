import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

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

  const { username } = useParams();
  console.log('submitQ username', username)

  const handleSubmit = e => {
    e.preventDefault();

    fetch('/api/createQuestion', {
      method: 'POST',
      body: {
        company_name,
        interview_round,
        job_description,
        job_type,
        question_type,
        question_name,
        question,
        answer,
        question_creator: username
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => { response.json()})
  }

  // console.log('username', props.username)
  return(
    <div className ='sumbitQuestion'>
      <div className='container'>
      <h1>{username}</h1>
      <h2>Submit Interview Question</h2>
      <form onSubmit = {handleSubmit}>
        <div>
        <label>
          <span>Company Name</span>
        </label>
        <input type='text' onChange = {e => setCompanyName(e.target.value)} />
        </div>
        <div>
        <label>
          <span>Interview Round</span>
        </label>   
          <select value = {interview_round} onChange = {e => setInterviewRound(e.target.value)}>
            <option value = '1st Round'>1st Round</option>
            <option value = '2nd Round'>2nd Round</option>
            <option value = '3rd Round'>3rd Round</option>
            <option value = 'On Site'>On Site</option>
          </select> 
        </div>
        <div>
        <label>
          <span>Job Description</span>
        </label>
          <input type='text' onChange = {e => setJobDescription(e.target.value)} />        
        </div>
        <div>
        <label>
          <span>Job Type</span>
        </label>   
          <select value = {job_type} onChange = {e => setJobType(e.target.value)}>
            <option value = 'Frontend'>Frontend</option>
            <option value = 'Backend'>Backend</option>
            <option value = 'Fullstack'>Fullstack</option>
        </select>  
        </div>

        <div>
        <label>
          <span>Question Type</span>
        </label>
          <select value = {question_type} onChange = {e => setQuestionType(e.target.value)}>
            <option value = 'Algorithm'>Algorithm</option>
            <option value = 'Behavioral'>Behavioral</option>
            <option value = 'System Design'>System Design</option>
            <option value = 'White Boarding'>White Boarding</option>
          </select>
        </div>
        <div>
        <label>
          <span>Question Name</span>
        </label>   
          <input type='text' onChange = {e => {setQuestionName(e.target.value)}}/>       
        </div>   
        <div>
        <label>
          <span>Question</span>
        </label>
        <textarea value = {question} onChange = {e => setQuestion(e.target.value)} />
        </div>
        <div>
        <label>
          <span>Answer</span>
        </label>  
        <textarea value ={answer} onChange = {e => setAnswer(e.target.value)} />
        </div>

        <input type='submit' />
      </form>
      </div>
    </div>
  )
}

export default SumbitQ;