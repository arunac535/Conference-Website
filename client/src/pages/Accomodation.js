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
                className="font-extrabold text-md hover:text-blue-600"
                onClick={() =>
                  handleClick(
                    "https://drive.google.com/file/d/12Usef-7C5P4kcfNxjfwgclhYAvPUmYgh/view"
                  )
                }
              >
                1. The Ocean Pearl, Mangalore
              </ListItem>
              <ListItem
                className="font-extrabold text-md hover:text-blue-600"
                onClick={() =>
                  handleClick("http://www.hotelsaisuraj.com/tariff.html")
                }
              >
                2. Hotel Sai Suraj, Surathkal (NITK members 10% discounts)
              </ListItem>

              <ListItem
                className="font-extrabold text-md hover:text-blue-600"
                onClick={() =>
                  handleClick("https://hotelsadanand.co.in/available-rooms/")
                }
              >
                3. Hotel Sadanand
              </ListItem>

              <ListItem
                className="font-extrabold text-md hover:text-blue-600"
                onClick={() =>
                  handleClick("https://redrockresidency.com/index.php/tarif")
                }
              >
                4. The Red Rock
              </ListItem>

              <ListItem
                className="font-extrabold text-md hover:text-blue-600"
                onClick={() =>
                  handleClick(
                    "https://www.oyorooms.com/35504/?utm_source=awin&utm_medium=affiliate&sv1=affiliate&sv_campaign_id=922583&awc=32579_1704002275_05f23bd2cb25d563747d38a1f6bddb5a"
                  )
                }
              >
                5. Garuda Comforts
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
