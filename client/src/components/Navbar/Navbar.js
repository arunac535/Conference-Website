import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <button
          className="block lg:hidden text-white"
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? <ImCross /> : <FaBars />}
        </button>

        <ul
          className={`${
            Mobile ? "block" : "hidden"
          } lg:flex lg:justify-end lg:items-center`}
          onClick={() => setMobile(false)}
        >
          <li>
            <NavLink
              to="/"
              className="block py-2 px-4 text-white text-lg font-bold font-serif hover:bg-gray-700 rounded-lg"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block py-2 px-4 text-white text-lg font-bold font-serif hover:bg-gray-700 rounded-lg"
            >
              About Us
            </NavLink>
          </li>
          <li
            className="nav-item diplay:inline-block"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              className="display: inline-block py-2 px-4 text-white text-lg font-bold font-serif hover:bg-gray-700 rounded-lg"
            >
              For Authors
              <FaChevronDown
                className={`inline w-3 h-4 mt-1 ml-2 transition-transform`}
              />
            </div>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <NavLink
              to="/commitee"
              className="block py-2 px-4 text-white text-lg font-bold font-serif hover:bg-gray-700 rounded-lg"
            >
              Committee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/speakers"
              className="block py-2 px-4 text-white text-lg font-bold font-serif hover:bg-gray-700 rounded-lg"
            >
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/eventDetails"
              className="block py-2 px-4 text-white text-lg font-bold font-serif hover:bg-gray-700 rounded-lg"
            >
              Event Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/registration"
              className="block py-2 px-4 text-white text-lg font-bold font-serif hover:bg-gray-700 rounded-lg"
            >
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sponsorship"
              className="block py-2 px-4 text-white text-lg font-bold font-serif hover:bg-gray-700 rounded-lg"
            >
              Sponsorship
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accomodation"
              className="block py-2 px-4 text-white text-lg font-bold font-serif hover:bg-gray-700 rounded-lg"
            >
              Accommodation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block py-2 px-4 text-white text-lg font-bold font-serif hover:bg-gray-700 rounded-lg"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
