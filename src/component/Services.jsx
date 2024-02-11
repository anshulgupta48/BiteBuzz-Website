import React from "react";
import { useEffect } from "react";
import hero from "../assets/restro.jpg";
import cc from "../assets/cc.png";
import smm from "../assets/smm.png";
import pads from "../assets/pads.png";
import im from "../assets/im.png";
import yc from "../assets/yc.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: "500" });
  }, []);


  const cards = [
    {
      id: 1,
      img: cc,
      des: "Crafted narratives that leave a lasting impression.",
      name: "Content Creation",
    },
    {
      id: 2,
      img: smm,
      des: "Elevate your online presence, engage your audience, and build a dedicated community around your brand.",
      name: "Social Media Management",
    },
    {
      id: 3,
      img: pads,
      des: "Drive targeted traffic and boost reservations with effective advertising campaigns.",
      name: "Paid Ads",
    },
    {
      id: 4,
      img: im,
      des: "Leverage tastemakers to amplify your brand and reach a broader audience.",
      name: "Influencer Collaboration",
    },
    {
      id: 5,
      img: yc,
      des: "Engage your audience with captivating storytelling on YouTube, expanding your reach.",
      name: "YouTube Collaboration",
    },
  ];

  
  return (
    <div
      name="Services"
      className="relative h-full w-full flex items-center justify-center overflow-hidden   bg-gradient-to-br from-pink-600 to-pink-500 pb-[30px]"
    >
      {/* Hero image */}
      <img
        src={hero}
        alt=""
        className="hidden md:block transform scale-105 transition-transform duration-300 hover:scale-150 absolute inset-0"
      />
      <div className="hidden md:block soverlay absolute inset-0 opacity-80"></div>

      <div className="flex flex-col p-4 items-center justify-center">
        {/* Section title */}
        <div data-aos="fade-up" className="text-3xl text-white text-center font-bold mt-[-100px] absolute top-[170px]">
          <span className="text-white">▐</span> Our services
        </div>
        {/* Cards grid */}
        <div className="grid grid-cols-1  z-30 justify-center items-center gap-7 mt-[130px] md:grid-cols-3">
          {/* Mapping over cards */}
          {cards.map(({ id, img, des, name }) => (
            <div
              key={id}
              data-aos="fade-up"
              className="bg-white flex flex-col justify-center items-center  shadow-sm shadow-black rounded-lg p-3 w-[300px] h-[300px]   hover:scale-110 duration-200"
            >
              {/* Card image */}
              <img
                src={img}
                alt=""
                className="w-[180px] h-[170px] text-white bg-white"
              />
              {/* Card title */}
              <p className="font-bold text-pink-600 mt-2">{name}</p>
              {/* Card description */}
              <p>{des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
