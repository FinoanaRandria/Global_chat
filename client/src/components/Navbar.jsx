import React from 'react'
import {GiExitDoor} from 'react-icons/gi'
import { UserAuth } from '../context/AuthContext'
const Navbar = () => {

      const {currentUser, logout } = UserAuth();

    const handleLogout = async () =>{
         try {
               await logout();
         } catch(error){

            console.log(error);
         }

    }

  return (
    <div className='navbar bg-[#7005e7] text-primary-content flex'>

<div className=" containerWrap justify-between ">
  <a className="btn btn-ghost normal-case text-xl">Echat 2.0</a>
   {currentUser ? <button onClick={handleLogout} className='flex gap-2 '>Logout<span className='mt-1'><GiExitDoor/></span></button> : ''}
</div>
    </div>
  )
}

export default Navbar