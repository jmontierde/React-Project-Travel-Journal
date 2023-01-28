import React from 'react'
import { useState } from 'react'
export default function Child(props) {
  
    const style = { 
      backgroundColor: props.on ? "blue" : "transparent"
    }

    // function changeColor() { 
    //   setOn(prevOn => !prevOn) // true and false 
    // }
    // {props.handleClick}
    return (                                              // Using the data from Parent Component  
      <div className='child' style={style} onClick={() => props.handleClick(props.id)}></div>
    )
}
