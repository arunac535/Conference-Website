import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function ForAuthors() {
  return (
    <>

    <header>
      <Logo />
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default ForAuthors