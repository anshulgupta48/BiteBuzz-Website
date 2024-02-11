import React, { useEffect } from "react";
import her from "../assets/restaurant.jpg";
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(()=>{
        AOS.init({duration:"900"})
    },[])

  return (
    <div
      name="Home"
      className="relative h-full md:h-full w-full overflow-hidden "
     
    >
      <img
        src={her}
        alt=""
     
        className="w-full h-screen object-cover transform scale-105 transition-transform duration-300 hover:scale-125"
      />
      <div className="absolute inset-0 overlay bg-black opacity-80"></div>
      <div className="flex flex-col gap-2 justify-center p-4 items-center absolute inset-0"  >
        <h1  className=" text-white text-2xl md:text-4xl  font-bold text-center  font-poppins"  >
          Boost your online presence &
        </h1>

        <p className="text-2xl md:text-4xl text-pink-500 font-bold text-center px-2 md:p-0">
          drive more customers for your Restaurant
        </p>

        <p className=" text-xl text-white text-center max-w-4xl p-2 italic     font-normal text-[15px] " >
          "Make your restaurant shine online with Bite Buzz! We’ll help you get
          noticed and bring more hungry customers through your doors. Let’s make
          your digital presence a magnet for diners!"
        </p>

        <button className="text-white border border-white p-2 mt-5 border-dashed font-bold">
          <a href="mailto:realbitebuzz@gmail.com"> Get started now</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
