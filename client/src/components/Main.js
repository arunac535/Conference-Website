import React from "react";
import Heading from "./Heading";

export default function Main() {
  return (
    <div className="container flex flex-col items-center justify-center">
      <Heading text="Conference Overview" />
      <p className="my-10 text-md md:text-xl px-2 mx-10">
        The International Conference on Advancements in Smart, Sustainable
        Energy Sources, Technologies, and Systems (ASSETS) aims to bring
        together researchers, scientists, engineers, and industry professionals
        to explore and discuss the latest developments in the field of smart and
        sustainable energy. This conference will serve as a platform for
        exchanging ideas, sharing innovative research findings, and fostering
        collaborations to address the global challenges associated with energy
        sustainability.
      </p>
    </div>
  );
}
