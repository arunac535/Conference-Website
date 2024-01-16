import React from "react";

import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";

const Mailto = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

function Contact() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>

      <main className="bg-gray-200 pt-10">
        <Heading text="Contact Us" />

        <div className="w-[80%] sm:w-[75%] md:w-[60%] mx-auto py-4 my-10 rounded-2xl bg-gray-100 shadow-2xl">
          <div className="p-8 rounded">
            <div className="my-5 text-center">
              <h2 className="mb-10 text-4xl font-bold text-gray-800">
                General Chairs
              </h2>

              <div className="flex items-center justify-center">
                <p className="font-bold text-lg mb-2 mx-4 tracking-wider px-4">
                  Yashwant Kashyap
                </p>

                <p className="font-bold mx-4 text-lg mb-2 tracking-wider px-4">
                  A. Karthikeyan
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl mb-2">NITK, India</p>
            </div>
            <div className="text-center">
              <Mailto email="assets.nitk@gmail.com">
                <p className="text-blue-600 hover:underline font-bold text-lg mt-5">
                  assets.nitk@gmail.com
                </p>
              </Mailto>
            </div>
          </div>
        </div>

        <div className="h-[8rem]"></div>

        <footer className="mt-10">
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default Contact;
