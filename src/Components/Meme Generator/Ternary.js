import React from 'react'
import {useState} from 'react'
function Ternary() {
    const [isGoingOut, setIsGointOut] = useState(true)

    // function click(){ 
    //     setIsGointOut(prevIsGoingOut => { 
    //         return prevIsGoingOut = "NO"
    //     })
    // }
     // OR
    // let answer = isGoingOut? "Yes" : "No" 
    // You can put it here in the 
  return (
    <div>
        <h1>{isGoingOut ? "Yes" : "No"}</h1> 
        
        <button onClick={() => setIsGointOut(prevSetGoingOut => !prevSetGoingOut)}>Hello</button>
    </div>
  )
}

export default Ternary