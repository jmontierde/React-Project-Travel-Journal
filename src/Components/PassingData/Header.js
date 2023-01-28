import React from 'react'
import Body from './Body';
export default function Header(props) {

    
    return (
        <div>
            <h3>Current user: {props.user}</h3>
            
        </div>
    )
}
