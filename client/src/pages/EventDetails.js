import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

function EventDetails() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <main>
        <div className="p-10 bg-gray-200 md:col-span-2">
          <Heading text="Key Conference Details" />

          <p className="z-10 mt-20 text-3xl space-x-4">
            Technical Sessions and Paper Presentations:
          </p>
          <p className="mt-6 opacity-70">
            Participants will have the opportunity to present and discuss their
            research in dedicated technical sessions covering various aspects of
            smart and sustainable energy.
          </p>

          <p className="z-10 mt-20 text-3xl space-x-4">
            Workshops and Tutorials:
          </p>

          <p className="mt-6 opacity-70">
            Pre-conference workshops and tutorials conducted by experts will
            provide in-depth knowledge and skills in specific areas of interest.
          </p>

          <p className="z-10 mt-20 text-3xl space-x-4">
            Keynote Speakers:
          </p>

          <p className="mt-6 opacity-70 ">
            Renowned experts in the field will deliver keynote addresses,
            sharing their expertise and insights on emerging trends and future
            directions in smart energy technologies.
          </p>

          <p className="z-10 mt-20 text-3xl space-x-4">
            Publication in Springer Nature:
          </p>
          <p className="mt-6 opacity-70 ">
            Accepted papers will be published in the conference proceedings by
            Springer Nature under the Scopus index, ensuring wide visibility and
            accessibility to the global research community.
          </p>

          <p className="z-10 mt-20 text-3xl space-x-4">
            Networking Opportunities:
          </p>
          <p className="mt-6 opacity-70">
            Networking sessions, social events, and a gala dinner will foster
            collaboration and networking among participants, promoting a dynamic
            exchange of ideas.
          </p>

          <p className="z-10 mt-20 text-3xl space-x-4">
            Poster Presentations:
          </p>
          <p className="mt-6 opacity-70 ">
            A dedicated poster session will provide an additional platform for
            researchers to showcase their work and engage in discussions with
            conference attendees.
          </p>

          <p className=" z-10 mt-20 text-3xl space-x-4">
            Topics of Interest:
          </p>
          <p className="mt-6 opacity-70 ">
            The conference will cover a broad spectrum of topics, including but
            not limited to: <br />
            Renewable Energy Sources <br />
            Smart Grid Technologies <br />
            Energy Storage Systems <br />
            Internet of Things (IoT) in Energy <br />
            Sustainable Transportation <br />
            Energy Policy and Economics <br />
            Emerging Technologies and Innovations <br />
            Environmental Impact and Sustainability
          </p>

          <p className="z-10 mt-20 text-3xl space-x-4">
            Submission Guidelines:
          </p>
          <p className="mt-6 opacity-70">
            Authors are invited to submit original and unpublished research
            papers following the conference guidelines. Detailed submission
            instructions can be found on the conference website.
          </p>

          <p className="z-10 mt-20 text-3xl space-x-4">Registration:</p>
          <p className="mt-6 opacity-70">
            Early bird registration and conference registration details will be
            available on the conference website. Join us at ASSETS 2024 for a
            stimulating exchange of ideas and advancements in the exciting field
            of smart and sustainable energy. Let's collectively contribute to a
            greener and more sustainable future!
          </p>
        </div>

        <Footer />
      </main>
      <footer>
        
      </footer>
    </>
  );
}

export default EventDetails;
