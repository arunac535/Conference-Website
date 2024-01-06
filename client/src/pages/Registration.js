import React from "react";
import { Card, Typography } from "@material-tailwind/react";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import RegistrationTimeline from "../components/Timeline/RegistrationTimeline";
import Footer from "../components/Footer";

const TABLE_HEAD = [
  "Authors/Registration",
  "Offline(in INR)",
  "Online(in INR)",
  "Foreign Authors(in USD)",
];

const data = [
  {
    category: "UG Students",
    offline: "3000",
    online: "5500",
    foreign: "249",
  },
  {
    category: "M.Tech/PHD/Faculties(max 4)",
    offline: "5500",
    online: "6000",
    foreign: "299",
  },
  {
    category: "Others",
    offline: "6500",
    online: "7000",
    foreign: "329",
  },
  {
    category: "Listeners",
    offline: "2000",
    online: "2500",
    foreign: "199",
  },
];

function Registration() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>

      <main className="w-full pt-10 pb-20 bg-gray-200 flex flex-col items-center justify-center">
        <Heading text="Registration" />

        <RegistrationTimeline />

        <Card className="shadow-xl overflow-x-auto mt-10 mb-20 w-[90%] sm:w-[75%] md:w-[60%]">
          <table className="text-left rounded-lg border">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="bg-blue-gray-100 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-extrabold leading-none opacity-100"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(({ category, offline, online, foreign }) => (
                <tr key={category} className="even:bg-blue-gray-50/50">
                  <td className="p-2">
                    <Typography
                      // variant="small"
                      color="blue-gray"
                      className="text-sm font-bold"
                    >
                      {category}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray">
                      {offline}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray">
                      {online}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray">
                      {foreign}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Registration;
