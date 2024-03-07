import React from "react";
import { motion, useAnimation } from "framer-motion";

const FeaturedCard = (props) => {
  const { title, image, link, buttons, direction } = props;
  const animatedCard = useAnimation();
  const handleHoverStart = () => {
    animatedCard.start({
      y: "0%",
    });
  };
  const handleHoverEnd = () => {
    animatedCard.start({
      y: "100%",
    });
  };
  return (
    <div className="featuredCard">
      {/* Title */}
      <div className="uppercase flex items-center text-sm mb-4">
        <span className="w-3 h-3 flex-shrink-0 rounded-full bg-black dark:bg-zinc-100 mr-6"></span>
        <span className="font-medium tracking-tight text-lg">{title}</span>
      </div>
      {/* Image Card */}
      <motion.a
        onHoverStart={() => handleHoverStart()}
        onHoverEnd={() => handleHoverEnd()}
        className="cardContainer mb-6 relative block"
        href={link}
      >
        <h1
          className={`headline left-1/2 ${
            direction === "left" ? "md:left-full" : "md:left-0 "
          } absolute z-[9] leading-none tracking-tight text-8xl top-1/2 -translate-x-1/2 -translate-y-1/2 z-2 text-[#cdea68] uppercase font-semibold font-foundersgrotesk whitespace-nowrap flex overflow-hidden`}
        >
          {title.split("").map((alphabet, index) => {
            return (
              <motion.span
                initial={{ y: "100%" }}
                animate={animatedCard}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                key={index}
                className="iniline-block"
              >
                {alphabet}
              </motion.span>
            );
          })}
        </h1>
        <div className="cardImage rounded-xl w-full h-full overflow-hidden">
          <img className="w-full h-full bg-cover" src={image} alt={title} />
        </div>
      </motion.a>
      {/* Buttons */}
      <div className="buttonContainer flex flex-wrap -mb-10 items-start">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4 mb-10">
              <a
                className="button text-zinc-900 dark:text-zinc-100 border-[1px] font-medium border-zinc-900 dark:border-zinc-100 px-4 py-2 rounded-full text-sm uppercase hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-300/10 transition-all duration-300 ease-in-out cursor-pointer"
                href=""
              >
                {button}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedCard;
