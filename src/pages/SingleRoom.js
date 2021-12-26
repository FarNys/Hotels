import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";
import TheRoom from "../components/TheRoom";
import "../Styles/SingleRoom.css";
import { Redirect, useHistory } from "react-router";
import { MdFreeBreakfast } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { BsCheckLg } from "react-icons/bs";

const SingleRoom = () => {
  let x, y, singleData;

  const { allData } = useContext(GlobalContext);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const filteredData = allData.filter((el) => el.sys.id === id);
  // console.log(filteredData, id);
  if (filteredData.length > 0) {
    x = allData.filter(
      (item) => item.fields.type === filteredData[0].fields.type
    );
    y = x.filter(
      (el) =>
        el.fields.type === filteredData[0].fields.type &&
        el.sys.id !== filteredData[0].sys.id
    );
    singleData = filteredData[0];
  }
  if (filteredData.length === 0) {
    return <Redirect from="/rooms/:id" to="/Page404" />;
  } else {
    return (
      <div
        // className={
        //   styles ? "singleroom_container" : "singleroom_container initial"
        // }
        className="singleroom_container"
      >
        <div className="selected_room">
          <Fade left>
            <div className="img_singleroom">
              <img
                src={singleData.fields.img_src}
                alt={singleData.fields.name}
              />
            </div>
          </Fade>
          <Fade right>
            <div className="singleroom_alldata">
              <div className="singleroom_data">
                <div>
                  <FaHotel />
                  <div className="singleroom_info">Type</div>
                </div>
                <div>{singleData.fields.name}</div>
              </div>
              <div className="singleroom_data">
                <div>
                  <MdFreeBreakfast />
                  <div className="singleroom_info">Breakfast</div>
                </div>
                <div>{singleData.fields.breakfast ? "No" : "Yes"}</div>
              </div>
              <div className="singleroom_data">
                <div>
                  {singleData.fields.capacity !== 1 ? (
                    <BsFillPeopleFill />
                  ) : (
                    <BsFillPersonFill />
                  )}
                  <div className="singleroom_info">Capacity</div>
                </div>
                <div>{singleData.fields.capacity}</div>
              </div>
              <div className="singleroom_data">
                <div>
                  <MdDescription />
                  <div className="singleroom_info">Description</div>
                </div>
                <div>{singleData.fields.description}</div>
              </div>
              <div className="singleroom_data">
                <div>
                  <MdPets />
                  <div className="singleroom_info">Pets Allowed</div>
                </div>
                <div>{singleData.fields.pets ? "Yes" : "No"}</div>
              </div>
              <div className="singleroom_data">
                <div>
                  <FaHome />
                  <div className="singleroom_info">Size</div>
                </div>
                <div>{singleData.fields.size} m x m</div>
              </div>
              <div className="singleroom_data">
                <div>
                  <GiPriceTag />
                  <div className="singleroom_info">Price</div>
                </div>
                <div>{singleData.fields.price} $</div>
              </div>
              <div className="singleroom_data">
                <div>
                  <FaUmbrellaBeach />
                  <div className="singleroom_info ">Features</div>
                </div>
                <div className="singleroom_feature">
                  {singleData.fields.extras.map((el, id) => {
                    return (
                      <div key={id}>
                        <li>
                          <BsCheckLg className="icon_check" />
                          {el}
                        </li>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="single_room_title">
          <h1>Same Type Rooms</h1>
        </div>
        <div className="same_room">
          {y.map((item, index) => {
            return <TheRoom item={item} key={index} />;
          })}
        </div>
        <div className="back_to_home">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  }
};

export default SingleRoom;
