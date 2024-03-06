import React from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="container flex flex-col items-center justify-center mt-10">
      <Heading text="Conference Overview" />
      <p className="my-10 text-md md:text-xl px-2 mx-10">
        The International Conference on Advancements in Smart, Sustainable
        Energy Sources, Technologies, and Systems (ASSETS) aims to bring
        together researchers, scientists, engineers, and industry professionals
        to explore and discuss the latest developments in the field of smart and
        sustainable energy. This conference will serve as a platform for
        exchanging ideas, sharing innovative research findings, and fostering
        collaborations to address the global challenges associated with energy
        sustainability.
      </p>

      <p className="my-2 text-md md:text-xl px-2 mx-10 font-bold text-orange-900">
        <span>
          It is planned to publish the peer reviewed and selected papers of
          conference as proceedings with Springer in their prestigious “Lecture
          Notes in Electrical Engineering” series.{"   "}
          <Link
            to="https://www.springer.com/series/7818"
            className="font-bold py-2 text-blue-400 hover:text-blue-900 hover:underline"
          >
            Click
          </Link>
        </span>
      </p>

      <p className="text-md md:text-xl px-2 mx-10 flex flex-col text-orange-900 font-bold">
        <span>
          For detailed instructions for author and editors of conference
          proceedings, kindly visit the following link:{"      "}
          <Link
            to="https://www.springer.com/us/authors-editors/conference-proceedings"
            className="font-bold py-2 text-blue-400 hover:text-blue-900 hover:underline"
          >
            Link
          </Link>
        </span>

        <span>
          Select papers from the conference will be published by Springer as a
          proceedings book volume. Springer will conduct quality checks on the
          accepted papers and only papers that pass these checks will be
          published. Springer Nature does not charge any money for publication
          of Non-Open Access content. Abstracts/extended abstracts and short
          papers (less than 4 pages) are not considered for publication.
        </span>
      </p>
    </div>
  );
}


