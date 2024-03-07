import React from 'react'

const speakers1 = [
    {
      ind: 1,
      name: "Dr. K. Gopakumar",
      afiliation: "Indian Institute of Science (IISc), Bangalore, India",
      path:"https://faculty.dese.iisc.ac.in/kgopakumar/wp-content/uploads/sites/7/2017/03/kgopa3.jpg"
    }
  ]

function SpeakerCard() {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 py-10">
          {speakers1.map((member) => (
            
            <div
              className="bg-gray-100 py-8 px-4 rounded-lg shadow-xl"
              key={member.ind}
            >
              <img src ={member.path} height={180} width={205}/>
              <p className="text-base uppercase font-bold text-gray-800">
                {member.name}
              </p>
              <p className="text-xs pt-2 font-semibold text-gray-600 uppercase">
                {member.afiliation}
              </p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SpeakerCard