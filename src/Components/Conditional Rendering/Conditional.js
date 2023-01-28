import React from 'react'

export default function Conditional() {
    const [messages, setMessages] = React.useState([]);

  return (
    <div>
        {
        messages.length === 0 ? 
        <h1>You're all caught up!</h1> : 
        <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1> 
        }
    </div>
  )
}
