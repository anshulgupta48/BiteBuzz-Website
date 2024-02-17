import React from "react";
import logo from "../assets/logo.png";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: "900" });
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row  text-black items-start mx-auto     justify-center md:gap-[220px] text-sm p-5 w-full">
        <div className="max-w-[300px]">
          <img src={logo} alt="" className="w-[120px] mix-blend-multiply" />
          <p className="mt-3 text-[16px]">
            Ignite your restaurant's success with our dynamic blend of strategic
            marketing, creative finesse, and digital mastery.
          </p>
          <div className="flex flex-row md:flex-row text-2xl gap-3 items-start justify-start mt-[20px]  ">
            <a href="https://www.instagram.com/bitebuzz.in?igsh=MXdpdmF3ejJscmVvdQ%3D%3D" target="_blank">
              <BiLogoInstagramAlt className="hover:text-pink-600 duration-150" />
            </a>
            <a href="https://wa.me/8218165335" target="_blank">
              <RiWhatsappFill className="hover:text-pink-600 duration-150" />
            </a>

            <SiLinkedin className="hover:text-pink-600 duration-150" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-[200px] mt-3">
          <ul className="cursor-pointer">
            <li className="font-bold text-[18px]">Useful links</li>
            <Link to="Home">
              <li className="mt-2 text-[18px] hover:text-pink-600 duration-200">Home</li>
            </Link>
            <Link to="Services">
              <li className="mt-2 text-[18px] hover:text-pink-600 duration-200">
                Services
              </li>
            </Link>
            <Link to="Testimonial">
              <li className="mt-2 text-[18px] hover:text-pink-600 duration-200">
                Testimonial
              </li>
            </Link>
            <Link to="FAQ">
              <li className="mt-2 text-[18px] hover:text-pink-600 duration-200">FAQ</li>
            </Link>
            <Link to="Contact">
              <li className="mt-2 text-[18px] hover:text-pink-600 duration-200">Contact</li>
            </Link>
          </ul>

          <ul>
          <li className="font-bold text-[18px]">Community</li>
          <li className="mt-2 hover:text-pink-600 duration-200 cursor-pointer text-[18px] ">
            Help center
          </li>
          <li className="mt-2 hover:text-pink-600 duration-200 cursor-pointer text-[18px]">
            Blogs
          </li>
          <li className="mt-2 hover:text-pink-600 duration-200 cursor-pointer text-[18px]">
            Newsletter
          </li>
          <li className="mt-2 hover:text-pink-600 duration-200 cursor-pointer text-[18px]">
            Suggestion
          </li>
        </ul>
        </div>

        
      </div>

      <div className="w-full h-[1px] opacity-50 mb-2 mx-auto bg-black"></div>
      <div className="md:flex  text-center justify-between w-4/5 mx-auto py-1  text-[12px]">
        <p>
          Copyright © 2024 || All Rights Reserved
          <a href="https://webexcep.in/"> BuzzBites</a>
        </p>

        <p>Design & Developed by <a href="https://webexcep.in/">Webexcep</a></p>
      </div>
    </div>
  );
};

export default Footer;
