import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Review from "../components/Review";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Review />
    </>
  );
};

export default Home;
