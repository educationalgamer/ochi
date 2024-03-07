import React from "react";
import FeaturedCard from "./FeaturedCard";
import fyde from "/assets/images/fyde.png";
import vise from "/assets/images/vise.jpg";
import trawa from "/assets/images/trawa.jpg";
import premiumBlend from "/assets/images/premiumBlend.png";

const Featured = () => {
  const title = ["Fyde", "Vise", "Trawa", "Premium Blend"];
  const image = [fyde, vise, trawa, premiumBlend];
  const buttons = [
    ["audit", "copywriting", "sales deck", "slides design"],
    ["agency", "company presentation"],
    ["brand identity", "design research", "investor deck"],
    ["branded template"],
  ];
  const link = [
    "https://ochi.design/case/fyde-partnership_deck/",
    "https://ochi.design/case/vise_company_presentation_design/",
    "https://ochi.design/case/trawa/",
    "https://ochi.design/case/presentation-template-premium_blend/",
  ];
  return (
    <div className="w-full py-[12vw] md:py-[6vw] rounded-2xl bg-[#f1f1f1] dark:bg-zinc-900">
      <div className="w-full px-[4vw] border-b-[1px] border-zinc-400 dark:border-zinc-700 pb-[5vw] md:pb-[2vw]">
        <h1 className="text-[5vw] sm:text-[4vw] md:text-[3.4vw] tracking-tight font-neuemontreal">
          Featured Projects
        </h1>
      </div>
      <div className="cards w-full px-[4vw] grid md:grid-cols-2 gap-x-6 gap-y-14 mt-10">
        {title.map((title, index) => {
          {
            return (
              <FeaturedCard
                key={index}
                title={title}
                image={image[index]}
                buttons={buttons[index]}
                link={link[index]}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Featured;
