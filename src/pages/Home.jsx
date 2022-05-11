import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import ContactForm from "../components/Contact/ContactForm";
import Banner from "../components/Banner/Banner";
import {
  BannerSubtitle,
  BannerText,
  BannerTitle,
} from "../components/About/About.styles";
import Categories from "../components/Categories/Categories";

function Home() {
  return (
    <div>
      <Navbar id="navbar" />
      <Banner>
        <Slider />
      </Banner>
      <Categories/>
      <ContactForm id="kontakt-page" />
      <Footer />
    </div>
  );
}

export default Home;
