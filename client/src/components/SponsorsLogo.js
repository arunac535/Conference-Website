import React from "react";

import bosch from "../assets/bosch.png";
import abb from "../assets/abb.jpg";
import opal from "../assets/opal.jpeg";
import ds from "../assets/ds.jpeg";
import txt from "../assets/textr.png";
import mescom from "../assets/Mescom.jpg";
import ntpc from "../assets/ntpc.png";
import benn from "../assets/benn.jpeg";
import udupi from "../assets/udupi.jpg";
import seg from "../assets/seg.png";

import { Link } from "react-router-dom";
import Heading from "./Heading";

const logos = [
  {
    link: "https://www.bosch.in/",
    src: bosch,
  },
  {
    link: "https://new.abb.com/indian-subcontinent",
    src: abb,
  },
  {
    link: "https://www.opal-rt.com/",
    src: opal,
  },
  {
    link: "https://www.dspace.com/en/pub/home.cfm",
    src: ds,
  },
  {
    link: "https://www.textronic.com/",
    src: txt,
  },
  {
    link: "https://mescom.karnataka.gov.in/english",
    src: mescom,
  },
  {
    link: "https://www.ntpc.co.in/",
    src: ntpc,
  },
  {
    link: "https://www.bennelec.com/",
    src: benn,
  },
  {
    link: "https://www.adanipower.com/operational-power-plants/udupi-karnataka",
    src: udupi,
  },
  {
    link: "https://www.seg-automotive.com/",
    src: seg,
  },
];

export default function SponsorsLogo() {
  return (
    <div className="container my-10">
      <Heading text="Sponsors" />

      <div className="flex justify-center items-center my-10">
        <div className="grid grid-cols-2 md:grid-cols-5 my-10 mx-auto gap-10">
          {logos.map((logo, index) => (
            <div
              className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]"
              key={index}
            >
              <Link to={logo.link}>
                <img
                  src={logo.src}
                  alt="LOGO"
                  className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
