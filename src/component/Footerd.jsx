import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-scroll";

const Footerd = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row   h-[30vh]  md:justify-between     max-w-7xl mx-auto mt-[20px] p-5">
  {/* First section */}
  <div className="flex flex-col gap-3">
    <h1 className="  text-[22px]">About BuzzBites</h1>
    <p className="md:max-w-[350px] w-full">
      Ignite your restaurant's success with our dynamic blend of strategic
      marketing, creative finesse, and digital mastery.
    </p>

    <div className="flex flex-row md:flex-row text-2xl gap-3 items-start justify-start ">
      <a href="https://www.instagram.com/bitebuzz.in?igsh=MXdpdmF3ejJscmVvdQ%3D%3D" target="_blank">
        <BiLogoInstagramAlt className="hover:text-pink-600 duration-150" />
      </a>
      <a href="https://wa.me/8218165335" target="_blank">
        <RiWhatsappFill className="hover:text-pink-600 duration-150" />
      </a>
      <SiLinkedin className="hover:text-pink-600 duration-150" />
    </div>
  </div>

  {/* Second and third sections */}
  <div className="flex flex-row md:flex-row gap-[160px] md:gap-[130px] py-3 ">
    {/* Second section */}
    <ul className="cursor-pointer">
      <li className=" text-[22px]">Useful links</li>
      <Link to="Home">
        <li className="mt-2 text-[15px] hover:text-pink-600 duration-200">Home</li>
      </Link>
      <Link to="Services">
        <li className="mt-2 text-[15px] hover:text-pink-600 duration-200">
          Services
        </li>
      </Link>
      <Link to="Testimonial">
        <li className="mt-2 text-[15px] hover:text-pink-600 duration-200">
          Testimonial
        </li>
      </Link>
      <Link to="FAQ">
        <li className="mt-2 text-[15px] hover:text-pink-600 duration-200">FAQ</li>
      </Link>
      <Link to="Contact">
        <li className="mt-2 text-[15px] hover:text-pink-600 duration-200">Contact</li>
      </Link>
    </ul>

    {/* Third section */}
    <ul>
      <li className="text-[22px]">Community</li>
      <li className="mt-2 hover:text-pink-600 duration-200 cursor-pointer text-[15px]">
        Help center
      </li>
      <li className="mt-2 hover:text-pink-600 duration-200 cursor-pointer text-[15px]">
        Blogs
      </li>
      <li className="mt-2 hover:text-pink-600 duration-200 cursor-pointer text-[15px]">
        Newsletter
      </li>
      <li className="mt-2 hover:text-pink-600 duration-200 cursor-pointer text-[15px]">
        Suggestion
      </li>
    </ul>
  </div>
</div>


</div>

  );
};

export default Footerd;
