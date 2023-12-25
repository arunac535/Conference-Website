import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

const data = [
  {
    category: "Principal Sponsor",
    fee: "INR 10.0 Lakhs",
    entitlement: {
      1: "Display of logo at the conference backdrop",
      2: "Display of banners at the conference venue",
      3: "12 free delegates",
      4: "Company logo as Principal sponsor on the website",
      5: "Full page colour advertisement in the proceedings",
    },
  },

  {
    category: "Co-Sponsor",
    fee: "INR 8.0 Lakhs",
    entitlement: {
      1: "Display of logo at the conference backdrop",
      2: "Display of banners at the conference venue",
      3: "10 free delegates",
      4: "Company logo as Co-sponsor on the website",
    },
  },

  {
    category: "Platinum Sponsor",
    fee: "INR 6.0 Lakhs",
    entitlement: {
      1: "Display of logo at the conference backdrop",
      2: "Display of banners at the conference venue",
      3: "8 free delegates",
      4: "Company logo as Platinum sponsor on the website",
    },
  },

  {
    category: "Gold Sponsor",
    fee: "INR 4.0 Lakhs",
    entitlement: {
      1: "Display of logo at the conference backdrop",
      2: "Display of banners at the conference venue",
      3: "4 free delegates",
      4: "Company logo as Gold sponsor on the website",
    },
  },

  {
    category: "Dinner Sponsor",
    fee: "INR 4.0 Lakhs",
    entitlement: {
      1: "Display of logo at the conference backdrop",
      2: "Display of banners at the conference venue",
      3: "4 free delegates",
      4: "Company logo as Dinner sponsor on the website",
    },
  },

  {
    category: "Lunch Sponsor",
    fee: "INR 4.0 Lakhs",
    entitlement: {
      1: "Display of logo at the conference backdrop",
      2: "Display of banners at the conference venue",
      3: "4 free delegates",
      4: "Company logo as Lunch sponsor on the website",
    },
  },
];

function Sponsorship() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <Heading text="Sponsors" />
      <main className="flex flex-col justify-center mt-20 p-10">
        <table className="border border-black table-fixed">
          <tr>
            <th className="border border-black font-extrabold text-center">Category</th>
            <th className="border border-black font-extrabold text-center">Fee</th>
            <th className="border border-black font-extrabold text-center">Entitlements</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key} className="border border-black">
                <td className="border border-black">{val.category}</td>
                <td className="border border-black">{val.fee}</td>
                <td className="border border-black">
                  <ul className="border border-black">
                    {Object.keys(val.entitlement).map((entKey, entIndex) => (
                      <li key={entIndex}>{val.entitlement[entKey]}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            );
          })}
        </table>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Sponsorship;
