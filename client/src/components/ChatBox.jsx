import React from "react";
import Message from "./Message";
const ChatBox = () => {

    const messages = [

      {

        id:1,
        text: 'hello there',
        name: 'Eiji'
      },{
           id:2,
           text: "whats'up bro",
           name: 'hosi no ko'
      }
    ]

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map(message => (
          <Message key={message.id} message={message}/>

      ))}
    </div>
  );
};

export default ChatBox;
