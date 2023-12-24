import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import CallforPapers from "./components/CallforPapers";
import PaperSubmission from "./components/PaperSubmission";
import TechnicalTracks from "./components/TechnicalTracks";
import ImportantDate from "./components/ImportantDate";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ForAuthors" element={<ForAuthors />} />
          <Route path="/Commitee" element={<Committee />} />
          <Route path="/Speakers" element={<Speakers />} />
          <Route path="/EventDetails" element={<EventDetails />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Sponsorship" element={<Sponsorship />} />
          <Route path="/Accomodation" element={<Accomodation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ImportantDates" element={<ImportantDate/>}/>
          <Route path="/CallForPapers" element={<CallforPapers/>}/>
          <Route path="/TechnicalTracks" element={<TechnicalTracks/>}/>
          <Route path="/PaperSubmission" element={<PaperSubmission/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
