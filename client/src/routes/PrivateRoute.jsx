import { Navigate } from "react-router-dom";
import React from "react";

 export const PrivateRoute = ({children}) => {

     const currentUser = false;
        
   if(!currentUser){
    return <Navigate to="/" replace={true}/>
   } return children
 
    
}

