import React from "react";

function SpeakerCard({ ind, name, afiliation, path }) {
  return (
    <div
      className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl flex flex-col justify-center items-center"
      key={ind}
    >
      <img src={path} height={180} width={205} />
      <p className="font-extrabold uppercase text-gray-800 py-3">{name}</p>
      <p className="text-xs pt-2 font-semibold text-gray-600 uppercase">
        {afiliation}
      </p>
    </div>
  );
}

export default SpeakerCard;
