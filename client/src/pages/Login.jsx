import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth"
import { useNavigate } from "react-router-dom";
const Login = () => {
 
  const {currentUser, siginWithGoogle} = UserAuth();

  //console.log(currentUser);
    const navigate = useNavigate()
   const handleLogin = async()=>{
       try{
           await siginWithGoogle()


       }catch(error){
          console.log(error);
       }

       

   }

   useEffect(()=>{
    if(currentUser){
        navigate("/chat")
    }
 
},[currentUser])

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there 👋!</h1>
            <p className="py-6">
              {" "}
              Join the conversation, meet new people ,and make connections in
              one shared room.
            </p>
            <button onClick={handleLogin} className="btn btn-primary">Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
