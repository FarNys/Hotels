import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context";
import { Link } from "react-router-dom";
import "../Styles/Hero.css";

const Hero = () => {
  const bareData = useContext(GlobalContext);
  const [data, setdata] = useState(bareData.allData);

  //   data[9].fields.img_src
  return (
    <div className="hero_container">
      <div className="image_container"></div>
      <div className="hero_text">
        <Link to="/rooms">Explore !</Link>
      </div>
    </div>
  );
};

export default Hero;
