import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";

function Contact() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <main>
        <div className="flex-grow pt-10 pb-20 bg-gray-200">
          <Heading text="Contact Us" />
          <div className="w-3/4 mx-auto py-4 mt-10 rounded bg-gray-100">
            <div className="p-8 rounded">
              <div className="my-5 text-center">
                
                <h2 className="mb-10 text-4xl font-bold text-gray-800">
                  General Chairs
                </h2>
                <div className="flex justify-center">
                  <div className="mr-20 text-center">
                    <p className="font-bold text-xl mb-2 tracking-normal">
                      Yashwant Kashyap
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-xl mb-2 tracking-normal">A. Karthikeyan</p>
                  </div>
                </div>
              </div>
              <div className="mr-6 text-center">
                <p className="font-bold text-xl mb-2">NITK, India</p>
              </div>
              <div className="text-center">
                <Link
                  to=""
                  className="text-blue-600 hover:underline font-bold text-lg"
                >
                  EMAIL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
