import React from "react";
import Heading from "../components/Heading";
import head from "../assets/RajeevCv.pdf"
import kopo from "../assets/Kosmopoulos.jpg"
import ankit from "../assets/AnkitSharma.jpg"
import SpeakerCard from "./SpeakerCard";
const speakers1 = [
  {
    ind: 1,
    name: "Dr. K. Gopakumar",
    afiliation: "Indian Institute of Science (IISc), Bangalore, India",
    path:"https://faculty.dese.iisc.ac.in/kgopakumar/wp-content/uploads/sites/7/2017/03/kgopa3.jpg"
  }
]

const speakers2 = [
  {
    ind: 1,
    name: "Dr. P Kosmopoulos",
    afiliation: "National Observatory of Athens, Greece",
    path:kopo
  },
  {
    ind: 2,
    name: "Dr. S B Srivastava",
    afiliation: "Henry Ford Health, Bionics and Vision Lab, Michigan, USA",
    path:""
  },
];

const InvitedSpeakers = [
  {
    ind: 1,
    name: "RAJEEV SAPRA",
    afiliation: "DEPUTY GENERAL MANAGER (Voluntary Retired), DELHI TRANSCO LTD.",
    path:ankit
  }
]

function SpeakerData(props) {
  return (
    <>
      <div className="w-full grow py-10 px-10">
        <Heading text="Keynote Speakers" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 py-10">
          {speakers1.map((member) => (
            
            <div
              className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl"
              key={member.ind}
            >
              <img src ={member.path} height={180} width={205}/>
              <p className="text-base uppercase font-bold text-gray-800">
                {member.name}
              </p>
              <p className="text-xs pt-2 font-semibold text-gray-600 uppercase">
                {member.afiliation}
              </p>
            </div>
          ))}
        </div>
        <Heading text="Expert Talk" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 py-10">
          {speakers2.map((member) => (
            <div
              className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl"
              key={member.ind}
            >
              <img src ={member.path} height={180} width={205}/>
              <p className="text-base uppercase font-bold text-gray-800">
                {member.name}
              </p>
              <p className="text-xs pt-2 font-semibold text-gray-600 uppercase">
                {member.afiliation}
              </p>
            </div>
          ))}
        </div>
        <Heading text="Invited Speaker" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 py-10">
          {InvitedSpeakers.map((member) => (
            <div
              className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl"
              key={member.ind}
            >
              <img src ={member.path} height={180} width={205}/>
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

