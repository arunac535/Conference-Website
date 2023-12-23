import React from "react";
import nitk from "./../assets/nitk.png";
import pedas from "../assets/pedas.png";
import ieee from "./../assets/ieee.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <header className="flex justify-between items-center p-1">
      <div className="mr-5">
        <img src={pedas} alt="PEDES-IMAGE" className="w-80 h-30" />
      </div>
      <div className="flex">
        <Link to="https://www.nitk.ac.in/">
          <img
            src={nitk}
            alt="NITK_LOGO"
            className="w-40 h-30 rounded-md mr-5"
          />
        </Link>

        <Link to="https://www.ieee.org/">
          <img
            src={ieee}
            alt="IEEE_LOGO"
            className="w-50 h-20 rounded-md mr-5"
          />
        </Link>
      </div>
    </header>
  );
}
