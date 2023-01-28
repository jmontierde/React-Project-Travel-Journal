import React from 'react'
import {useState} from 'react'
import Star from './Star'


function Profile(){
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Joe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false,
    })


    function toggleFavorite() { 
        setContact(prevContact => { 
            return{ 
                ...prevContact,
                isFavorite: !prevContact.isFavorite,
            }
        })
    }

 
  return (
    <main>
        <article className='card'>

            <img className='proflie-img' src="./Image/profile.png" alt="" />
            <div className='card--info'>
                <Star isFilled={contact.isFavorite} handleClick ={toggleFavorite}/>
                <h2 className='card--name'>{contact.firstName}</h2>
                <p className='card--contact'>{contact.phone}</p>
                <p className='card--email'>{contact.email}</p>
            </div>
        </article>
    </main>
  )
}

export default Profile