import React from "react";

const Hero = ({ backgroundImage, heroTitle }) => {
  return (
    <div className="w-full" style={{ height: "80%" }}>
      <div className="hero h-full flex items-center md:justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1 className="text-5xl font-extrabold text-green-900 px-4 md:w-8/12" style={{ letterSpacing: ".8rem" }}>{heroTitle}</h1>
      </div>
    </div>
  );
};

export default Hero;
