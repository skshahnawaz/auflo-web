import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-black via-purple-800 to-blue-900 h-screen items-center justify-center text-white py-24 gap-12">
      {/* Container for the content */}
      <div className="text-center space-y-6">
        {/* Announcement */}
        <div className="bg-zinc-900 text-sm md:text-base px-4 py-2 rounded-3xl inline-block font-medium">
          Just shipped version 0.1.0
        </div>
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold pb-6">
        World&apos;s 1st  <br />
        Multimodal GenAI platform
        </h1>
        {/* Button */}
        <div className="mt-6">
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition font-medium"
          >
            Join Waitlist Now! &rarr;
          </a>
        </div>
      </div>

      {/* Optional floating image, similar to the one you showed */}
      {/* <div className=" bottom-0 p-4">
        <img
          src="/dummy.jpg"
          alt="Floating Icon"
          className="w-[800px] h-[600px]"
        />
      </div> */}
    </div>
  );
};

export default Hero;