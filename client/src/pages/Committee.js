import React from "react";
import CommiteeData from "../components/CommiteeData";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";

function Committee() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <main className="h-screen">
        <CommiteeData />
      </main>

      <Footer />
    </>
  );
}

export default Committee;
