import React from "react";
import Heading from "../components/Heading";
import head from "../assets/RajeevCv.pdf";
import kopo from "../assets/Kosmopoulos.jpg";
import ankit from "../assets/AnkitSharma.jpg";
import SpeakerCard from "./SpeakerCard";

const speakers = [
  {
    ind: 1,
    name: "Dr. K. Gopakumar",
    afiliation: "Indian Institute of Science (IISc), Bangalore, India",
    path: "https://faculty.dese.iisc.ac.in/kgopakumar/wp-content/uploads/sites/7/2017/03/kgopa3.jpg",
  },
  {
    ind: 2,
    name: "Dr. P Kosmopoulos",
    afiliation: "National Observatory of Athens, Greece",
    path: kopo,
  },
  {
    ind: 3,
    name: "Dr. S B Srivastava",
    afiliation: "Henry Ford Health, Bionics and Vision Lab, Michigan, USA",
    path: "",
  },
  {
    ind: 4,
    name: "RAJEEV SAPRA",
    afiliation:
      "DEPUTY GENERAL MANAGER (Voluntary Retired), DELHI TRANSCO LTD.",
    path: ankit,
  },
];

function SpeakerData() {
  return (
    <>
      <div className="w-full grow py-10 px-10">
        <Heading text="Keynote Speakers" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 py-10">
          {speakers.map((speaker) => (
            <SpeakerCard
              name={speaker.name}
              affiliation={speaker.afiliation}
              path={speaker.path}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SpeakerData;
