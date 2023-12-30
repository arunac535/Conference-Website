import React from "react";
import nitkMB from "./../assets/nitkMB.jpg";
import eee_dept from "./../assets/eee_dept.jpg";
import mlr from "./../assets/mangalore.jpg";
import Heading from "./Heading";

export default function About() {
  return (
    <div className="flex-grow bg-gray-200 pt-10 pb-20">
      <div className="my-5 mx-auto w-11/12">
        <Heading text="About Us" />

        <div className="mt-20 text-center ">
          <div className="container mx-auto">
            <h2 className="text-4xl font-extrabold mb-8 text-gray-700"></h2>
            <p className="text-justify text-xl font-arial mb-10">
            Nestled in the coastal city of Mangalore in the Indian state of Karnataka lies the esteemed National Institute of Technology Karnataka, Surathkal. This illustrious institute was originally established as Karnataka Regional Engineering College (KREC) back in 1960 but was later upgraded and renamed to NITK in 2002. Mangalore, the commercial and educational hub of the Dakshina Kannada district, is a thriving centre of trade, business, and education in the state. The institute owes its existence to the contributions of Sri. U. Srinivasa Mallya was a philanthropist and visionary who played a pivotal role in developing the coastal region of Karnataka. In fact, his efforts towards the establishment of KREC (now NITK) were the most significant. As a tribute to his contribution, the campus premises have been named Srinivasnagar after him.
            </p>

            {/* Image and video section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  src={nitkMB}
                  alt="An image of the Main Building of NITK"
                  className="h-auto max-h-full max-w-full shadow-xl"
                />
              </div>
              <div className="flex justify-center">
                <div className="max-w-500 mx-auto w-full">
                  <div
                    style={{
                      margin: "20px",
                      border: "1px solid #ccc",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "75%",
                        height: "0",
                        overflow: "hidden",
                      }}
                    >
                      {/* YouTube Video */}
                      <iframe
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        src="https://www.youtube.com/embed/vEYwgdjac5Y?si=WRvgSyu3P_sHLFbi"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-20"></div>

        {/* About the EEE department */}

        <div className="container mx-auto my-10">
          <h2 className="text-4xl font-extrabold mb-10 py-10 text-gray-800 text-center">
            About Electrical and Electronics Engineering Department
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <p className="p-4 bg-gray-100 shadow-xl rounded-md text-gray-700 text-left text-[0.9rem] font-semibold">
            The Department of Electrical and Electronics Engineering (EEE) plays a pivotal role in the National Institute of Technology Karnataka (NITK), having been a core department since the inception of the erstwhile Karnataka Regional Engineering College (KREC) in 1960. The department offers a comprehensive range of courses including an undergraduate programme, a postgraduate programme in Power and Energy Systems, and research programmes leading to doctoral degrees (Ph.D). 

The department boasts state-of-the-art laboratories that complement the coursework and enhance research potential. The faculty is a dynamic group with extensive experience in academics, research, and industry, dedicated to the teaching-learning process, and actively engaged in cutting-edge R&D activities. The research areas include Smart Grid Operation & Control, Power Electronics & Renewable Energy, Biomedical Imaging & Signal Processing, Electric Vehicle & Wireless Power Transfer, Artificial Intelligence & Machine Learning, among others. 

The faculty has received various recognitions such as Young Faculty Research Fellowship and POSOCO award for research publications. The department has undertaken various externally sponsored research projects funded by DST, SERB, MNRE, CPRI, DELL, CDAC, Infineon, Texas Instruments, Schneider Electric, L&T, Robert Bosch, MeitY, and others. The department also undertakes numerous consultancy projects from industry and other organizations. 

Throughout the year, the department's academicians and students publish a good number of publications, including patents, international journals & conferences, showcasing their dedication and hard work towards the field.
            </p>

            <img
              src={eee_dept}
              alt="An image of the EEE department of NITK"
              className="rounded-md shadow-xl"
            />
          </div>
        </div>

        {/* for space */}
        <div className="h-20"></div>

        {/* About Mangalore */}
        <div className="container mx-auto my-10">
          <h2 className="text-4xl font-extrabold mb-10 py-10 text-gray-900 text-center">
            About Mangalore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <img
              src={mlr}
              alt="Mangalore Image"
              className="rounded-md shadow-xl"
            />
            <p className="p-4 bg-gray-100 shadow-xl rounded-md text-gray-700 text-left text-base font-semibold">
              Mangalore, a coastal city in the southwestern state of Karnataka,
              India, is renowned for its picturesque landscapes, vibrant
              culture, and historical significance. Nestled between the Arabian
              Sea and the Western Ghats, Mangalore is a melting pot of diverse
              communities, fostering a rich tapestry of traditions and
              languages. The city is celebrated for its unique cuisine,
              influenced by a blend of coastal flavors and aromatic spices.
              Mangalore is also a hub of educational institutions and economic
              activities, with a thriving port adding to its commercial
              importance. Visitors are drawn to its pristine beaches, such as
              Panambur and Tannirbhavi, and iconic landmarks like the Kadri
              Manjunath Temple and St. Aloysius Chapel, showcasing a harmonious
              coexistence of religious diversity. Overall, Mangalore captivates
              with its enchanting coastal beauty, cultural vibrancy, and a
              dynamic blend of modernity and tradition.
            </p>
          </div>
        </div>

        <div className="h-40"></div>
        {/* Getting to NITK */}
        <div className="py-2">
          <div className="container mx-auto">
            <h2 className="text-5xl text-center font-extrabold text-gray-900">
              Getting to NITK
            </h2>
            <div className="text-lg font-bold mt-10">
              NITK is located in Surathkal, which is very close to a big city
              like Mangalore, making it very easy to reach NITK!
            </div>
            <p className="mt-10 font-bold text-gray-700">
              Owing to a National Highway passing right in front of the college,
              all intercity and interstate buses make sure to stop right at the
              gate of the college as well. Thanks to great connectivity with
              Mangalore, coming by flight to Mangalore airport is also a viable
              mode of transport. Mangalore airport caters to both, domestic as
              well as international flights! Coming to trains, once again, using
              Mangalore's stations remain a great choice. Mangalore has two
              stations, the Central and Junction stations. Either can be used to
              travel here. While Surathkal itself has a station, it is not a
              prominent stop in longer route trains and is more suited to short
              distance travels to and from nearby areas.
            </p>
            <div className="text-3xl mt-5 text-center font-extrabold text-gray-800">
              Distance from surrounding stations and airport
            </div>
            <div className="relative overflow-x-auto">
              <table className="md:mx-auto text-lg text-left text-gray-500 mt-5 border border-6">
                <thead className="text-sm md:text-base text-gray-700 uppercase bg-gray-300">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 md:px-6 py-3 font-bold border border-6 border-gray-400 bg-gray-200"
                    >
                      Destination
                    </th>
                    <th
                      scope="col"
                      className="px-4 md:px-6 py-3 font-bold border border-6 border-gray-400 bg-gray-200"
                    >
                      Distance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50 border-b hover:bg-gray-100">
                    <th
                      scope="row"
                      className="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300"
                    >
                      Mangalore Airport
                    </th>
                    <td className="px-4 md:px-6 py-4 border border-6  font-medium text-gray-900 border-gray-300">
                      20km
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b hover:bg-gray-100">
                    <th
                      scope="row"
                      className="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300"
                    >
                      Mangalore Central Railway Station
                    </th>
                    <td className="px-4 md:px-6 py-4 border border-6  font-medium text-gray-900 border-gray-300">
                      21km
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b hover:bg-gray-100">
                    <th
                      scope="row"
                      className="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300"
                    >
                      Mangalore Junction Railway Station
                    </th>
                    <td className="px-4 md:px-6 py-4 border border-6 font-medium text-gray-900 border-gray-300">
                      25km
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b hover:bg-gray-100">
                    <th
                      scope="row"
                      className="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300"
                    >
                      Surathkal Railway Station
                    </th>
                    <td className="px-4 md:px-6 py-4 border border-6 font-medium text-gray-900  border-gray-300">
                      4km
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b hover:bg-gray-100">
                    <th
                      scope="row"
                      className="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300"
                    >
                      Mangalore Bus Stand
                    </th>
                    <td className="px-4 md:px-6 py-4 border border-6  font-medium text-gray-900 border-gray-300">
                      22km
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b hover:bg-gray-100">
                    <th
                      scope="row"
                      className="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300"
                    >
                      Udupi Bus Stand
                    </th>
                    <td className="px-4 md:px-6 py-4 border border-6 font-medium text-gray-900  border-gray-300">
                      35km
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
