import React from 'react';
import SubmitQ from '../components/SubmitQ.jsx'
import ListQ from '../components/ListQ.jsx';
import { Link } from 'react-router-dom'

function Homepage() {
  return(
    <div className='homepage'>
        <Link to="/flashCards"> <button>Flash Cards</button></Link>
        <Link to="/listQ"><button>List Questions</button> </Link>
        <Link to="/submitQ"><button>Submit Questions</button></Link>
    </div>
  )
}

export default Homepage;