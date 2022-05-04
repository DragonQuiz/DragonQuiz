import React, {useState, useEffect} from 'react';
import Question from '../components/Question.jsx';
import { Link } from 'react-router-dom';


function ListQ(){
    const [questions, setQuestions] = useState([]);  
    const [isOpen, setIsOpen] = useState([]);

    useEffect(() => {
      fetch ('/api/getAllQuestions', {
        Headers: {'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then((data) => {
        const newArray = new Array(data.length).fill(false)
        setIsOpen(newArray)
        setQuestions(data);
      });
    }, [])

    const clickHandler = (index) => {
      if (!isOpen[index]) {
        const newIsOpen = JSON.parse(JSON.stringify(isOpen))
        newIsOpen[index] = true
        setIsOpen(newIsOpen);
      } else {
        const newIsOpen = JSON.parse(JSON.stringify(isOpen))
        newIsOpen[index] = false
        setIsOpen(newIsOpen);
      }
    }

    const result = [];

    for (let i = 0; i < questions.length; i++) {
      result.push(
      <div className="questionContainer" key={i}>
        <div className="generalInfo">
          <div className="info-item">
            <div className="title">Company</div>
            <div className="title-answer">{questions[i].company_name}</div>
          </div>
          <div className="info-item">
            <div className="title">Job Description</div>
            <div className="title-answer">{questions[i].job_description}</div>
          </div>
          <div className="info-item">
            <div className="title">Interview Round</div>
            <div className="title-answer">{questions[i].interview_round}</div>
          </div>
          <div className="info-item">
            <div className="title">Job Type</div>
            <div className="title-answer">{questions[i].job_type}</div>
          </div>
          <div className="info-item">
            <div className="title">Question Type</div>
            <div className="title-answer">{questions[i].question_type}</div>
          </div>
          <div className="info-item">
            <div className="title">Posted By</div>
            <div className="title-answer">{questions[i].question_creator}</div>
          </div>
          <div className="info-item">
            <div className="title">Question Name</div>
            <div className="title-answer">{questions[i].question_name}</div>
          </div>
        </div>
        <div className="question">
          <div>
            <div className="title" >Question</div>
            <div className="title-answer">{questions[i].question}</div>
          </div>
        </div>
        <div className='answer-container'>
          <button className="answerButton" onClick={() => clickHandler(i)}>{isOpen[i] ? 'Hide Answer' : 'Show Answer'}</button>
          <div className="answer">
              {isOpen[i] && <div className="title-answer">{questions[i].answer}</div>}
          </div>
        </div>
        

      </div>
      )
    }

    return (
      <div>
        <button className="filterButton">Filter Questions</button>
        {result}
      </div>
    );


    
}

export default ListQ;