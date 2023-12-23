import React from "react";

import Button from "../components/Button";
import Main from "../components/Main";
import ActivitiesTimeline from "../components/ActivitiesTimeline";
import Footer from "../components/Footer";
import Tracks from "../components/Tracks";
import CarouselWithContent from "../components/CarouselWithText";

export default function Home() {
  return (
    <>
      <header>
        {/* <Carousel /> */}

        <CarouselWithContent />

        <Button text="Brochure" link="" />
      </header>
      <section className="container mx-auto flex flex-col items-center justify-center">
        <Main />
        <Tracks />
        <ActivitiesTimeline />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
