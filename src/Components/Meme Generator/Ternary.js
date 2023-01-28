import React from 'react'
import {useState} from 'react'
function Ternary() {
    // const [isGoingOut, setIsGointOut] = useState(true);
    const [isGoingOut, setIsGoingOut] = useState(true);

    // You can use this kind of style, but it is good if you use the simplest way
    // function click(){ 
    //     // setIsGointOut(prevIsGoingOut => !prevIsGoingOut)
    //     setIsGointOut((prevIsGoingOut) => { 
    //         return prevIsGoingOut ? false : true; 
    //     })
    //     console.log(isGoingOut);
    // }
     // OR
    // let answer = isGoingOut? "Yes" : "No" 
    // You can put it here in the 
  return (
    <div>
      <h1>Do I feel like going out tonight?</h1>
      <h1>{isGoingOut ? "YES" : "NO"}</h1>
      <button onClick={() => setIsGoingOut(prevState => !prevState) }>Click Me</button>
      
    </div>
  )
}

export default Ternary