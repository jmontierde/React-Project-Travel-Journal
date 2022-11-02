import React from 'react'
import { useState } from 'react'
export default function Add() {

    const [thing, setThing] = useState(['Thing 1']);

    function add() { 
        setThing(prevThing => { 
            return [...prevThing, `Thing ${prevThing.length + 1}`]
        })
    }
    const thingElement = thing.map(element => <p key={element}>{element}</p>)
  return (
    <div>
        <h1>
            {thingElement}
        </h1>
        <button onClick={add}>Click Me</button>
    </div>
  )
}
