import React from "react";


export default function Tracks() {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-blue-700 md:text-4xl font-helvetica">
          Tracks
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT1:</span><br />
            <span className="font-bold text-lg">Power Converters, Devices, EMI/EMC and Packaging</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT2:</span><br />
            <span className="font-bold text-lg">Electrical Machines and Industrial Drives</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT3:</span><br />
            <span className="font-bold text-lg">Transportation</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT3:</span><br />
            <span className="font-bold text-lg">Control and Automation</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT3:</span><br />
            <span className="font-bold text-lg">Renewable Energy Systems and Energy Storage</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT3:</span><br />
            <span className="font-bold text-lg">Smart Grids & Power Quality</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT3:</span><br />
            <span className="font-bold text-lg">Power Engineering Educations and Issues</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT3:</span><br />
            <span className="font-bold text-lg">Applications of AI and ML Techniques to
					Power Electronics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
