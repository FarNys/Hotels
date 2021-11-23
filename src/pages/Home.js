import React, { useEffect, useState } from "react";
import { GlobalContext } from "../Context";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Review from "../components/Review";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Info />
      <Review />
    </>
  );
};

export default Home;
