import React from 'react'
import {useState} from 'react'
function State() {
    const [count, setCount] = useState(0);
 
    function increase(){  // prevCount is the previous value or value of count
        setCount(prevCount => prevCount + 1)
    }
    function decrease(){
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button  onClick={increase}>Increase</button>
            <button  onClick={decrease}>Decrease</button>


            {/* <button className='btn' onClick={() => setCount(count + 1)}>Increase</button>
            <button className='btn' onClick={() => setCount(count - 1)}>Decrease</button> */}
        </div>
    )
}

export default State