import React from 'react'
export default function Star(props) { // Passing data from child to parent component 
  const starIcon = props.isFilled ? "star-filled.png" : "starOff.png";
  return (
    <div>
       <img 
          src = {`./Image/${starIcon}`}
          className='card--favorite'
          alt="Stars" 
          onClick={(props.handleClick)}
          />
    </div>
  )
}
