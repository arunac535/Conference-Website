import React from 'react'
import Heading from './Heading'


export default function KeynoteSpeaker() {
  return (
    <>
      <Heading text="Chief Guest" />
      <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg">
        <img alt="" style={{ width:'8cm' }} src="https://faculty.dese.iisc.ac.in/kgopakumar/wp-content/uploads/sites/7/2017/03/kgopa3.jpg" />
        <a href="https://faculty.dese.iisc.ac.in/kgopakumar/">
          <div className="ml-4">
            <h1 className="text-lg font-bold">
              Professor<br/>
              Dr. K. Gopakumar<br/>
              Department of Electronic Systems Engineering (Formerly CEDT)<br/>
              Indian Institute of Science (IISc)<br/>
              Bangalore 560012
            </h1>
          </div>
        </a>
      </div>
    </>
  )
}
