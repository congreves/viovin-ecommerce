import React from 'react'
import AboutContainer from '../components/About/AboutContainer'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import GoToTop from './GoToTop';

function About() {
  return (
    <div>
    <Navbar />
    <AboutContainer />
    <GoToTop/>
    <Footer />
    </div>
  )
}

export default About