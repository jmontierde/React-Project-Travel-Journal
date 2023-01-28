import React from 'react'
import { useState } from 'react'
export default function Add() {

    // const [thing, setThing] = useState(['Thing 1']);
    const [thing, setThing] = useState(['Thing 1']);

    function addItem(){ 
        setThing((prevThing) => { 
            return [...prevThing, `Thing ${prevThing.length + 1}`]
        })
    }
    const thingElement = thing.map(element => <p key={element}>{element}</p>)
    console.log(thingElement);
    // function add() { 
    //     setThing(prevThing=> { 
    //         return [...prevThing, `Thing ${prevThing.length + 1}`]
    //     })
    // }
    // const thingElement = thing.map(element => <p key={element}>{element}</p>)
  return (
    <div>
        <h1>{thing}</h1>
        <button onClick={addItem}>Add Item</button>
    </div>
  )
}
