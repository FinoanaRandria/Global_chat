
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import React ,{createContext ,useState, useContext, useEffect} from 'react';
import { auth } from '../firebase/firebase';
//Auth context


const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);

//authentifiaction google 
const siginWithGoogle = ()=>{
   const provider  = new GoogleAuthProvider();
   signInWithRedirect(auth, provider)
} 
    
  const value = {

      currentUser,
      setCurrentUser,
      siginWithGoogle
  }

  //mise a jour du currentUser

    useEffect(()=>{

       const unsubscribe = onAuthStateChanged(auth, (user)=>{
          setCurrentUser(user)


          return unsubscribe
       })

    },[])


    return (
        <AuthContext.Provider value={value}>
             {children}
        </AuthContext.Provider>
    )

}


export const UserAuth =()=>{
     return useContext(AuthContext);
}