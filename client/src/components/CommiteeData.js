import React from "react";
import Heading from "../components/Heading";

const AdvisoryCommitee = [
  {
    ind: 1,
    name: "prof. A Bansal",
    afiliation: "IIT Roorkee",
  },
  {
    ind: 2,
    name: "PROF. A Soni",
    afiliation: "IIT mandi",
  },
  {
    ind: 3,
    name: "Prof. AK Sao",
    afiliation: "Iit Bhilai",
  },
  {
    ind: 4,
    name: "Prof. G R SINHA",
    afiliation:
      "Provost (Vice Chancellor), GSFC University Vadodara, Gujarat, India",
  },
  {
    ind: 5,
    name: "Prof. Gururaj S Punekar",
    afiliation: "NIT Surathkal",
  },
  {
    ind: 6,
    name: "Prof Jan Kleissl",
    afiliation: "UCSD, USA",
  },
  {
    ind: 7,
    name: "Shri Joshi Bollam",
    afiliation: "chubb, USA",
  },
  {
    ind: 8,
    name: "Prof. K. Siva Kumar",
    afiliation: "IIT Hyderabad",
  },
  {
    ind: 9,
    name: "Dr. Madhav Singh",
    afiliation: "Ascend Elements Michigan, USA",
  },
  {
    ind: 10,
    name: "Prof. Panduranga Vittal K",
    afiliation: "NIT Surathkal",
  },
  {
    ind: 11,
    name: "SHRI Pradeep Chawda",
    afiliation: "Apple, Usa",
  },
  {
    ind: 12,
    name: "Prof. RN Patel",
    afiliation: "NIT Raipur",
  },
  {
    ind: 13,
    name: "Prof. Shubhanga K N",
    afiliation: "NIT Surathkal",
  },
  {
    ind: 14,
    name: "Shri Saurabh Singh",
    afiliation: "Ph.D (ISTA) Klosterneuburg, Austria",
  },
  {
    ind: 15,
    name: "Prof. Thanga Raj Chelliah",
    afiliation: "IIT Roorkee",
  },
  {
    ind: 16,
    name: "Prof. Udaykumar R Yaragatti",
    afiliation: "NIT Surathkal",
  },
];

const Patron = [
  {
    ind: 1,
    name: "Prof. B Ravi",
    afiliation: "Director NITK, Surathkal",
  },
];

const Convenor = [
  {
    ind: 1,
    name: "Prof. Dattatraya N. Gaonkar",
    afiliation: "HOD EEE, NITK Surathkal",
  },
];

export default function CommiteeData() {
  return (
    <>
      <div className="w-full grow py-10 px-10">
        <div className="my-10 py-5">
          <Heading text="Chief Patron" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 py-10">
            {Patron.map((member) => (
              <div
                className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl"
                key={member.ind}
              >
                <p className="text-base uppercase font-bold text-gray-800">
                  {member.name}
                </p>
                <p className="text-xs pt-2 font-semibold text-gray-600 uppercase">
                  {member.afiliation}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 py-5">
          <Heading text="Convenor" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 py-10">
            {Convenor.map((member) => (
              <div
                className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl"
                key={member.ind}
              >
                <p className="text-base uppercase font-bold text-gray-800">
                  {member.name}
                </p>
                <p className="text-xs pt-2 font-semibold text-gray-600 uppercase">
                  {member.afiliation}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 py-5">
          <Heading text="Advisory Committee" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 py-10">
            {AdvisoryCommitee.map((member) => (
              <div
                className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl"
                key={member.ind}
              >
                <p className="text-base uppercase font-bold text-gray-800">
                  {member.name}
                </p>
                <p className="text-xs pt-2 font-semibold text-gray-600 uppercase">
                  {member.afiliation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
