import React from 'react'
import { useEffect, useState } from 'react';
function API() {
    // const [starWarsData, setStarWarsData] = React.useState({});

    const [data, setData] = useState(null);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);
    useEffect(() => {
      const headers = { 'Authorization': 'rIQlyPMGTZb7Kr2wKH18OoyTUxhhwfPtv1F6mDy5jJdyeLS0erGbJ86Z' };
      const options = { headers };
      fetch('https://api.pexels.com/v1/photos/2014422', options)
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => {
          setError(error);
        });
    }, []); // [] = dependecies array - dapat laman ng dependencies is nasa loob ng function kapag wala sa function empty
  
    if (error) {
      return <p>{error}</p>
    }

 

    



    // It will render the component first before the useEffect

 
    return(
    <div>
        {/* <p>The count is {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
         <p>Data: {JSON.stringify(data)}</p> */}
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default API