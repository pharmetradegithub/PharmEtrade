
import React from "react";
import background_image from "../../../assets/homepharma.png";
import about from "../../../assets/AboutusPharma.png";

const AboutUs = ({ topMargin }) => {
  return (
    <div
      className="w-full relative flex justify-center items-center"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      <div className="flex w-full z-[-1] top-0  absolute justify-center items-center">
        <img className="w-full h-auto" src={background_image} alt="Background" />
      </div>

      <div className="w-full flex flex-col lg:flex-row h-auto lg:h-screen items-center lg:items-start relative px-4 sm:px-8 lg:px-0">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center   mt-5 md:mt-0 lg:justify-end mb-8 lg:mb-0">
          <img src={about} className="w-[250px] sm:w-[350px] lg:w-[450px] object-contain" alt="About us" />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 mt-9 flex justify-center items-center lg:items-start flex-col">
          <div className="w-full lg:w-[80%] lg:pr-20 flex flex-col gap-5 pb-4 text-justify">
            <h2 className="text-2xl sm:text-3xl text-blue-900 font-semibold">About Us</h2>
            <p className="text-sm sm:text-base lg:text-lg">
              At Pharmetrade, we are committed to transforming the pharmaceutical industry by creating a dynamic and interactive marketplace. Our platform empowers users to buy, sell, and bid on pharmaceutical products with ease and confidence.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              We prioritize transparency, security, and user satisfaction, ensuring that every transaction meets the highest standards of quality and reliability. Our mission is to facilitate a seamless trading experience that connects buyers and sellers worldwide, fostering innovation and growth in the pharmaceutical sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;