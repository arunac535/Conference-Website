import React from "react";
import { List, ListItem, Card } from "@material-tailwind/react";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

function Accomodation() {
  function handleClick(link) {
    window.open(link, "_blank");
  }

  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <section className="p-10 bg-gray-200">
        <Heading text="Accomodation Details" />
        <div className="mt-20 p-10">
          <span className="text-2xl font-extrabold text-gray-700">
            Details about hotels to stay
          </span>
          <Card className="mt-10 bg-gray-100 shadow-none">
            <List>
              <ListItem
                className="font-extrabold text-md"
                onClick={() =>
                  handleClick(
                    "https://drive.google.com/file/d/12Usef-7C5P4kcfNxjfwgclhYAvPUmYgh/view"
                  )
                }
              >
                1. The Ocean Pearl, Mangalore
              </ListItem>
              <ListItem
                className="font-extrabold text-md"
                onClick={() =>
                  handleClick(
                    "http://www.hotelsaisuraj.com/tariff.html"
                  )
                }
              >
                2. Hotel Sai Suraj, Surathkal (NITK members 10% discounts)
              </ListItem>
            </List>
          </Card>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Accomodation;
