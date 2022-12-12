import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import IsWork from "../components/IsWork/IsWork";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../components/Footer/Footer";
import Welcome from "../components/Welcome/Welcome";
import SecondWelcome from "../components/SecondWelcome/SecondWelcome";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Main />
      <IsWork />
      <Reviews />
      <SecondWelcome />
      <Footer />
    </div>
  );
};

export default MainPage;

export const isAuth = (link) => {
  const storage = localStorage.getItem("token");
  if (storage) {
    return link;
  } else {
    return "/auth";
  }
};
