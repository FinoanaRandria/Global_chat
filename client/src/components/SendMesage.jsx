import React, {useState} from 'react'
import {AiOutlineSend} from 'react-icons/ai'
const SendMesage = () => {

   const [value ,setValue] = useState('')

  return (
    <div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg'>

      <form className='containerWrap flex'>
          <input value={value} onChange={ e=> setValue(e.target.value)} className='input w-full focus:outline-none bg-gray-100 rounded-r-none' type="text" />
          <button className=' flex w-auto bg-[#7005e7] text-white rounded-r-lg px-5 text-sm'> <span className='mt-4'><AiOutlineSend/></span> </button>
      </form>


    </div>
  )
}

export default SendMesage