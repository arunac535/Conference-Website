import React from "react";
import { Card, Typography } from "@material-tailwind/react";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import RegistrationTimeline from "../components/Timeline/RegistrationTimeline";
import Footer from "../components/Footer";

const TABLE_HEAD = [
  "Authors/ Registration",
  "Members (in INR)",
  "Non- Members (in INR)",
  "Foreign Authors (in USD)",
];
const data = [
  {
    category: "UG students",
    members: "5000",
    nonmembers: "5500",
    foreignauthors: "249",
  },

  {
    category: "M.tech / Ph.D students Faculties (Max. 04)",
    members: "5500",
    nonmembers: "6000",
    foreignauthors: "299",
  },

  {
    category: "Others",
    members: "6000",
    nonmembers: "6500",
    foreignauthors: "329",
  },

  {
    category: "Listeners",
    members: "2000",
    nonmembers: "2500",
    foreignauthors: "119",
  },

  {
    category: "Publication (Indexed Journals)",
    members: "-",
    nonmembers: "-",
    foreignauthors: "-",
  },

  {
    category: "Scopus Indexed Journal",
    members: "8000",
    nonmembers: "9000",
    foreignauthors: "300",
  },
];

function Registration() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>

      <main className="pt-10 pb-20  bg-gray-200 flex flex-col items-center justify-center overflow-auto">
        <Heading text="Registration" />

        <RegistrationTimeline />

        <div className="container mx-auto flex flex-col items-center justify-center">
          <Card className="mx-12 shadow-xl mt-20">
            <table className="min-w-max table-auto text-left rounded-lg border">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="text-2xl font-bold bg-blue-gray-100 p-4 "
                    >
                      <Typography
                        variant="h5"
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
                {data.map(
                  ({ category, members, nonmembers, foreignauthors }) => (
                    <tr key={category} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
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
                          {members}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {nonmembers}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {foreignauthors}
                        </Typography>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </main>
      <footer className="relative">
        <Footer />
      </footer>
    </>
  );
}

export default Registration;
