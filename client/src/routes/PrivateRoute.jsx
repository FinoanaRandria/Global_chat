import { Navigate } from "react-router-dom";
import React from "react";
import { UserAuth } from "../context/AuthContext";
 export const PrivateRoute = ({children}) => {

  const {currentUser} = UserAuth();
        console.log(currentUser);
   if(!currentUser){
    return <Navigate to="/" replace={true}/>
   } return children
 
    
}

