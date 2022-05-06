import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import ContactForm from "../components/Contact/ContactForm";
import Banner from "../components/Banner/Banner";

function Home() {

  return (
    <div>
      <Navbar id="navbar"/>
      <Banner ><Slider /></Banner>
      <ContactForm id="kontakt-page"/>
      <Footer />
    </div>
  );
}

export default Home;