import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Carousel from '../components/Carousel';
import Button from '../components/Button';
import Main from '../components/Main';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import Tracks from '../components/Tracks';


export default function Home() {
  return (
    <>
        <header>
            <Logo />
            <Navbar />
            <Carousel />

            <Button />
        </header>
            
        
        <main>

            <Main />
            <Tracks />
            <Timeline />

        </main>

        <footer>
            <Footer />
        </footer>


        
    </>
  )
}
