import React from 'react'
import { FaLandmark } from 'react-icons/fa';
function Main(props) { 
    return(
        <div className='container'>
            <div className='sub-container'>
                <img className='img-location' src = {props.img} alt={props.title} />
                <div className='details'>
                    <h5><FaLandmark/> {props.location}  <a href={props.googleMaps}>View on Google Maps</a></h5>
                    <h1 className='title'>{props.title}</h1>
                    <span className='schedule'>{props.startDate} - {props.endDate}</span>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
export default Main