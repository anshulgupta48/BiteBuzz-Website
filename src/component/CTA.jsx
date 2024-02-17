import React from 'react'
import { IoMdCall } from "react-icons/io";






const Feature = () => {
  


  return (
    <div name="Contact" className='bg-black w-full h-full py-[50px] flex flex-col items-center justify-center' >
    <h1 className='text-center text-white text-xl md:text-4xl  font-bold'>Ready to get more customers for your restaurant business?</h1>
    <a href="https://zcal.co/i/p_R2cOqM" className='mt-4  '>


 
      <button className='px-4 py-2 text-[15px] mt-3 bg-pink-600 text-white rounded-md flex  items-center gap-2 hover:bg-pink-400 duration-500'>
      <IoMdCall/>
        Get a free call now
   
      </button>
    </a>
  </div>
  
  )
}

export default Feature
