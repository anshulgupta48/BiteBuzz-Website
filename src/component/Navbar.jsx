import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png"


const Bar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "Mission",
    },
    {
      id: 4,
      link: "FAQ",
    },
    {
      id: 5,
      link: "Testimonial",
    }
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
   
    <div className={`flex justify-between w-full items-center h-24 px-4   sticky bg-transparent text-black top-0 z-[100] bg-white lg:overflow-hidden ${
      isScrolled ? 'shadow-md   shadow-gray-600' : ''
    }`}>
      <div className=" ml-2 lg:w-[150px] w-[90px]"><img src={logo} alt=""  /></div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-black hover:scale-105 duration-200 font-semibold hover:text-pink-600"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="md:hidden pr-4 z-10"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center   items-center h-screen w-1/2 absolute top-0 left-0 bg-gradient-to-b from-pink-600 to-pink-500 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer text-white text-xl py-3 font-bold hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
   
  );
};

export default Bar;