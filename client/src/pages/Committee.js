import React from "react";
import CommiteeData from "../components/CommiteeData";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

function Committee() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <main>
        <CommiteeData />
        <Footer />
      </main>
    </>
  );
}

export default Committee;
