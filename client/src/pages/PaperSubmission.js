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
          <div className="my-5 text-xl text-indigo-500 py-5 font-bold text-center">
            The authors are invited to submit the Full papers of the
            Research/Review Papers/Abstracts. The papers will be peer-reviewed
            and only the accepted and registered papers will be considered for
            presentation during the conference and publication in the
            proceedings.
          </div>

          <div className="mt-5 py-4 flex">
            <span className="text-blue-900 text-lg font-extrabold">
              NOTE :{" "}
            </span>
            <p className="px-2 font-extrabold text-gray-800 text-lg">
              Acceptance of a full-length submission is strictly based on the
              reviewers’ comments.
            </p>
          </div>

          <div className="text-lg mb-5 py-2 text-gray-700">
            <p>
              All submissions need to be submitted through the CMT using the
              link :
            </p>

            <div className="font-bold my-2 py-2 text-blue-400 hover:text-blue-900 hover:underline">
              <Link to="https://cmt3.research.microsoft.com/PEIS2024">
                Click Here
              </Link>
            </div>
          </div>

          <div className="text-lg text-gray-700 py-2 mt-10">
            At least one of the authors of an accepted paper needs to register
            for the conference and to present the paper(s), through an Online or
            Offline Mode presentation.
          </div>
          <div className="text-lg text-gray-700 py-2">
            All manuscripts should be prepared in the following Springer's Book
            Chapter template.
          </div>

          <div className="my-10 py-5">
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PaperSubmission;
