import React from "react";
import Heading from "./Heading";

const NationalAdvisoryCommitee = [
  {
    ind: 1,
    name: "Prof. Nagamani C",
    afiliation: "NIT Trichy",
  },
  {
    ind: 2,
    name: "prof. Ashok",
    afiliation: "NIT CALICUT",
  },
  {
    ind: 3,
    name: "Prof. R N Patel",
    afiliation: "NIT RAIPUR",
  },
  {
    ind: 4,
    name: "PROF. A BANSAL",
    afiliation: "IIT ROORKEE",
  },
  {
    ind: 5,
    name: "PROF. THANGA CHELLAIAH",
    afiliation: "IIT ROORKEE",
  },
  {
    ind: 6,
    name: "Prof. RAHUL DEV",
    afiliation: "NIT Trichy",
  },
  {
    name: "Prof. Nagamani C",
    afiliation: "MNIT ALLAHABAD",
  },
  {
    ind: 7,
    name: "PROF. A K SAO",
    afiliation: "IIT BHILAI",
  },
  {
    ind: 8,
    name: "PROF. S PATEL ",
    afiliation: "IIT INDORE",
  },
  {
    ind: 9,
    name: "Prof. G R Sinha",
    afiliation: "Provost (Vice Chancellor) @ GSFC University",
  },
  {
    ind: 10,
    name: "Prof. Pradeep R. Nair",
    afiliation: "IIT Bombay",
  },
  {
    ind: 11,
    name: "Prof. VINOD KUMAR",
    afiliation: "-",
  },
  {
    ind: 12,
    name: "Venkateswarlu P",
    afiliation: "Lead Engineer at Hitachi ABB Power Grids",
  },
  {
    ind: 13,
    name: "Srinivasa S",
    afiliation: "Team Leader E R & D Turbo Energy Limited",
  },
  {
    ind: 14,
    name: "Anuj Raizada",
    afiliation: "BHEL",
  },
  {
    ind: 15,
    name: "Prof. Lakshman Mahto",
    afiliation: "IIIT Dharwad",
  },
  {
    ind: 16,
    name: "Prof. Thirumurugan Chandrasekaran",
    afiliation: "VIT",
  },
  {
    ind: 17,
    name: "Prof. Ajay Soni",
    afiliation: "IIT Mandi",
  },
  {
    ind: 18,
    name: "Prof .Subit Kumar Jain",
    afiliation: "NIT Hamirpur",
  },
  {
    ind: 19,
    name: "Prof. Suryanarayana Doolla",
    afiliation: "NIT Hamirpur",
  },
  {
    name: "Prof. Subit Kumar Jain",
    afiliation: "IIT Bombay",
  },
  {
    ind: 20,
    name: "prof. B.G.Fernandez",
    afiliation: "IIT Bombay",
  },
  {
    ind: 21,
    name: "Prof. Abdul Beige",
    afiliation: "Khalifa University",
  },
  {
    ind: 22,
    name: "Prof. Lakshmi Prasad Natarajan",
    afiliation: "IITH",
  },
  {
    ind: 23,
    name: "Prof. Mahesh Kumar",
    afiliation: "IITM",
  },
  {
    ind: 24,
    name: "Prof .G.N. Pillai",
    afiliation: "IITR",
  },
  {
    ind: 25,
    name: "Prof .Vishal Kumar",
    afiliation: "IITR",
  },
];

const InternationalAdvisoryCommitee = [
  {
    ind: 1,
    name: "Dr. SHASHI BUSHAN SRIVASTAV",
    afiliation: "MICHIGAN",
  },
  {
    ind: 2,
    name: "dr. A SHARMA",
    afiliation: "NASA, usa",
  },
  {
    ind: 3,
    name: "dr. PAVAN kumar",
    afiliation: "IMEC, Belgium",
  },
  {
    ind: 4,
    name: "dr. Vijay Chauhan",
    afiliation: "Chief Executive OfficerChief Executive Officer, GEOTROPY",
  },
  {
    ind: 5,
    name: "Prof. ASHOK BHAT",
    afiliation: "Professor, Canada",
  },
  {
    ind: 6,
    name: "prof. Jan Kleissl",
    afiliation: "University of California, San Diego USA",
  },
  {
    ind: 7,
    name: "dr. Madhav Singh",
    afiliation: "Electrochemist, UK",
  },
  {
    ind: 8,
    name: "dr. Pradeep Chawda ",
    afiliation: "Apple, usa",
  },
  {
    ind: 9,
    name: "dr. Annette Hammer ",
    afiliation: "DLR, Germany",
  },
  {
    ind: 10,
    name: "dr. Joshi Bollam",
    afiliation: "Chubb, USA",
  },
  {
    ind: 11,
    name: "dr. Vijay Teegela",
    afiliation: "EAI Architect at C&S Wholesale Grocers, USA",
  },
  {
    ind: 12,
    name: "dr. MANISH SHARMA",
    afiliation: "Senior Optical Engineer, Canada",
  },
  {
    ind: 13,
    name: "dr. Jalim Singh",
    afiliation: "OHSU Portland, USA",
  },
  {
    ind: 14,
    name: "Dr. Saurabh Singh",
    afiliation: "IST, Austria",
  },
  {
    ind: 15,
    name: "dr. Aditya Chauhan",
    afiliation: "ASM, Belgium",
  },
  {
    ind: 16,
    name: "dr. Vishrut Shah",
    afiliation: "Nous, Canada",
  },
  {
    ind: 17,
    name: "Akshay Kumar Swain",
    afiliation: "-",
  },
];

export default function CommiteeData() {
  return (
    <>
      <div className="w-full grow py-10 px-10">
        <Heading text="Advisory Committee" />

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {NationalAdvisoryCommitee.map((member) => (
            <div
              className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl"
              key={member.ind}
            >
              <p className="text-base uppercase font-bold text-gray-800">
                {member.name}
              </p>
              <p className="text-xs pt-2 font-semibold text-gray-600">
                {member.afiliation}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {InternationalAdvisoryCommitee.map((member) => (
            <div
              className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl"
              key={member.ind}
            >
              <p className="text-base uppercase font-bold text-gray-800">
                {member.name}
              </p>
              <p className="text-xs pt-2 uppercase font-semibold text-gray-600">
                {member.afiliation}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
