import React from "react";
import nitk from "./../assets/nitk.png";

import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem]">
      <Link to="https://www.nitk.ac.in/">
        <img src={nitk} alt="NITK_LOGO" />
      </Link>
    </div>
  );
}
