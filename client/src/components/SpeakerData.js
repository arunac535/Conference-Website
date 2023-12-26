import React from 'react'

function SpeakerData() {
  return (
    <>
      <div class="py-8">
        <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
          Keynote Speakers
        </h1>
      </div>
      <div className="m-10">
        <div class="relative overflow-x-auto w-11/12 mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8">
            <div class="bg-white p-4 rounded shadow-md">
              <div class="mb-4 font-bold text-gray-900 whitespace-nowrap text-2xl font-arial">
                Prof. R N Patel
              </div>
              <div class="text-gray-700">
                <p class="mb-2 text-lg font-helvetica">NIT Raipur</p>
              </div>
            </div>
            <div class="bg-white p-4 rounded shadow-md">
              <div class="mb-4 font-bold text-gray-900 whitespace-nowrap text-2xl font-arial">
                Prof. A Bansal
              </div>
              <div class="text-gray-700">
                <p class="mb-2 text-lg font-helvetica">IIT Roorkee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SpeakerData
