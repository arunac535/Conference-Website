import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import SpeakerData from "../components/SpeakerData";
import KeynoteSpeaker from "../components/KeynoteSpeaker";

function Speakers() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <main className="flex flex-col h-100vh">
        <KeynoteSpeaker />
        <SpeakerData />
        <Footer />
      </main>
    </>
  );
}

export default Speakers;
