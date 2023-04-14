import React, { useEffect, useState ,useRef } from "react";
import Message from "./Message";
import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ChatBox = () => {
  const [messages ,setMassages] = useState([])
   const ScrollTobottom = ()=>{

      messagesEndRef.current.scrollIntoView({behavior: 'smooth'})
   }

   useEffect(ScrollTobottom,[messages])

  useEffect(() => {
    const q = query(collection(db, "messages"),
    
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
       messages.push({...doc.data(), id: doc.id});
        
      });
       setMassages(messages);
    });

     return () => unsubscribe
  }, []);
      const messagesEndRef = useRef()
  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
       <div ref={messagesEndRef}>

        
       </div>
    </div>
  );
};

export default ChatBox;
