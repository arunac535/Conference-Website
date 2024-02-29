import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
function PaperSubmission() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>

      <main className="bg-gray-200 w-full items-center justify-between">
        <div className="p-10">
          <Heading text="Paper Submission" />
          <div className="my-10 text-xl text-indigo-500 py-5 font-bold text-center mx-10 px-2">
            The authors are invited to submit the Full papers of the
            Research/Review Papers. The papers will be peer-reviewed and only
            the accepted and registered papers will be considered for
            presentation during the conference and publication in the
            proceedings.
          </div>

          <div className="mt-2 py-3 flex mx-10 px-2">
            <span className="text-blue-900 text-lg font-extrabold">
              NOTE :{" "}
            </span>
            <p className="px-2 font-extrabold text-gray-800 text-lg">
              Acceptance of a full-length submission is strictly based on the
              reviewers’ comments.
            </p>
          </div>

          <p className="my-5 text-md md:text-xl px-2 mx-10 font-bold text-orange-900">
            <span>
              It is planned to publish the peer reviewed and selected papers of
              conference as proceedings with Springer in their prestigious
              “Lecture Notes in Electrical Engineering” series.{"   "}
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
              Select papers from the conference will be published by Springer as
              a proceedings book volume. Springer will conduct quality checks on
              the accepted papers and only papers that pass these checks will be
              published. Springer Nature does not charge any money for
              publication of Non-Open Access content. Abstracts/extended
              abstracts and short papers (less than 4 pages) are not considered
              for publication.
            </span>
          </p>

          <div className="text-lg my-5 py-5 text-gray-700 mx-10 px-2">
            <p>
              All submissions need to be submitted through the CMT using the
              link :
            </p>

            <div className="font-bold my-2 py-2 text-blue-400 hover:text-blue-900 hover:underline">
              <Link to="https://cmt3.research.microsoft.com/ASSETS2024">
                Click Here
              </Link>
            </div>
          </div>

          <div className="text-lg text-gray-700 py-2 mt-5 mx-10 px-2">
            At least one of the authors of an accepted paper needs to register
            for the conference and to present the paper(s), through an Online or
            Offline Mode presentation.
          </div>
          <div className="text-lg text-gray-700 py-2 mx-10 px-2">
            All manuscripts should be prepared in the following Springer's Book
            Chapter template.
          </div>

          <div className="my-10 py-5 mx-10 px-2">
            <div className="font-extrabold text-2xl text-indigo-500 py-3">
              Templates :
            </div>
            <div className="flex-col flex">
              <Link
                to="https://cis2020.scrs.in/assets/download/Word%20Template.zip"
                className=" text-lg text-blue-500 font-bold py-2 hover:text-blue-900 hover:underline"
              >
                Word Template Download
              </Link>
              <Link
                to="https://cvr2021.scrs.in/assets/download/LatexTemplate.zip"
                className="text-lg text-blue-500 font-bold py-2 hover:text-blue-900 hover:underline"
              >
                Latex Template Download
              </Link>
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default PaperSubmission;
