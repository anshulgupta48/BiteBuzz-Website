import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Slider";
import Testimonial from "./component/Testimonial";
import Services from "./component/Services";
import Feature from "./component/CTA";
import Footer from "./component/Footer";
import FAQ from "./component/FAQ";
import Approach from "./component/Approach";

function App() {
  return (
    <div className="h-full w-full ">
      <Navbar />
      <Hero />
      <Services />
      <Approach />
      <FAQ />
      <Testimonial />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
