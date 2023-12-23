import React from "react";
import Logo2 from "./Logo2";
import Heading from "./Heading";

export default function Main() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 my-20 mb-20">
      
      <Heading text="Society Sponsors"/>
      <Logo2 />
      <strong>Conference Overview:</strong>
      The International Conference on Advancements in Smart, Sustainable Energy Sources, Technologies, and Systems (ASSETS) aims to bring together researchers, scientists, engineers, and industry professionals to explore and discuss the latest developments in the field of smart and sustainable energy. This conference will serve as a platform for exchanging ideas, sharing innovative research findings, and fostering collaborations to address the global challenges associated with energy sustainability.

      <hr></hr>

      Keynote Speakers:
      Esteemed experts and thought leaders from academia, industry, and government organizations will deliver keynote addresses, sharing insights and perspectives on the latest trends and future directions in smart and sustainable energy.

      <hr></hr>

      Technical Sessions and Workshops:
      Parallel technical sessions and workshops will provide participants with the opportunity to present their research findings, engage in in-depth discussions, and explore collaborative opportunities.

      <hr></hr>

      Networking Opportunities:
      ASSETS 2023 will feature networking sessions, poster presentations, and social events to facilitate interactions among participants, fostering a vibrant community of researchers and professionals committed to advancing smart, sustainable energy solutions.

      <hr></hr>

      Join us at ASSETS 2023 as we collectively contribute to shaping a more sustainable and resilient energy future for the world.
    </div>
  );
}
