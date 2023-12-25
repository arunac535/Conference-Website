import React from "react";
import nitk from "./../assets/nitk.png";

import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="https://www.nitk.ac.in/">
        <img
          src={nitk}
          alt="NITK_LOGO"
          className="object-fit h-20"
        />
      </Link>
    </div>
  );
}
