import React from "react";
import Heading from "../components/Heading";
import head from "../assets/RajeevCv.pdf";
import kopo from "../assets/Kosmopoulos.jpg";
import ankit from "../assets/AnkitSharma.jpg";
import SpeakerCard from "./SpeakerCard";
import gopa from "../assets/kgopa3.jpg"

const speakers1 = [
  {
    ind: 1,
    name: "Dr. K. Gopakumar",
    afiliation: "Indian Institute of Science (IISc), Bangalore, India",
    path:gopa
  }
]

const expertTalk = [
  {
    ind: 1,
    name: "Dr. P Kosmopoulos",
    afiliation: "National Observatory of Athens, Greece",
    path: kopo,
  },
  {
    ind: 2,
    name: "Dr. S B Srivastava",
    afiliation: "Henry Ford Health, Bionics and Vision Lab, Michigan, USA",
    path: "",
  },
  {
    ind: 3,
    name: "RAJEEV SAPRA",
    afiliation:
      "DEPUTY GENERAL MANAGER (Voluntary Retired), DELHI TRANSCO LTD.",
    path: ankit,
  },
];

function SpeakerData(props) {
  return (
    <>
      <div className="w-full grow py-10 px-10">
        <Heading text="Guest Speaker" />

        <div className="flex justify-center items-center mt-4 mb-10 py-5">
          {guestSpeaker.map((speaker) => (
            <SpeakerCard
              ind={speaker.ind}
              name={speaker.name}
              afiliation={speaker.afiliation}
              path={speaker.path}
            />
          ))}
        </div>

        <div className="h-20"></div>

        <div className="mt-15 py-10">
          <h1 className="mt-2 text-[2.05rem] text-center font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl lg:text-5xl">
            Expert Talk
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 py-2">
            {expertTalk.map((speaker) => (
              <SpeakerCard
                ind={speaker.ind}
                name={speaker.name}
                afiliation={speaker.afiliation}
                path={speaker.path}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SpeakerData;
