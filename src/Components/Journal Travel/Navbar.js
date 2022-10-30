import React from 'react'
import { FaGlobe } from 'react-icons/fa';
// import {FaGlobeAsia} from 'react-icons/fa';
function Navbar() { 
    return(
        <div className='nav'>   
            <FaGlobe /> <span className='nav--span'>myTravelJournal</span>
        </div>
    )
}
export default Navbar