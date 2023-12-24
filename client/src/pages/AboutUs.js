import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

function AboutUs() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>

      <main>
        <About />
        <Footer />
      </main>
    </>
  );
}

export default AboutUs;
