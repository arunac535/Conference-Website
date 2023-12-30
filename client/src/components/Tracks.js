import React from "react";
import Heading from "../components/Heading";

export default function Tracks() {
  return (
    <div>
      <section class="my-10 p-2 mx-10 text-center flex-grow flex-col justify-between">
        <Heading text="Tracks" />

        <ul class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
          <li class="bg-white p-8 rounded-lg shadow-xl  text-gray-800">
            <h3 class="text-2xl font-bold mb-4 text-indigo-600">Track 1</h3>
            <p class="text-xl font-bold mb-4">Renewable Energy Sources:</p>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify">
              <li>Solar energy technologies and applications.</li>
              <li>
                Wind energy systems and advancements Bioenergy and biofuels.
              </li>
              <li>Hydroelectric and ocean energy.</li>
            </ul>
            <p></p>
          </li>

          <li class="bg-white p-8 rounded-lg shadow-xl  text-gray-800">
            <h3 class="text-2xl font-bold mb-4 text-indigo-600">Track 2</h3>
            <p class="text-xl font-bold mb-4">
              Smart Grids and Energy Storage:
            </p>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify">
              <li>
                Smart grid infrastructure and management Energy storage
                technologies (batteries, supercapacitors, etc).
              </li>
              <li>Grid integration of renewable energy sources.</li>
              <li>Demand-side management and energy efficiency .</li>
            </ul>
            <p></p>
          </li>
          <li class="bg-white p-8 rounded-lg shadow-xl  text-gray-800">
            <h3 class="text-2xl font-bold mb-4 text-indigo-600">Track 3</h3>
            <p class="text-xl font-bold mb-4">
              Energy Conversion Technologies:
            </p>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify">
              <li>Advanced power electronics and converters.</li>
              <li>Energy harvesting and scavenging.</li>
              <li>Thermoelectric and piezoelectric materials.</li>
              <li>Electromagnetic and piezoelectric energy conversion.</li>
            </ul>
            <p></p>
          </li>
          <li class="bg-white p-8 rounded-lg shadow-xl  text-gray-800">
            <h3 class="text-2xl font-bold mb-4 text-indigo-600">Track 4</h3>
            <p class="text-xl font-bold mb-4">
              Internet of Things (IoT) in Energy Systems:
            </p>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify">
              <li>Smart sensors and devices for energy monitoring.</li>
              <li>IoT applications in energy management.</li>
              <li>Data analytics for energy optimization .</li>
              <li>Cybersecurity in energy systems.</li>
            </ul>
            <p></p>
          </li>
          <li class="bg-white p-8 rounded-lg shadow-xl  text-gray-800">
            <h3 class="text-2xl font-bold mb-4 text-indigo-600">Track 5</h3>
            <p class="text-xl font-bold mb-4">
              Sustainable Transportation and Electrification:
            </p>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify">
              <li>Electric vehicles and charging infrastructure .</li>
              <li>Sustainable transportation policies.</li>
              <li>Integration of renewable energy in transportation .</li>
              <li>Advanced materials for lightweight vehicles.</li>
            </ul>
            <p></p>
          </li>
          <li class="bg-white p-8 rounded-lg shadow-xl  text-gray-800">
            <h3 class="text-2xl font-bold mb-4 text-indigo-600">Track 6</h3>
            <p class="text-xl font-bold mb-4">Energy Policy and Economics</p>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify">
              <li>Policy frameworks for sustainable energy .</li>
              <li>Economic implications of renewable energy adoption .</li>
              <li>
                International collaboration in energy research and development .
              </li>
              <li>Regulatory challenges and solutions .</li>
            </ul>

            <p></p>
          </li>
          <li class="bg-white p-8 rounded-lg shadow-xl  text-gray-800">
            <h3 class="text-2xl font-bold mb-4 text-indigo-600">Track 7</h3>
            <p class="text-xl font-bold mb-4">
              Emerging Technologies and Innovations
            </p>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify">
              <li>Artificial intelligence in energy systems</li>
              <li>Quantum technologies for energy applications .</li>
              <li>
                Advanced materials for energy devices and Next-generation energy
                technologies.
              </li>
            </ul>
            <p></p>
          </li>
          <li class="bg-white p-8 rounded-lg shadow-xl  text-gray-800">
            <h3 class="text-2xl font-bold mb-4 text-indigo-600">Track 8</h3>
            <p class="text-xl font-bold mb-4 ">
              Environmental Impact and Sustainability
            </p>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify">
              <li>Life cycle assessment of energy systems .</li>
              <li>Environmental impact of energy production.</li>
              <li>Climate change mitigation through sustainable energy.</li>
              <li>Circular economy in the energy sector.</li>
            </ul>
            <p></p>
          </li>
        </ul>
      </section>
    </div>
  );
}
