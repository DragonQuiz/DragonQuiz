import React from 'react';
import SubmitQ from './SubmitQ.jsx'
import ListQ from '../containers/ListQ.jsx';
import { Link } from 'react-router-dom'

function Homepage(props) {
  console.log('username', props.username)
  return(

    <div className='homepage'>
      <div className='container'>
        <div>
          <Link to="/flashCards"> <button>Flash Cards</button></Link>
        </div>
        <div>
          <Link to="/listQ"><button>List Questions</button> </Link>
        </div>
        <div>
          <Link to={`/submitQ/${props.username}`}><button>Submit Questions</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage;