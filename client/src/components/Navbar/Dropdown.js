import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    title: "Technical Tracks",
    path: "/tracks",
    cName: "dropdown-link",
  },

  {
    title: "Call For Papers",
    path: "/callforpapers",
    cName: "dropdown-link",
  },

  {
    title: "Papers Submission",
    path: "/paperssubmission",
    cName: "dropdown-link",
  },
];

function Dropdown() {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "display-none" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
