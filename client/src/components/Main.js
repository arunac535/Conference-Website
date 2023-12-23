import React from 'react';
import './styles.css'; 

import ias from "../assets/ias.png";
import ies from "../assets/ies.png";
import pes from "../assets/pes.png";
import pels from "../assets/pels.png";
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Society Sponsors</h1>
      <div className="flex">
        <Link to="https://ias.ieee.org/">
          <img
            src={ias}
            alt="IAS_LOGO"
            className="w-240 h-80 rounded-md mr-5"
          />
        </Link>

        <Link to="https://ieee-pes.org/">
          <img
            src={pes}
            alt="PES_LOGO"
            className="w-90 h-80 rounded-md mr-5"
          />
        </Link>

        <Link to="https://www.ieee-pels.org/">
          <img
            src={pels}
            alt="PELS_LOGO"
            className="w-100 h-80 rounded-md mr-5"
          />
        </Link>

        <Link to="https://www.ieee-ies.org/">
          <img
            src={ies}
            alt="IES_LOGO"
            className="w-100 h-80 rounded-md mr-5"
          />
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">About PEDES</h1>
      <p className="text-lg mb-4">
        IEEE Power Electronics, Drives and Energy Systems (PEDES) is a biennial conference sponsored by IEEE Industry Applications Society and technically co-sponsored by IEEE Power Electronics Society, Industrial Electronics Society, and Power & Energy Society. The upcoming IEEE PEDES 2024 conference will be held at National Institute of Technology Karnataka (NITK) Surathkal, Mangaluru from 18th - 21st December 2024.
      </p>
    </div>
  );
}
