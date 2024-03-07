import React from "react";
import "./animation.css";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { useIsLarge } from "../hooks/utils";
import ochi from "/assets/images/ochiLandingPage.jpg";

const LandingPage = () => {
  const isLarge = useIsLarge();
  return (
    // Data-scroll is a custom attribute that we use to initialize the scroll effect using Locomotive Scroll.
    <div
      data-scroll
      data-scroll-section
      data-scroll-offset="0, -100%"
      data-scroll-speed="-.3"
      data-scroll-position="top"
      className="w-full h-screen bg-[#e7e7e7] dark:bg-zinc-900 pt-2"
    >
      <div className="textstructure mt-36 lg:mt-44 px-[4vw]">
        {["We create", "Eye-opening", "Presentations"].map((text, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-baseline">
                {index === 1 && (
                  <motion.div
                    className="mr-[1vw] rounded-md -my-2 w-[12vw] h-[7.6vw] lg:w-[8vw] lg:h-[4.8vw] relative"
                    initial={{
                      width: "0%",
                    }}
                    animate={isLarge ? { width: "8vw" } : { width: "12vw" }}
                    transition={{
                      duration: 1.2,
                      ease: [0.86, 0, 0.07, 0.995],
                      cubicBezier: [0.86, 0, 0.07, 0.995],
                    }}
                  >
                    <img
                      src={ochi}
                      alt="ochi"
                      className="w-full h-full rounded-md"
                    />
                  </motion.div>
                )}
                <h1 className="uppercase text-[17vw] md:text-[12vw] lg:text-[7.5vw] font-foundersgrotesk leading-[12vw] md:leading-[9vw] lg:leading-[6vw]">
                  {text}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] dark:border-[#e7e7e7] border-zinc-800 mt-24 flex flex-col lg:flex-row items-start justify-between lg:items-center py-5 px-[4vw]">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-normal tracking-tight leading-none lg:my-0 my-3"
            >
              {item}
            </p>
          );
        })}
        <div className="button-animation start flex items-center gap-2 cursor-pointer">
          <div className="button-animation-child px-5 py-1 border-[1px] border-zinc-900 dark:border-[#e7e7e7] rounded-full mt-[1.5vw] lg:mt-0 font-normal text-md uppercase">
            Start the project
          </div>
          <div className="button-animation-child hidden lg:flex lg:items-center md:justify-center rounded-full">
            <GoArrowUpRight className="rounded-full border-[1px] border-zinc-900 dark:border-[#e7e7e7] w-9 h-9 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
