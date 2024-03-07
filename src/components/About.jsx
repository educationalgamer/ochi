import React from "react";
import "./animation.css";
import approach from "/assets/images/approach.jpg";

const About = () => {
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/ochi_design/",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/ochi_design",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/OCHI-presentation-design/100067218942460/",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/ochi-design/",
    },
  ];
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="is-inview w-full pt-[6vw] pb-[4vw] bg-[#cdea68] rounded-2xl text-zinc-900 relative"
    >
      <h1 className="font-neuemontreal text-[7vw] md:text-[4vw] leading-[7vw] md:leading-[4vw] font-[1px] tracking-tight px-[4vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to{" "}
        <span className="underline-animation hover:cursor-pointer">
          raise funds
        </span>
        ,{" "}
        <span className="underline-animation hover:cursor-pointer">
          sell products
        </span>
        ,{" "}
        <span className="underline-animation hover:cursor-pointer">
          explain complex ideas
        </span>{" "}
        and{" "}
        <span className="underline-animation hover:cursor-pointer">
          hire great people.
        </span>
      </h1>

      <div className="grid md:grid-cols-12 gap-y-[5vw] gap-x-8 lg:gap-x-0 border-y-2 border-black/30 mt-[5vw] pt-[1.5vw] pb-[8vw] font-neuemontreal px-[4vw]">
        <div className="md:col-span-4 lg:col-span-6">What can you expect:</div>
        <div className="md:col-span-4 lg:col-span-4 max-w-[40vw] lg:max-w-[20vw] flex flex-col gap-y-[3vw]">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="md:col-span-4 lg:col-span-2 self-end">
          <p>S:</p>
          <ul>
            {socials.map((item, index) => {
              return (
                <li key={index} className="underline-container">
                  <a href={item.url} className="underline-animation">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-5 px-[4vw] pt-[1vw]">
        <div className="w-1/2">
          <h1 className="text-[4vw] tracking-tight font-neuemontreal">
            Our approach:
          </h1>
          <button className="flex gap-10 items-center mt-[1vw] lg:mt-[0.5vw] px-[3vw] md:px-[2.5vw] lg:px-[2vw] py-[2vw] md:py-[1.5vw] lg:py-[1vw] uppercase bg-[#212121] hover:bg-black rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src={approach}
            alt="approach"
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
