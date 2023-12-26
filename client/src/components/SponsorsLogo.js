import React from "react";
import bosch from "../assets/bosch.png";
import ABB from "../assets/abb.jpg";
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

export default function SponsorsLogo() {
  return (
    <>
      <Heading text="Society Sponsors" />
      <div className="grid grid-cols-4 grid-flow-row gap-4">
        <Link to="https://www.bosch.in/">
          <img src={bosch} alt="BOSCH_LOGO" className="h-20 md:h-40 mr-10 ml-20" />
        </Link>

        <Link to="https://new.abb.com/indian-subcontinent">
          <img src={ABB} alt="ABB_LOGO" className="h-20 md:h-40 mr-10 ml-10" />
        </Link>

        <Link to="https://www.opal-rt.com/">
          <img
            src={opal}
            alt="OPAL-RT_LOGO"
            className="h-20 md:h-40 ml-20 mr-10"
          />
        </Link>

        <Link to="https://www.dspace.com/en/pub/home.cfm">
          <img src={ds} alt="DSPACE_LOGO" className="h-20 md:h-40 ml-10 mr-20" />
        </Link>

        <Link to="https://www.textronic.com/">
          <img src={txt} alt="Textronics_LOGO" className="h-20 md:h-40 ml-10 mr-20" />
        </Link>

        <Link to="https://mescom.karnataka.gov.in/english">
          <img src={mescom} alt="MESCOM_LOGO" className="h-20 md:h-40 ml-10 mr-20" />
        </Link>

        <Link to="https://www.ntpc.co.in/">
          <img src={ntpc} alt="NTPC_LOGO" className="h-20 md:h-40 ml-10 mr-20" />
        </Link>

        <Link to="https://www.bennelec.com/">
          <img src={benn} alt="BENN_LOGO" className="h-20 md:h-40 ml-10 mr-20" />
        </Link>

        <Link to="https://www.seg-automotive.com/">
          <img src={seg} alt="SEG_LOGO" className="h-20 md:h-40 ml-10 mr-20" />
        </Link>

        <Link to="https://www.adanipower.com/operational-power-plants/udupi-karnataka">
          <img src={udupi} alt="SEG_LOGO" className="h-20 md:h-40 ml-10 mr-20" />
        </Link>
      </div>
    </>
  );
}
