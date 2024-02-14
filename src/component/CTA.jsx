import React from 'react'
import { IoMdCall } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';





const Feature = () => {
  
  useEffect(()=>{
    AOS.init({duration:"900"})
},[])

  return (
    <div name="Contact" className='bg-black w-full h-full py-[50px] flex flex-col items-center justify-center' data-aos="fade-up">
    <h1 className='text-center text-white text-xl md:text-4xl  font-bold'>Ready to get more customers for your restaurant business?</h1>
    <a href="https://zcal.co/i/p_R2cOqM" className='mt-4  '>


 
      <button className='px-4 py-2 text-xl mt-3 bg-pink-600 text-white rounded-md flex  items-center gap-2'>
      <IoMdCall/>
        Get a free call now
   
      </button>
    </a>
  </div>
  
  )
}

export default Feature
