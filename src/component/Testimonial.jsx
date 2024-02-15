import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/user.png";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';

const data = [
  {
    id: 1,
    name: "Shweta Vishwas",
    src: "Owner Grilled Restaurant",
    img: img,
    cmnt: "BiteBuzz transformed our restaurant’s digital landscape. Their Expert team seamlessly handled our social media, crafting Engaging content and implementing targeted ads. The Increased foot traffic and positive customer feedback speak Volumes about their effectiveness.",
  },
  {
    id: 2,
    name: "Shankar Verma",
    src: "Founder Vir Foods ",
    img: img,
    cmnt: "BiteBuzz exceeded our expectations in promoting our restaurant. Their attention to detail in social media management and influencer Marketing delivered real, measurable results. We’re grateful for the Boost in customer traffic and heightened brand recognition.",
  },
  {
    id: 3,
    name: "Rakesh Gupta",
    src: "Owner Ciciano Restaurant",
    img: img,
    cmnt: "BiteBuzz is more than a marketing agency; they are growth partners. From captivating content creation to effective paid ads, their Approach brought in a surge of customers. A reliable ally for any Restaurant business.",
  },
];

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint according to your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(()=>{
    AOS.init({duration:"500"})
},[])

  return (
    <div  className="w-3/4 mx-auto gap-5 h-full flex flex-col md:justify-center  ">
      <div className="text-3xl mt-8 text-center font-bold " data-aos="fade-up">
        <span className=" text-pink-600">▐</span> Testimonials
      </div>

      <p className="text-3xl font-bold text-center  text-pink-600" data-aos="fade-up">
        What our client say about us?
      </p>

      <div name="Testimonial" className="mt-10">
        <Slider {...settings}>
          {data.map(({ id, name, src, cmnt }) => (
            <div key={id} className="testimonial-card  mb-[60px] min-h-[450px] max shadow-sm shadow-black" data-aos="fade-up">
              <div className="bg-pink-600 h-[180px] rounded-t-xl flex justify-center items-center">
                <img
                  src={img}
                  alt=""
                  className="h-[120px] w-[120px] rounded-full object-cover  border-white   border-2  border-spacing-6"
                />
              </div>
              <div className="bg-white rounded-b-xl text-black  p-4">
                <p className="text-xl font-semibold text-center">{name}</p>
                <p className="text-center py-2">{src}</p>
                <p className="italic text-sm">"{cmnt}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
