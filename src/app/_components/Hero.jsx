import React from "react";

const Hero = () => {


  return (
    <div className="flex flex-col bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-700 via-purple-950 to-slate-950 h-screen items-center justify-center text-white py-24 gap-12">
      {/* Container for the content */}
      <div className="text-center space-y-6">
        {/* Announcement */}
        <div className="bg-zinc-900 text-sm md:text-base px-4 py-2 rounded-3xl inline-block">
          Building the future of AI...
        </div>
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold pb-6">
          {/* World&apos;s 1st <br />
          Multimodal GenAI platform */}
          Aufloverse<br></br>Where Enterprises Build AI Agents
        </h1>
        <p className="max-w-[500px] mx-auto px-4 pb-9 text-neutral-300 text-xl">
        Experience the World&apos;s first enterprise-grade AI agent development platform that transforms complex agent creation into seamless deployment.
        </p>
        {/* Button */}
        <div className="mt-6 pb-10">
          <a
            href="https://forms.office.com/r/edUKkaEpVk"
            className="bg-white text-black px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition font-medium"
          >
            Join Waitlist Now! &rarr;
          </a>
        </div>

        
      </div>
    </div>
    
  );
};

export default Hero;
