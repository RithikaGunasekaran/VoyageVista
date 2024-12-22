import React from "react";
import bgVideo from "./assets/vid.mov"
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import Services from "./components/Services/Services";
import Banner2 from "./components/Banner/Banner2"
import Footer from "./components/Footer/Footer";

import AOS from "aos"
import "aos/dist/aos.css"


const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
      <div>
        <div className='h-[500px] relative'>
          <video
          autoPlay loop muted
          className='fixed right-0 top-0 h-[500px] w-full object-cover z-[-1]'
          >
            <source src={bgVideo} type='video/mp4' />
          </video>
          <Navbar />
          <Hero />
        </div>

        <Services />
        <Banner />
        <Banner2 />
        <Footer />
      </div>


   )
}

export default App;
