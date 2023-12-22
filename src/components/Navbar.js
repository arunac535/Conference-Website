import React from 'react'
import {NavLink} from 'react-router-dom'
import "./style.css"
import { useState } from "react";
import {FaBars} from 'react-icons/fa'
import { ImCross } from "react-icons/im";


export default function Navbar() {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
    <nav className="navbar">
      
    <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>

      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/ForAuthors'>For Authors</NavLink></li>
        <li><NavLink  to='/Commitee'  >Committee</NavLink></li>
        <li><NavLink  to='/Speakers' >Speakers</NavLink></li>
        <li><NavLink to='/EventDetails'>Event Details</NavLink></li>
        <li><NavLink to='/Registration' >Registration</NavLink></li>
        <li><NavLink to='/Sponsorship'  >Sponsorship</NavLink></li>
        <li><NavLink to='/Accomodation' >Accomodation</NavLink></li>
        <li><NavLink to='/Contact' >Contact</NavLink></li>
      </ul>
    </nav>


    </>
  )
}