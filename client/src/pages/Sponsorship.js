import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

function Sponsorship() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <div className="flex-grow bg-gray-200">
        <div className="py-10">
          <Heading text="Sponsorship" />
        </div>

        <section className="py-3 md:py-10 mx-auto w-full px-4">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-12 font-helvetica">
              Rates – Sponsorship and Exhibition
            </h2>
          </div>

          <div className="mx-auto px-4 overflow-x-auto">
            <table className="table table-hover border-separate border-gray-200 rounded-lg shadow-md sm:w-full md:w-full lg:w-full overflow-x-scroll mb-4">
              <thead className="bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-t-2xl shadow-lg">
                <tr className="text-center">
                  <th
                    className="text-lg md:text-xl font-semibold font-helvetica py-4 pl-4 pr-2"
                    colSpan="2"
                  >
                    Conference Exhibition Rates(11th March 2024 to 12th March
                    2024 Two days), NITK
                  </th>
                  <th className="text-2xl font-semibold font-helvetica px-2 pr-4">
                    Rates in INR
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="text-center font-semibold text-xl sm:text-lg md:text-xl py-4">
                    1.
                  </td>
                  <td className="font-bold text-sm : md:text-base px-4 py-4">
                    3m x 3m (approx) per stall
                  </td>
                  <td className="text-center font-bold py-4">25000/-</td>
                </tr>
                <tr>
                  <td className="text-center font-semibold text-xl sm:text-lg md:text-xl py-4">
                    2.
                  </td>
                  <td className="font-bold text-sm : md:text-base px-4 py-4">
                    Two stalls of 3m x 3m (premium category)
                  </td>
                  <td className="text-center font-bold py-4">42500/-</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="text-center font-semibold text-xl sm:text-lg md:text-xl py-4">
                    3.
                  </td>
                  <td className="font-bold text-sm : md:text-base px-4 py-4">
                    More than two stalls – per extra stall of size 3m x 3m
                  </td>
                  <td className="text-center font-bold py-4">12500/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-12 font-helvetica">
              Other Sponsorships
            </h2>
          </div>

          <div className="mx-auto px-4 overflow-x-auto">
            <table className="table table-hover border-separate border-gray-200 rounded-lg shadow-md sm:w-full md:w-full lg:w-full overflow-x-scroll mb-4">
              <thead className="bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-t-2xl shadow-lg">
                <tr className="text-center">
                  <th className="text-lg font-semibold font-helvetica py-4 pl-4 pr-2">
                    SN.
                  </th>
                  <th className="text-lg font-semibold font-helvetica px-2">
                    Item
                  </th>
                  <th className="text-lg font-semibold font-helvetica px-2">
                    Facilities to the Sponsors
                  </th>
                  <th className="text-lg font-semibold font-helvetica pr-4">
                    Rates in INR
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-gray-100">
                  <td className="px-2 font-semibold text-xl sm:text-lg md:text-xl py-4">
                    1.
                  </td>
                  <td className="text-center font-bold py-4">
                    Food Arrangements
                  </td>
                  <td className="px-2 font-semibold py-4">
                    <ol className="sm:pl-0 md:pl-4 py-2">
                      <li className="mb-1">
                        1. Advertising at the appropriate places at the food
                        site.
                      </li>
                      <li className="mb-1">
                        2. Free food passes for 2 members.
                      </li>
                      <li className="mb-1">
                        3. Sponsor logo on tables placed for food at the food
                        site.
                      </li>
                      <li className="mb-1">
                        4. One-page advertisement of sponsor in organizing
                        material kit.
                      </li>
                    </ol>
                  </td>
                  <td className="font-bold py-4 px-2">1.5 Lakhs</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-2 font-semibold text-md py-4">2.</td>
                  <td className="px-2 font-bold py-4">Registration Kit</td>
                  <td className="px-2 font-semibold py-4">Logo on kit</td>
                  <td className="px-2 font-bold py-4">1.5 Lakhs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-8 lg:py-16 mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-12 font-helvetica">
              Sponsorship Rates
            </h2>
          </div>

          <div className="mx-auto px-4 overflow-x-auto">
            <table className="table table-hover border-separate border-gray-200 rounded-lg shadow-md sm:w-full md:w-full lg:w-full overflow-x-scroll mb-4">
              <thead className="bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-t-2xl shadow-lg">
                <tr>
                  <th className="text-lg font-semibold font-helvetica px-2 py-4">
                    SN
                  </th>
                  <th className="text-lg font-semibold font-helvetica px-2">
                    Category
                  </th>
                  <th className="text-lg font-semibold font-helvetica px-2">
                    Max Sponsors
                  </th>
                  <th className="text-lg font-semibold font-helvetica px-2">
                    Facilities
                  </th>
                  <th className="text-lg font-semibold font-helvetica px-2">
                    Rates in INR
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="font-semibold text-md py-4 px-2">1.</td>
                  <td className="font-semibold text-md py-4 px-2">
                    Principal Sponsor
                  </td>
                  <td className="font-semibold py-4 px-2">1</td>
                  <td className="py-4 text-md">
                    <ol className="sm:pl-0 md:pl-4 py-2">
                      <li className="mb-2 font-semibold">
                        1. Display of logo at the conference backdrop.
                      </li>
                      <li className="mb-2 font-semibold">
                        2. Display of banners at the conference venue.
                      </li>
                      <li className="mb-2 font-semibold">
                        3. 12 free delegates.
                      </li>
                      <li className="mb-2 font-semibold">
                        4. Company logo as Principal sponsor on the website.
                      </li>
                      <li className="mb-2 font-semibold">
                        5. Full page colour advertisement in the proceedings.
                      </li>
                    </ol>
                  </td>
                  <td className="px-2 font-bold py-4">10.0 Lakhs</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="font-semibold text-md py-4 px-2">2.</td>
                  <td className="font-semibold text-md py-4 px-2">
                    Co-Sponsor
                  </td>
                  <td className="px-2 font-semibold py-4">1</td>
                  <td className="text-center py-4">
                    <ol className="sm:pl-0 md:pl-4 text-left py-2">
                      <li className="mb-2 font-semibold">
                        1. Display of logo at the conference backdrop.
                      </li>
                      <li className="mb-2 font-semibold">
                        2. Display of banners at the conference venue.
                      </li>
                      <li className="mb-2 font-semibold">
                        3. 10 free delegates.
                      </li>
                      <li className="mb-2 font-semibold">
                        4. Company logo as Co-sponsor on the website.
                      </li>
                    </ol>
                  </td>
                  <td className="px-2 font-bold py-4">8.0 Lakhs</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-2 font-semibold text-md py-4">3.</td>
                  <td className="px-2 font-semibold text-md py-4">
                    Platinum Sponsor
                  </td>
                  <td className="font-semibold px-2 py-4">1</td>
                  <td className="py-4">
                    <ol className="sm:pl-0 md:pl-4 text-left py-2">
                      <li className="mb-2 font-semibold">
                        1. Display of logo at the conference backdrop.
                      </li>
                      <li className="mb-2 font-semibold">
                        2. Display of banners at the conference venue.
                      </li>
                      <li className="mb-2 font-semibold">
                        3. 8 free delegates.
                      </li>
                      <li className="mb-2 font-semibold">
                        4. Company logo as Co-sponsor on the website.
                      </li>
                    </ol>
                  </td>
                  <td className="px-2 font-bold py-4">6.0 Lakhs</td>
                </tr>
                <tr>
                  <td className="text-center font-semibold sm:text-lg md:text-xl py-4">
                    4.
                  </td>
                  <td className="text-center font-bold py-4">Gold Sponsor</td>
                  <td className="text-center font-semibold py-4">1</td>
                  <td className="text-center py-4">
                    <ol className="sm:pl-0 md:pl-4 text-left py-2">
                      <li className="mb-2 font-semibold">
                        1. Display of logo at the conference backdrop.
                      </li>
                      <li className="mb-2 font-semibold">
                        2. Display of banners at the conference venue.
                      </li>
                      <li className="mb-2 font-semibold">
                        3. 4 free delegates.
                      </li>
                      <li className="mb-2 font-semibold">
                        4. Company logo as Co-sponsor on the website.
                      </li>
                    </ol>
                  </td>
                  <td className="text-center font-bold py-4">4.0 Lakhs</td>
                </tr>
                <tr>
                  <td className="text-center font-semibold sm:text-lg md:text-xl py-4">
                    5.
                  </td>
                  <td className="text-center font-bold py-4">Dinner Sponsor</td>
                  <td className="text-center font-semibold py-4">1</td>
                  <td className="text-center py-4">
                    <ol className="sm:pl-0 md:pl-4 text-left py-2">
                      <li className="mb-2 font-semibold">
                        1. Display of logo at the conference backdrop.
                      </li>
                      <li className="mb-2 font-semibold">
                        2. Display of banners at the conference venue.
                      </li>
                      <li className="mb-2 font-semibold">
                        3. 4 free delegates.
                      </li>
                      <li className="mb-2 font-semibold">
                        4. Company logo as Co-sponsor on the website.
                      </li>
                    </ol>
                  </td>
                  <td className="text-center font-bold py-4">4.0 Lakhs</td>
                </tr>
                <tr>
                  <td className="text-center font-semibold sm:text-lg md:text-xl py-4">
                    6.
                  </td>
                  <td className="text-center font-bold py-4">Lunch Sponsor</td>
                  <td className="text-center font-semibold py-4">1</td>
                  <td className="text-center py-4">
                    <ol className="sm:pl-0 md:pl-4 text-left py-2">
                      <li className="mb-2 font-semibold">
                        1. Display of logo at the conference backdrop.
                      </li>
                      <li className="mb-2 font-semibold">
                        2. Display of banners at the conference venue.
                      </li>
                      <li className="mb-2 font-semibold">
                        3. 4 free delegates.
                      </li>
                      <li className="mb-2 font-semibold">
                        4. Company logo as Co-sponsor on the website.
                      </li>
                    </ol>
                  </td>
                  <td className="text-center font-bold py-4">4.0 Lakhs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Sponsorship;
