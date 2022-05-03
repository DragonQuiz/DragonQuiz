import React from 'react';
import SubmitQ from '../components/SubmitQ.jsx'

function Main() {
  return(
    <div className='main'>
      <div className='flashcards'>
        {/* <Flashcards />
        <ListQ /> */}
        <SubmitQ />
      </div>
    </div>
  )
}

export default Main;