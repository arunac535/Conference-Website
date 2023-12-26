import React from "react";
import nitkMB from './../assets/nitkMB.jpg'
import eee_dept from './../assets/eee_dept.jpg'
import mlr from './../assets/mangalore.jpg'

export default function About() {
  return (
    <div className="flex-grow mt-20">
      <div className="my-5 mx-auto w-11/12">
        <h1 className="mb-20 text-center text-6xl font-extrabold tracking-normal text-gray-800 ">
          About Us
        </h1>

        <div className="my-8 text-center ">
          <div className="container mx-auto">
            <h2 className="text-4xl font-extrabold mb-8 text-gray-700">
            </h2>
            <p className="text-justify text-xl font-arial mb-10">
              National Institute of Technology Karnataka, Surathkal is located
              in Mangalore City, Karnataka State, India. The Institute was
              established as Karnataka Regional Engineering College (KREC) in
              1960, and upgraded as National Institute of Technology Karnataka
              (NITK) in 2002. Mangalore is the headquarters of the coastal
              district of Dakshina Kannada, and boasts an important centre of
              education, business and trade in the state. Sri. U. Srinivasa
              Mallya, a visionary and a philanthropist, contributed immensely to
              the development of the coastal region of Karnataka, and his effort
              towards establishment of KREC (now NITK) is the most significant
              one. In recognition of his role as the founder and architect of
              the institute, the campus premises is named after him as
              Srinivasnagar.
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
                        frameBorder="0"
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
        <div className="my-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-extrabold mb-8 text-gray-700">
              About Electrical and Electronics Engineering Department
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <p class="max-w-lg p-4 bg-white shadow-xl rounded-md text-gray-700">
                  The EEE Department at NIT Karnataka, established in 1960, has
                  evolved to offer a specialized postgraduate program in Power
                  and Energy Systems since 1992, and Ph.D. programs since 2003.
                  The department boasts cutting-edge laboratories and a dynamic
                  faculty engaged in teaching, research, and industry
                  collaboration. Key research areas include Smart Grid Operation
                  & Control, Power Electronics & Renewable Energy, Biomedical
                  Imaging & Signal Processing, Electric Vehicle & Wireless Power
                  Transfer, and Artificial Intelligence & Machine Learning.
                  Faculty accolades include the Young Faculty Research
                  Fellowship and the POSOCO award. The department actively
                  pursues externally funded research projects from entities like
                  DST, SERB, MNRE, CPRI, DELL, CDAC, Infineon, Texas
                  Instruments, Schneider Electric, L&T, Robert Bosch, and MeitY.
                  Additionally, the department undertakes consultancy projects,
                  resulting in numerous publications, including patents, in
                  international journals and conferences throughout the year.
                </p>
              </div>
              <img
                src={eee_dept}
                alt="An image of the EEE department of NITK"
              />
            </div>
          </div>
        </div>

        <div className="h-20"></div>
        {/* About Mangalore */}
        <div className="my-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-extrabold mb-8 text-gray-700">
              About Mangalore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src={mlr}
                alt="Mangalore Image"
                className="showdow-xl"
              />
              <div className="flex justify-center">
                <p class="max-w-lg p-4 bg-white shadow-xl rounded-md text-gray-700">
                  Mangalore, a coastal city in the southwestern state of
                  Karnataka, India, is renowned for its picturesque landscapes,
                  vibrant culture, and historical significance. Nestled between
                  the Arabian Sea and the Western Ghats, Mangalore is a melting
                  pot of diverse communities, fostering a rich tapestry of
                  traditions and languages. The city is celebrated for its
                  unique cuisine, influenced by a blend of coastal flavors and
                  aromatic spices. Mangalore is also a hub of educational
                  institutions and economic activities, with a thriving port
                  adding to its commercial importance. Visitors are drawn to its
                  pristine beaches, such as Panambur and Tannirbhavi, and iconic
                  landmarks like the Kadri Manjunath Temple and St. Aloysius
                  Chapel, showcasing a harmonious coexistence of religious
                  diversity. Overall, Mangalore captivates with its enchanting
                  coastal beauty, cultural vibrancy, and a dynamic blend of
                  modernity and tradition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-40"></div>
        {/* Getting to NITK */}
        <div className="py-2">
          <div className="container mx-auto">
            <h2 className="text-5xl text-center font-extrabold text-gray-700">
              Getting to NITK
            </h2>
            <div className="text-lg font-bold mt-10">
              NITK is located in Surathkal, which is very close to a big city
              like Mangalore, making it very easy to reach NITK!
            </div>
            <p className="mt-10 text-md font-bold text-gray-700">
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
            <div class="relative overflow-x-auto">
                            <table class="md:mx-auto text-lg text-left text-gray-500 mt-5 border border-6">
                                <thead class="text-sm md:text-base text-gray-700 uppercase bg-gray-300">
                                    <tr>
                                        <th scope="col" class="px-4 md:px-6 py-3 font-bold border border-6 border-gray-400 bg-gray-200">
                                            Destination
                                        </th>
                                        <th scope="col" class="px-4 md:px-6 py-3 font-bold border border-6 border-gray-400 bg-gray-200">
                                            Distance
                                        </th>                                
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-gray-50 border-b hover:bg-gray-100">
                                        <th scope="row" class="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300">
                                            Mangalore Airport
                                        </th>
                                        <td class="px-4 md:px-6 py-4 border border-6  font-medium text-gray-900 border-gray-300">
                                            20km
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-50 border-b hover:bg-gray-100">
                                        <th scope="row" class="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300">
                                            Mangalore Central Railway Station
                                        </th>
                                        <td class="px-4 md:px-6 py-4 border border-6  font-medium text-gray-900 border-gray-300">
                                            21km
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-50 border-b hover:bg-gray-100">
                                        <th scope="row" class="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300">
                                            Mangalore Junction Railway Station
                                        </th>
                                        <td class="px-4 md:px-6 py-4 border border-6 font-medium text-gray-900 border-gray-300">
                                            25km
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-50 border-b hover:bg-gray-100">
                                        <th scope="row" class="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300">
                                            Surathkal Railway Station
                                        </th>
                                        <td class="px-4 md:px-6 py-4 border border-6 font-medium text-gray-900  border-gray-300">
                                            4km
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-50 border-b hover:bg-gray-100">
                                        <th scope="row" class="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300">
                                            Mangalore Bus Stand
                                        </th>
                                        <td class="px-4 md:px-6 py-4 border border-6  font-medium text-gray-900 border-gray-300">
                                            22km
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-50 border-b hover:bg-gray-100">
                                        <th scope="row" class="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-6 border-gray-300">
                                            Udupi Bus Stand
                                        </th>
                                        <td class="px-4 md:px-6 py-4 border border-6 font-medium text-gray-900  border-gray-300">
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
