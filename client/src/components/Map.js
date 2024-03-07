import React from "react";
import Heading from "./Heading";

export default function Map() {
  return (
    <div className="my-10 py-10">
      <Heading text="Directions" />
      <div className="my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.8481926648054!2d74.79233757245261!3d13.010641693038357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211d773f671%3A0xc781937fae762966!2sElectrical%20and%20Electronics%20Department%20NITK%20Surathkal!5e0!3m2!1sen!2sin!4v1709820794475!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
