import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import ContactForm from "../components/Contact/ContactForm";
import Banner from "../components/Banner/Banner";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner ><Slider /></Banner>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;