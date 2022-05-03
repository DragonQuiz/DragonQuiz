import React, {useState} from 'react';

function Flashcards() {
  const [ type, setType ] = useState('')
  return(
    <div className='flashcards'>
      <form>
        <label>Choose type:</label>
        <select>
          <option value = 'all'>All</option>
          <option value = 'company'>Company</option>
          <option value = 'round'>Round</option>
          <option value = 'type'>Type</option>
        </select>
      </form>
    </div>
  )
}

export default Flashcards;