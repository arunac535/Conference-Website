import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Category", "Fee", "Entitlement"];



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

      <div className="pt-10 bg-gray-200 pb-20">
        <Heading text="Sponsors" />
        <Card className="h-full w-500  mx-12 shadow-xl mt-20">
          <table className="w-full min-w-max table-auto text-left rounded-lg border">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="h-16  bg-blue-gray-100 p-4 ">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(({ category, fee, entitlement }) => (
                <tr key={category} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {category}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {fee}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <ul>
                        {Object.keys(entitlement).map((entKey, entIndex) => (
                          <li key={entIndex}>{entitlement[entKey]}</li>
                        ))}
                      </ul>
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}


export default Sponsorship;
