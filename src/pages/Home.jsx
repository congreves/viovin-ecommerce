import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Contact/ContactForm";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import GoToTop from "./GoToTop";

function Home() {
  return (
    <div>
      <Navbar id="navbar" />
      <Banner></Banner>
      <Categories />
   <ContactForm/>
   <GoToTop/>
      <Footer />
    </div>
  );
}

export default Home;
