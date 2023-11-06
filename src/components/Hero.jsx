import React from "react";

const Hero = ({ backgroundImage, heroTitle }) => {
  return (
    <div className="screen-height">
      <div className="hero h-full flex items-center md:justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1 className="text-5xl font-extrabold text-red-500 px-4 md:w-8/12" style={{ letterSpacing: ".5rem" }}>{heroTitle}</h1>
      </div>
    </div>
  );
};

export default Hero;
