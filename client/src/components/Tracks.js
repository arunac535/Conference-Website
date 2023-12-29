import React from "react";
import Heading from "./Heading";

const tracks = [
  {
    title: "Electrical Machines, systems and applications",
  },
  {
    title: "Power Electronics control, Systems and Applications",
  },
  {
    title: "Advanced Power Semiconductors and Technologies",
  },
  {
    title: "Wireless Power Transfer systems and technologies",
  },
  {
    title: "Power systems control and smart grid technologies",
  },
  {
    title: "AI and Embedded applications for sustainable energy technologies",
  },
  {
    title: "Alternate energy sources and technologies",
  },
];

export default function Tracks() {
  return (
    <section className="mt-40 container mx-auto flex flex-col items-center justify-center py-10">
      <Heading text="Tracks" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="p-4 text-md rounded-lg bg-white text-gray-900 shadow-md"
          >
            <span className="font-extrabold text-blue-900">
              Track {index + 1}:
            </span>
            <br />
            <span className="font-bold text-lg">{track.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
