import React from "react";
import Heading from "../components/Heading";

const speakers = [
  {
    ind: 1,
    name: "Prof. G R SINHA",
    afiliation: "Provost (Vice Chancellor), GSFC Vadodara, Gujarat, India",
  },
  {
    ind: 2,
    name: "Dr. Panagiotis Kosmopoulos",
    afiliation: "National Observatory of Athens, Greece",
  },
  {
    ind: 3,
    name: "Prof. R N Patel",
    afiliation: "NIT Raipur",
  },
];

function SpeakerData() {
  return (
    <>
      <div className="w-full grow py-10 px-10">
        <Heading text="Keynote Speakers" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 py-10">
          {speakers.map((member) => (
            <div
              className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl"
              key={member.ind}
            >
              <p className="text-base uppercase font-bold text-gray-800">
                {member.name}
              </p>
              <p className="text-xs pt-2 font-semibold text-gray-600 uppercase">
                {member.afiliation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SpeakerData;
