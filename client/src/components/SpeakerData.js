import React from 'react'

function SpeakerData() {
  return (
    <>
      <div className="py-8">
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
          Keynote Speakers
        </h1>
      </div>
      <div className="m-10">
        <div className="relative overflow-x-auto w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8">
            <div className="bg-white p-4 rounded shadow-md">
              <div className="mb-4 font-bold text-gray-900 whitespace-nowrap text-2xl font-arial">
                Prof. R N Patel
              </div>
              <div className="text-gray-700">
                <p className="mb-2 text-lg font-helvetica">NIT Raipur</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <div className="mb-4 font-bold text-gray-900 whitespace-nowrap text-2xl font-arial">
                Prof. A Bansal
              </div>
              <div className="text-gray-700">
                <p className="mb-2 text-lg font-helvetica">IIT Roorkee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SpeakerData
