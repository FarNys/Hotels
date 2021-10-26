import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context";
import "../Styles/Luxory.css";
import TheRoom from "../components/TheRoom";
const Luxory = () => {
  const myData = useContext(GlobalContext);

  const [luxoryRoom, setluxoryRoom] = useState([]);
  useEffect(() => {
    setluxoryRoom(
      myData.allData.filter((el) => el.fields.type === "presidential")
    );
  }, [myData]);
  console.log(luxoryRoom);
  return (
    <div className="luxroy_room_container">
      <div className="top_luxory_room">
        <h1>Presidental Room</h1>
      </div>
      <div className="bot_luxory_room">
        {luxoryRoom.map((item, index) => {
          return <TheRoom item={item} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Luxory;
