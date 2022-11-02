import React from 'react'
import {useState} from 'react'
import Star from './Star'
function Profile() {
    const [contact, setContact] = useState({ 
        firstName: 'John', 
        lastName: 'Doe',
        phone: '+1 (719) 555-1212',
        email: 'itsmyrealname@example.com',
        isFavorite: false,
    })

    let starIcon = contact.isFavorite ? "star-filled.png" : "star.png"> 

    function toggleFavorite(){ 
        console.log("tiggle")
    }

 
  return (
    <main>
        <article className='card'>
            <img className='proflie-img' src="./Image/profile.png" alt="" />
            <div className='card--info'>
            <Star isFilled ={contact.isFavorite}/>
                <img 
                    src = {`./Image/${starIcon}`}
                    className='card--favorite'
                    alt="Stars" 
                />
                <h2 className='card--name'>{contact.firstName}</h2>
                <p className='card--contact'>{contact.phone}</p>
                <p className='card--email'>{contact.email}</p>
            </div>
        </article>
    </main>
  )
}

export default Profile