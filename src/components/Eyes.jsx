import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX);
      var angleDeg = (angle * 180) / Math.PI;
      setRotate(angleDeg - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('/assets/images/eyeBackground.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          {/* First Eye */}
          <div className="w-[25vw] h-[25vw] md:w-[17vw] md:h-[17vw] lg:w-[15vw] lg:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
              >
                <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          {/* Second eye */}
          <div className="w-[25vw] h-[25vw] md:w-[17vw] md:h-[17vw] lg:w-[15vw] lg:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
              >
                <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
