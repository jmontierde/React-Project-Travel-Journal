import React from 'react'
import { useState } from 'react'
import WindowTracker from './WindowTracker'

export default function Window() {
  const [show, setShow] = useState(true);


  return (
    <div className='window-container'>
  
        <button onClick={() => setShow(prevShow => !prevShow)}>Toggle WindowTracker</button>
        {show && <WindowTracker />}
    </div>
  )
}
