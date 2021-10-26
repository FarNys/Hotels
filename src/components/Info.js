import React from "react";
import * as IconVS from "react-icons/vsc";
import "../Styles/Info.css";
import * as Fa from "react-icons/fa";
import * as Bi from "react-icons/bi";

const Info = () => {
  return (
    <div className="info_container">
      <h1>Services</h1>
      <div className="items_container">
        <div className="text_container">
          <Fa.FaCoffee className="icon" />
          <h3>Coffee Shop</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et
            veniam totam porro earum illo modi voluptates quisquam architecto
            similique.
          </p>
        </div>
        <div className="text_container">
          <Fa.FaWifi className="icon" />
          <h3>Free WiFi</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et
            veniam totam porro earum illo modi voluptates quisquam architecto
            similique.
          </p>
        </div>
        <div className="text_container">
          <Bi.BiRestaurant className="icon" />
          <h3>Restaurant</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et
            veniam totam porro earum illo modi voluptates quisquam architecto
            similique.
          </p>
        </div>
        <div className="text_container">
          <Fa.FaSwimmer className="icon" />
          <h3>Swimming Pool</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et
            veniam totam porro earum illo modi voluptates quisquam architecto
            similique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
