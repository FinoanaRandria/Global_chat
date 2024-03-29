import React from 'react'
import {UserAuth} from '../context/AuthContext'
const Message = ({message}) => {
  const {currentUser} = UserAuth()
  console.log(message);
  return (
    <div>


<div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
    <img src={message.avatar}/>
    </div>
  </div>
  <div className="chat-header">
    {message.name}
  
  </div>
  <div className="chat-bubble chat-bubble-primary">{message.text}</div>
  <div className="chat-footer opacity-50">
   
  </div>
</div>


    </div>
  )
}

export default Message