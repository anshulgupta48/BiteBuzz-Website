import React from "react";
import mission from "../assets/mission.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

  


   
  

const Approach = () => {
    useEffect(()=>{
        AOS.init({duration:"900"})
    },[])
  return (
    <div className=" bg-white text-black" data-aos="fade-up" name="Mission">
      <div
        className="text-3xl mt-8 text-center font-bold "
        
      >
        <span className=" text-pink-600">▐</span> Our mission
      </div>
      <div className=" max-w-5xl flex flex-col md:flex-row gap-9  items-center  mx-auto">
        <div className="p-4 w-full md:w-1/2 text-center md:text-left" data-aos="fade-up">
          <p>
            We understand that your restaurant is not just a place offering food
            and drinks; it is an experience, a destination, and it has a
            personality. We research all the potential avenues that can be used
            for marketing restaurants and push the message as widely as
            possible. Our team specializes in building the narrative for your
            story and present it in a unique and special way to connect with the
            audience.
            <br />
           
            We use the power of social media to gather insights into trends
            relevant to your menu offerings and capitalize on them with timely
            and effective campaigns. By using the power of such trends, we make
            sure that we are not just part of the conversation but also the
            subject of it. 
            <br />
            We have hundreds of influencers on our database and we actively look
            for opportunities that can be tapped into for the exposure and reach
            of your restaurant. We contemplate the local market for generic and
            specific keywords, to ensure that your website is optimized for
            search engines to get the maximum traffic aboard.
          </p>
        </div>

        <img
          src={mission}
          alt=""
          className="w-full md:w-1/2  mix-blend-multiply" data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default Approach;
