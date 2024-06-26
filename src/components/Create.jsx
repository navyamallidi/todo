import React, { useState } from 'react'
import axios from 'axios' 

export default function Create() {
  const [task,settask] = useState()
  

  const handlechange = () => {
    axios.post('http://localhost:3001/add', {task:task})
    .then(result => {window.location.reload()})
    .catch(err => console.log(err))
  }
  return (
    <div>
        <input type='text' placeholder='enter task' onChange={(e)=>settask(e.target.value)}/>
        <button type='button' onClick={handlechange}>Add</button>
    </div>
  )
}
