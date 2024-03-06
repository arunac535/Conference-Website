import React from 'react'
import Heading from './Heading'


export default function KeynoteSpeaker() {
  return (
    <>
    <Heading text="Chief Guest" />
      <div className="flex">
        <img alt="" style={{ width:'8cm', }} src="https://faculty.dese.iisc.ac.in/kgopakumar/wp-content/uploads/sites/7/2017/03/kgopa3.jpg" />
          <a href="https://faculty.dese.iisc.ac.in/kgopakumar/">
          <h1 style={{ fontSize:'0.7cm', padding:'0.5cm' }}>
          Professor<br/>
          Dr. K. Gopakumar<br/>
          Department of Electronic Systems Engineering ( Formerly CEDT)<br/>
          Indian Institute of Science (IISc)<br/>
          Bangalore 560012</h1>
          </a>
      </div>
    </>
  )
}
