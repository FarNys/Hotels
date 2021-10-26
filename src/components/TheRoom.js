import React, { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs"; //type
import { AiFillDollarCircle } from "react-icons/ai"; // price
import { AiFillHome } from "react-icons/ai"; // size
import { Link } from "react-router-dom";
import "../Styles/Rooms.css";

const TheRoom = ({ item, styleChanger }) => {
  // const room_animation = document.querySelectorAll(".theroom_container");
  useEffect(() => {
    const theRoom = document.querySelectorAll(".theroom_container");
    theRoom.forEach((room, id) => {
      room.style.animationDelay = `${(id * 2) / theRoom.length}s`;
    });
  }, [item]);

  return (
    <div className="theroom_container">
      <div className="up_room_data">
        <img src={item.fields.img_src} alt={item.fields.name} />
      </div>
      <div className="down_room_data">
        <div className="sub_down_room">
          <div>
            <BsFillPersonFill />
          </div>
          <div>Type:</div>
          <div>{item.fields.type}</div>
        </div>

        <div className="sub_down_room">
          <div>
            <AiFillDollarCircle />
          </div>
          <div>Price:</div>
          <div>{item.fields.price} $</div>
        </div>
        <div className="sub_down_room">
          <div>
            <AiFillHome />
          </div>
          <div>Size:</div>
          <div>{item.fields.size} m</div>
        </div>
        <div className="sub_down_room">
          <Link onClick={styleChanger} to={`/rooms/${item.sys.id}`}>
            {item.fields.name}
          </Link>
        </div>
        {/* <Link to="/" exact>
          Home
        </Link> */}
      </div>
    </div>
  );
};

export default TheRoom;
