import { useState } from "react";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';






  
 



  
const FAQ = () => {

    useEffect(()=>{
        AOS.init({duration:"900"})
    },[])
  const [acc, setAcc] = useState({});

  const qa = [
    {
      id: 1,
      ques: "What is Restaurant Marketing?",
      ans: "Restaurant marketing is the way of promoting your food business online through various methods of digital marketing. It will help you to bring more customers to your store and improving your business. We BiteBuzz restaurant marketing agency help you to list your business on the top pages of google to increase your online visibility.",
    },
    {
      id: 2,
      ques: "Why is Restaurant Marketing important for you?",
      ans: "If you want to increase the number of people visiting your restaurant or café, it must be first known to the people around. Digital advertising will help your business get noticed and with our personalized Restaurant marketing plan, we will help you showcase your business online in no time.",
    },
    {
      id: 3,
      ques: "How long does it take to see results from restaurant marketing efforts?",
      ans: "The timeline for seeing results from restaurant marketing can vary depending on various factors such as your current online presence, competition, target audience, and the strategies implemented. Typically, you may start noticing improvements in your online visibility and customer engagement within a few weeks to a few months of implementing our marketing strategies.",
    },
    {
      id: 4,
      ques: " What sets BiteBuzz apart from other restaurant marketing agencies?",
      ans: "At BiteBuzz, we pride ourselves on our personalized approach to restaurant marketing. Our team consists of experienced professionals who are passionate about helping restaurants succeed. We take the time to understand your unique business goals, target audience, and competitive landscape to develop customized marketing strategies that deliver tangible results. Additionally, we prioritize transparency, communication, and ongoing support to ensure your satisfaction and success.",
    },
    {
      id: 5,
      ques: " How do I get started with BiteBuzz's restaurant marketing services?",
      ans: "Getting started with BiteBuzz is easy! Simply reach out to our team through our website or contact information provided. We'll schedule a consultation to discuss your restaurant's marketing needs, goals, and budget. From there, we'll create a tailored marketing plan designed to help your restaurant thrive in the digital world.",
    },
  ];

  const toggleAccordion = (id) => {
    setAcc((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div name="FAQ" className="w-full h-full  bg-gradient-to-r from-pink-400  to-pink-600 py-6">
      <h1 className="text-white text-xl md:text-3xl font-bold  text-center" data-aos="fade-up">
      <span className="text-white mr-2">▐</span>
        Frequently asked questions
      </h1>
      {qa.map(({ id, ques, ans }) => (
        <div
          key={id}
          data-aos="fade-up"
          className="p-4 bg-white w-5/6 mx-auto rounded-lg shadow-sm shadow-black   mt-[15px]"
        >
          <div className="py-[4px] ">
            <button
              onClick={() => toggleAccordion(id)}
              className="flex justify-between w-full text-left md:text-center"
            >
              <span>{ques}</span>
              <span className="font-bold text-2xl">{acc[id] ? "-" : "+"}</span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in text-slate-600 text-sm ${
                acc[id]
                  ? " grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className=" overflow-hidden">{ans}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
