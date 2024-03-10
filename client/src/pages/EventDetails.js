import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import pdf from "../assets/timeline.pdf"
import { Button } from "@material-tailwind/react";
import PDFViewer from "../components/PdfViewer";
function EventDetails() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <main className="bg-gray-100 w-100 ">
          <div className="p-10 md:col-span-2">
            <Heading text="Key Conference Details" />
            <PDFViewer/>
            </div>
        <footer className="mt-40">
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default EventDetails;
