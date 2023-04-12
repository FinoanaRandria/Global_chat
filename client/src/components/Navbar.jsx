import React from 'react'
import {GiExitDoor} from 'react-icons/gi'
const Navbar = () => {
  return (
    <div className='navbar bg-[#7005e7] text-primary-content flex'>

<div className=" containerWrap justify-between ">
  <a className="btn btn-ghost normal-case text-xl">Echat 2.0</a>
   <button className='flex gap-2 '>Logout <span className='mt-1'><GiExitDoor/></span></button>
</div>
    </div>
  )
}

export default Navbar