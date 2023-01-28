import React, { useEffect } from 'react'
import memesData from './memesData';
import {useState} from 'react'
function Form(props) {

  const [meme, setMeme] = useState({ 
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg", //Pang unang Image
  })

  const [allMemesImage, setAllMemesImage] = useState([]);

  // Fetching the Memes API 
  useEffect(() => { 
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setAllMemesImage(data.data.memes))
  }, [])


  // To Get the image randomly
  function getMemeImage(){ 
    const randomMeme = Math.floor(Math.random() * allMemesImage.length);
    const url = allMemesImage[randomMeme].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }))
  }

  // Tracking all inputs 
  function handleChange(e){
    const {name, value} = e.target;

    setMeme(prevMeme => { 
      return { 
        ...prevMeme,
        [name]: value
      }
    })
  }
  console.log(meme.topText)


  return (
    <div className='form-container'>
        <div id='form'>
            <input type="text" placeholder='Top Text' name='topText' value={meme.topText}  onChange={handleChange}/>
            <input type="text" placeholder='Bottom Text' name='bottomText' value={meme.bottomText}  onChange={handleChange}/>
            <br/>
            <input onClick={getMemeImage} type="button" value="Get a new meme image" />
        </div>
        <div className="meme">
          <img src={meme.randomImage} alt="" />
          <h2 className='meme--text top'>{meme.topText}</h2>
          <h2 className='meme--text bottom'>{meme.bottomText}</h2>

        </div>
    </div>
  )
}

export default Form