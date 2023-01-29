import React, { useState } from 'react'
import { useEffect } from 'react'

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => { 
      function watchWidth(){ 
        console.log("Setting up");
        setWindowWidth(window.innerWidth)
      }

        window.addEventListener("resize", watchWidth)
        // Clean up any side effect
        return () => { 
          console.log("Cleaning Up");
          window.removeEventListener("resize", watchWidth)
        }
    }, [windowWidth])

  return (
    <div>
        Window width: {windowWidth}
    </div>
  )
}
