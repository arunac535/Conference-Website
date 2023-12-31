import React from "react";
import Main from "../components/Main";
import ActivitiesTimeline from "../components/Timeline/ActivitiesTimeline";
import Footer from "../components/Footer";
import Tracks from "../components/Tracks";
import Counter from "../components/Counter/counter-logic";
import Slider from "../components/carousel/Slider";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import SponsorsLogo from "../components/SponsorsLogo";

const conferenceDate = "2024-03-15T23:59:59";

export default function Home() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
        <Slider />
      </header>
      <section className="w-full flex flex-col items-center justify-center bg-gray-200">
        <SponsorsLogo />
        <Main />
        {/* <Tracks /> */}
        <ActivitiesTimeline />

        <Counter conferenceDate={conferenceDate} />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
