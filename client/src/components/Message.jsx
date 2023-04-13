import React from 'react'

const Message = ({message}) => {

  console.log(message);
  return (
    <div>


<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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