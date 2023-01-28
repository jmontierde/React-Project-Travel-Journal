import React from 'react'
import { useState } from 'react'
import boxes from './boxes'
import Child from './Child';

export default function Parent() {
  // const [squares, setSquares] = useState(boxes);

  // const squareElement = squares.map(square => (
  //   <Child key= {square.id} boxOn = {square.on}/>
  // ))

  const [squares, setSquares] = useState(boxes);

  function toggle(id){ // Getting the data from Child Component by parameter
    setSquares(prevSquare => { 
      const newSquare = [];
      for (let i = 0; i < prevSquare.length; i++){ //6
        const currentSquare = prevSquare[i]; // passing all number in currentSquare
        if(currentSquare.id === id){ // If you click the square it will return true
          const updateSquare = {   
            ...currentSquare,      // To prevent removing the square
            on: !currentSquare.on // Every render it will change the value either true or false
          }
          newSquare.push(updateSquare) 
        }else{
          newSquare.push(currentSquare);
        }
      }
      return newSquare;
    })
  }

  const squareElement = squares.map(square => (
    <Child 
    key={square.id}
    id={square.id} // Passing the data to Child component
    on = {square.on} 
    handleClick={toggle}/>
  ))


   


  return (
    <div>
      {squareElement}
    </div>
  )
}
