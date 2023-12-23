import React from "react";
import Heading from "./Heading";

export default function Tracks() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center py-10">
      <Heading text="Tracks"/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
      <div className="p-4 text-md rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT1:</span><br />
            <span className="font-bold text-lg">Power Converters, Devices, EMI/EMC and Packaging</span>
          </div>
          <div className="p-4 text-md rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT2:</span><br />
            <span className="font-bold text-lg">Electrical Machines and Industrial Drives</span>
          </div>
          <div className="p-4 text-md rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT3:</span><br />
            <span className="font-bold text-lg">Transportation</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT4:</span><br />
            <span className="font-bold text-lg">Control and Automation</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT5:</span><br />
            <span className="font-bold text-lg">Renewable Energy Systems and Energy Storage</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT6:</span><br />
            <span className="font-bold text-lg">Smart Grids & Power Quality</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT7:</span><br />
            <span className="font-bold text-lg">Power Engineering Educations and Issues</span>
          </div>
          <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
            <span className="font-medium">TT8:</span><br />
            <span className="font-bold text-lg">Applications of AI and ML Techniques to
					Power Electronics</span>
          </div>
      </div>
    </section>
  );
}
