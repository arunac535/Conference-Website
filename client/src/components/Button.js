import React from "react";

export default function Button({ text, link }) {
  function handleRedirect() {
    window.open(link);
  }

  return (
    <div className="flex justify-center mt-5">
      <button
        className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        onClick={handleRedirect}
      >
        {text}
      </button>
    </div>
  );
}
