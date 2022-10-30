import React from 'react'
import memesData from './memesData';

function Form(props) {
  function randomImage() { 
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }

  const thingArray = ['Thing 1', 'Thing 2'];
  const thingElement= thingArray.map(thing => <p>{thing}</p>)
  
  function addItem(){ 
    const newThingText = `Thing ${thingArray.length + 1}`
    thingArray.push(newThingText)
    console.log(thingArray);
  } 

  return (
    <div className='form-container'>
        <div id='form'>
            <input type="text" placeholder='Input 1' id="input1" />
            <input type="text" placeholder='Input 2' id="input2" /><br />
            <input onClick={addItem} type="button" value="Get a new meme image" />
            {thingArray}
        </div>
    </div>
  )
}

export default Form