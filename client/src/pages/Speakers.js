import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar/Navbar'
import SpeakerData from '../components/SpeakerData'

function Speakers() {
  return (
    <>
    <header>
      <Logo />
      <Navbar />
    </header>
    <main>
      <SpeakerData/>
    </main>
    </>
  )
}

export default Speakers