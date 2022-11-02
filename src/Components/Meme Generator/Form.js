import React from 'react'
import memesData from './memesData';
import {useState} from 'react'
function Form(props) {
  const [memeImage, setMemeImage] = useState("")
  function randomImage() { 
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage((prevMemeImage) => { 
      return memesArray[randomNumber].url;
    })
    // const url = memesArray[randomNumber].url;
  }

  // function greeting(name) { 
  //   const date = new Date();
  //   const hours = date.getHours();
  //   let timeOfDay; 
  //   if(hours >= 4 && hours <= 11){
  //     timeOfDay = "Morning"
  //   }
  //   else if(hours >= 12 && hours < 17){
  //     timeOfDay = "Afternoon"
  //   }else if(hours >= 17 && hours < 20){
  //     timeOfDay = "Evening"
  //   }else { 
  //     timeOfDay = "Night"
  //   }
  //   return `Good ${timeOfDay}, ${name}`
  // }
  // console.log( greeting("Jane"));

  // const thingArray = ['Thing 1', 'Thing 2'];
  // const thingElement= thingArray.map(thing => <p>{thing}</p>)
  
  // function addItem(){ 
  //   const newThingText = `Thing ${thingArray.length + 1}`
  //   thingArray.push(newThingText)
  //   document.getElementById()
  //   console.log(thingArray);
  // } 

  return (
    <div className='form-container'>
        <div id='form'>
            <input type="text" placeholder='Input 1' id="input1" />
            <input type="text" placeholder='Input 2' id="input2" /><br />
              <img src={memeImage} alt="" />
            <input onClick={randomImage} type="button" value="Get a new meme image" />
        </div>
    </div>
  )
}

export default Form