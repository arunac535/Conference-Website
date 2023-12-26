import React from "react";
import Main from "../components/Main";
import ActivitiesTimeline from "../components/Timeline/ActivitiesTimeline";
import Footer from "../components/Footer";
import Tracks from "../components/Tracks";
import Counter from "../components/Counter/counter-logic";
import Slider from "../components/carousel/Slider";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  const conferenceDate = "2024-01-06T23:59:59";

  return (
    <>
      <header>
        <Logo />
        <Navbar />
        <Slider />
      </header>
      <section className="mx-auto flex flex-col items-center justify-center p-10 bg-gray-200">
        <Main />
        <Tracks />
        <ActivitiesTimeline />
        <Counter conferenceDate={conferenceDate} />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
