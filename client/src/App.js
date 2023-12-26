import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Accomodation from "./pages/Accomodation";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails";
import Registration from "./pages/Registration";
import Speakers from "./pages/Speakers";
import Sponsorship from "./pages/Sponsorship";
import PaperSubmission from "./pages/PaperSubmission";
import TechnicalTracks from "./pages/TechnicalTracks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />

          <Route path="tracks" element={<TechnicalTracks />} />
          <Route path="paperssubmission" element={<PaperSubmission />} />

          <Route path="commitee" element={<Committee />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="eventDetails" element={<EventDetails />} />
          <Route path="registration" element={<Registration />} />
          <Route path="sponsorship" element={<Sponsorship />} />
          <Route path="accomodation" element={<Accomodation />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
