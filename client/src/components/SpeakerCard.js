import React from "react";

function SpeakerCard({ name, afiliation, path }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 py-10">
        <div className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl">
          <img src={path} height={180} width={205} />
          <p className="text-base uppercase font-bold text-gray-800">{name}</p>
          <p className="text-xs pt-2 font-semibold text-gray-600 uppercase">
            {afiliation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpeakerCard;
