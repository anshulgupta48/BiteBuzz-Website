import React from "react";
import logo from "../assets/logo.png";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from "react-scroll";






  
 

const Footer = () => {

  useEffect(()=>{
    AOS.init({duration:"900"})
},[])
  return (
    <div >
    <div className="flex flex-col md:flex-row  text-black items-center mx-auto  justify-evenly text-sm p-5 max-w-6xl">
      <img src={logo} alt=""  className="w-[120px] mix-blend-multiply" />
      <div className="flex gap-[100px]">
      <ul className="cursor-pointer">
        <li className="font-bold  ">Useful links</li>
       <Link to="Home"><li>Home</li></Link> 
        <Link to="Services"><li>Services</li></Link>
        <Link to="Testimonial"><li>Testimonial</li></Link>
        <Link to="FAQ"><li>FAQ</li></Link>
        <Link to="Contact"><li>Contact</li></Link>
      </ul>

      <ul >
        <li className="font-bold">Community</li>
        <li>Help center</li>
        <li>Blogs</li>
        <li>Newsletter</li>
        <li>Suggestion</li>
      </ul>
      </div>
      
      <div className="flex flex-row md:flex-row text-2xl gap-3 items-center justify-center  ">
        <BiLogoInstagramAlt className="hover:text-pink-600 duration-150" />
        <RiWhatsappFill className="hover:text-pink-600 duration-150" />
        <SiLinkedin className="hover:text-pink-600 duration-150" />
      </div>
    </div>

    <div className="w-4/5 h-[2px] opacity-50 mb-2 mx-auto bg-black"></div>
    <div className="flex flex-col text-center justify-between w-4/5 mx-auto py-2  text-[12px]">
        <p>Copyright © 2024  || All Rights Reserved <a href="https://webexcep.in/">Webexcep</a> </p>
        
        <p>Design & Developed by Farhan Muzaffar</p>
    </div>
    </div>
  );
};

export default Footer;
