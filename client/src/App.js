import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Accomodation from "./pages/Accomodation";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails";
import ForAuthors from "./pages/ForAuthors";
import Registration from "./pages/Registration";
import Speakers from "./pages/Speakers";
import Sponsorship from "./pages/Sponsorship";
import TracksList from "./components/TracksList";
import CallForPapers from "./components/CallForPapers";
import PaperSubmission from "./components/PaperSubmission";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="authors" element={<ForAuthors />}>
            <Route index element={<Navigate replace to="tracks" />} />
            <Route path="tracks" element={<TracksList />} />
            <Route path="callforpapers" element={<CallForPapers />} />
            <Route path="papersubmission" element={<PaperSubmission />} />
          </Route>
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
