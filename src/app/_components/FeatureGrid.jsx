import React from "react";

const FeatureGrid = () => {
  return (
    <div className="bg-gray-900 py-16" id="features">
      {/* Container for the entire section */}
      <div className="max-w-4xl mx-auto px-4 text-white">
        {/* Header Text */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            The competitive advantage developers ask for by name.
          </h2>
        </div>

        {/* Grid for feature cards */}
        <div className="grid gap-8 md:grid-cols-3 grid-cols-1 pt-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-8 rounded-xl shadow-lg md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">
              Proven to increase developer productivity and accelerate the pace of software development.
            </h3>
            <p className="text-sm">Read the research &rarr;</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center justify-center md:row-span-2">
            <div className="text-6xl mb-4 font-bold">55%</div>
            <p className="text-2xl font-semibold">Faster coding</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Designed by leaders in AI so you can build with confidence.
            </h3>
            <div className="flex space-x-4">
              {/* Add icons or logos here if needed */}
              <span className="w-8 h-8 bg-blue-500 rounded-full"></span>
              <span className="w-8 h-8 bg-green-500 rounded-full"></span>
              <span className="w-8 h-8 bg-purple-500 rounded-full"></span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Committed to your privacy, security, and trust.
            </h3>
            <p className="text-sm">Visit the GitHub Copilot Trust Center &rarr;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
