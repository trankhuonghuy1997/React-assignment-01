import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import City from "./City";
import PeropertyType from "./PeropertyType";
import HomeGuestLove from "./HomeGuestLove";
import RegisterForm from "./RegisterForm";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <City />
      <PeropertyType />
      <HomeGuestLove />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default Home;
