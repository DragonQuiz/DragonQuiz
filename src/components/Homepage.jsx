import React from 'react';
import SubmitQ from './SubmitQ.jsx'
import ListQ from '../containers/ListQ.jsx';
import { Link } from 'react-router-dom'

function Homepage(props) {
  console.log('props', props)
  return(

    <div className='homepage'>
    <div>Nav bar: username</div>
        <Link to="/flashCards"> <button>Flash Cards</button></Link>
        <Link to="/listQ"><button>List Questions</button> </Link>
        <Link to="/submitQ" username = {props.username}><button>Submit Questions</button></Link>
    </div>
  )
}

export default Homepage;