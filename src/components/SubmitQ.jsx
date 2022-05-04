import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import Homepage from './Homepage.jsx'

function SumbitQ() {

  const [ company_name, setCompanyName ] = useState('');
  const [ interview_round, setInterviewRound ] = useState('');
  const [ job_description, setJobDescription ] = useState('');
  const [ job_type, setJobType] = useState('');
  const [ question_type, setQuestionType ] = useState('');
  const [ question_creator, setQuestionCreator ] = useState(''); //this is their username
  const [ question_name, setQuestionName ] = useState('');
  const [ question, setQuestion ] = useState('');
  const [ answer, setAnswer ] = useState('');
  const [ submitted, setSubmitted ] = useState(false);

  const { username } = useParams();
  console.log('submitQ username', username)
  console.log('company_name', company_name)
  console.log('interview_round', interview_round)
  console.log('job_description', job_description)
  console.log('job_type', job_type)
  console.log('question_type', question_type)
  console.log('question_name', question_name)
  console.log('question', question)
  console.log('answer', answer)

  const handleSubmit = e => {
    e.preventDefault();
    console.log('inside fetch function to submit question to database');
    console.log('handleSubmit param', e);
    console.log('e.target', e.target[0].value);
    console.log('e.target', e.target[1].value);
    console.log('e.target', e.target[2].value);
    console.log('e.target', e.target[3].value);
    console.log('e.target', e.target[4].value);
    console.log('e.target', e.target[5].value);
    console.log('e.target', e.target[6].value);
    console.log('e.target', e.target[7].value);
   // { [{value: 0}]}

    fetch('/api/createQuestion', {
      method: 'POST',
      body: JSON.stringify({
        company_name,
        interview_round,
        job_description,
        job_type,
        question_type,
        question_name,
        question,
        answer,
        question_creator: username
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => { response.json()})
    .then(data => {
      setSubmitted(true)
      console.log('data', data)
    })
  }

  // console.log('username', props.username)
  return(
    submitted ? <Homepage username={username}/> :
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
            <option value=''>--Select A Round--</option>
            <option value = 'R1'>1st Round</option>
            <option value = 'R2'>2nd Round</option>
            <option value = 'R3'>3rd Round</option>
            <option value = 'OS'>On Site</option>
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
            <option value=''>--Select A Job Type--</option>
            <option value = 'FE'>Frontend</option>
            <option value = 'BE'>Backend</option>
            <option value = 'FS'>Fullstack</option>
        </select>  
        </div>
        <div className='question-type'>
        <label>
          <span>Question Type</span>
        </label>
          <select value = {question_type} onChange = {e => setQuestionType(e.target.value)}>
            <option value=''>--Select A Question Type--</option>
            <option value = 'Algorithm'>Algorithm</option>
            <option value = 'Behavioral'>Behavioral</option>
            <option value = 'System Design'>System Design</option>
            <option value = 'White Boarding'>White Boarding</option>
          </select>
        </div>
        <div>
        <label>
          <span>Question Title</span>
        </label>   
          <input type='text' onChange = {e => {setQuestionName(e.target.value)}}/>       
        </div>   
        <div>
        <label>
          <span>Question</span>
        </label>
        <textarea value = {question} placeholder ="Enter your question" onChange = {e => setQuestion(e.target.value)} />
        </div>
        <div>
        <label>
          <span>Answer</span>
        </label>  
        <textarea value ={answer} placeholder ="Enter your answer"  onChange = {e => setAnswer(e.target.value)} />
        </div>
        <div className='submitQuestionButton'>
        <input type='submit' />
        </div>
      </form>
      </div>
    </div>
  )
}

export default SumbitQ;