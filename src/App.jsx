import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import AboutAnimate from "./components/AboutAnimate";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import ClientReview from "./components/ClientReview";
import Footer from "./components/Footer";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-zinc-900 dark:text-zinc-100 no-scrollbar overflow-y-auto bg-[#f1f1f1] dark:bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      {/* <AboutAnimate /> */}
      <Eyes />
      <Featured />
      <div className="bg-[#f1f1f1] dark:bg-zinc-900 flex items-center justify-center">
        <button className="flex gap-10 items-center px-[3vw] md:px-[2.5vw] lg:px-[2vw] py-[2vw] md:py-[1.5vw] lg:py-[1vw] uppercase bg-[#212121] hover:bg-black dark:bg-[#f1f1f1] dark:hover:bg-zinc-300 rounded-full text-white dark:text-zinc-900">
          View all casestudies
          <div className="w-2 h-2 bg-white dark:bg-zinc-900 rounded-full"></div>
        </button>
      </div>
      <ClientReview />
      <Footer />
    </div>
  );
}

export default App;
