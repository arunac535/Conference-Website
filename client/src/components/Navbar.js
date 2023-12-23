import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);

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
            Mobile ? 'block' : 'hidden'
          } lg:flex lg:justify-end lg:items-center`}
          onClick={() => setMobile(false)}
        >
          <li>
            <NavLink
              to="/"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ForAuthors"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              For Authors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Commitee"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Committee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Speakers"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/EventDetails"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Event Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Registration"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Sponsorship"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Sponsorship
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Accomodation"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Accommodation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
