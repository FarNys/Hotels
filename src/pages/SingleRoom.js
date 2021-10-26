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

const SingleRoom = () => {
  const [styles, setstyles] = useState(false);
  let x, y, singleData;
  useEffect(() => {
    setstyles(true);
  }, []);
  const styleChanger = () => {
    setstyles(false);
    setTimeout(() => {
      setstyles(true);
    }, 500);
  };
  const { allData } = useContext(GlobalContext);
  const { id } = useParams();
  const filteredData = allData.filter((el) => el.sys.id === id);
  console.log(filteredData, id);
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
        className={
          styles ? "singleroom_container" : "singleroom_container initial"
        }
      >
        <div className="selected_room">
          <div className="img_singleroom">
            <img src={singleData.fields.img_src} alt={singleData.fields.name} />
          </div>
          <div className="singleroom_alldata">
            <div className="singleroom_data">
              <div>
                <FaHotel />
              </div>
              <div className="singleroom_info">Name</div>
              <div>{singleData.fields.name}</div>
            </div>
            <div className="singleroom_data">
              <div>
                <MdFreeBreakfast />
              </div>
              <div className="singleroom_info">Breakfast</div>
              <div>{singleData.fields.breakfast ? "No" : "Yes"}</div>
            </div>
            <div className="singleroom_data">
              <div>
                {singleData.fields.capacity !== 1 ? (
                  <BsFillPeopleFill />
                ) : (
                  <BsFillPersonFill />
                )}
              </div>
              <div className="singleroom_info">Capacity</div>
              <div>{singleData.fields.capacity}</div>
            </div>
            <div className="singleroom_data">
              <div>
                <MdDescription />
              </div>
              <div className="singleroom_info">Description</div>
              <div>{singleData.fields.description}</div>
            </div>
            <div className="singleroom_data">
              <div>
                <MdPets />
              </div>
              <div className="singleroom_info">Pets Allowed</div>
              <div>{singleData.fields.pets ? "Yes" : "No"}</div>
            </div>
            <div className="singleroom_data">
              <div>
                <FaHome />
              </div>
              <div className="singleroom_info">Size</div>
              <div>{singleData.fields.size}</div>
            </div>
            <div className="singleroom_data">
              <div>
                <GiPriceTag />
              </div>
              <div className="singleroom_info">Price</div>
              <div>{singleData.fields.price}</div>
            </div>
            <div className="singleroom_data">
              <div>
                <FaUmbrellaBeach />
              </div>
              <div className="singleroom_info">Properties</div>
              <div>
                {singleData.fields.extras.map((el) => {
                  return (
                    <>
                      <li>{el}</li>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="single_room_title">
          <h1>Same Rooms</h1>
        </div>
        <div className="same_room">
          {y.map((item, index) => {
            return (
              <TheRoom styleChanger={styleChanger} item={item} key={index} />
            );
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
