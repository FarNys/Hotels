import React, { useContext, useState, useRef, useEffect } from "react";
import { GlobalContext } from "../Context";
import "../Styles/Rooms.css";
import TheRoom from "../components/TheRoom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Rooms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const { allData } = useContext(GlobalContext);
  const [filteredData, setFilteredData] = useState(allData);
  const priceRange = allData.sort((a, b) => a.fields.price - b.fields.price);
  const priceMin = priceRange[0].fields.price;
  const priceMax = priceRange[priceRange.length - 1].fields.price;
  const [input, setinput] = useState(350);
  const [type, settype] = useState("all");
  const [showMessage, setshowMessage] = useState(false);
  document.documentElement.style.setProperty(
    "--pricePos",
    `${((input - 50) * 2) / 5 + 25}px`
  );
  const inputRef = useRef(100);
  const typeHandler = (e) => {
    settype(e.target.value);
    if (e.target.value !== "all") {
      setFilteredData(
        allData
          .filter((item) => item.fields.type === e.target.value)
          .filter((el) => el.fields.price >= inputRef.current.value)
      );
    } else {
      setFilteredData(allData);
    }
  };
  const inputHandler = (e) => {
    setinput(e.target.value);
  };
  const rangeHandler = (e) => {
    console.log(type);
    e.preventDefault();
    if (type === "all") {
      setFilteredData(allData.filter((el) => el.fields.price >= input));
    }
    if (type !== "all") {
      setFilteredData(
        allData
          .filter((el) => el.fields.price >= input)
          .filter((item) => item.fields.type === type)
      );
    }
  };

  useEffect(() => {
    if (filteredData.length > 0) {
      setshowMessage(false);
    } else {
      setshowMessage(true);
    }
  }, [filteredData]);

  // const slideHandlers = (e) => {
  //   e.preventDefault();
  //   carouselIndex = e.target.getAttribute("data-index");
  //   carouselRef.current.style.transform = `translateX(${
  //     carouselIndex * -350
  //   }px)`;
  //   const refs = btnsRef.current.childNodes;
  //   for (let i = 0; i < refs.length; i++) {
  //     refs[i].classList.remove("btn_active");
  //   }
  //   refs[carouselIndex].classList.add("btn_active");
  // };

  return (
    <div className="rooms_container">
      <div className="svg_container">
        <div className="left_side_book">
          <div className="left_side_carousel">
            {/* <div className="inner_carousel" ref={carouselRef}>
              <img src="../images/hotel_1.jpg" alt="hotel_pic_1" />
              <img src="../images/hotel_1.jpg" alt="hotel_pic_2" />
              <img src="../images/hotel_1.jpg" alt="hotel_pic_3" />
            </div> */}
            <Slider {...settings}>
              <div>
                <img src="/images/room-1.jpeg" alt="" />
              </div>
              <div>
                <img src="/images/room-4.jpeg" alt="" />
              </div>
              <div>
                <img src="/images/room-7.jpeg" alt="" />
              </div>
              <div>
                <img src="/images/room-9.jpeg" alt="" />
              </div>
            </Slider>
          </div>
          {/* <div className="image_changer_container" ref={btnsRef}>
            <button
              className="btn_active"
              onClick={slideHandlers}
              data-index="0"
            ></button>
            <button onClick={slideHandlers} data-index="1"></button>
            <button onClick={slideHandlers} data-index="2"></button>
          </div> */}
        </div>
        <div className="right_side_book">
          <h1>Choose Your Desired Room</h1>
        </div>
      </div>

      <div className="filter_container">
        <form className="range_form" onSubmit={rangeHandler}>
          <label htmlFor="price">Price </label>
          <input
            ref={inputRef}
            id="price"
            type="range"
            min={priceMin}
            max={priceMax}
            // initial={350}
            onChange={inputHandler}
            step="50"
            value={inputRef.current.value}
          />
          <span>{input}</span>
          <button className="range_btn" type="submit" onClick={rangeHandler}>
            Accept
          </button>
        </form>
        <form className="check_form">
          <label>Type</label>
          <select type="radio" onChange={typeHandler}>
            <option value="all">All</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="family">Family</option>
          </select>
        </form>
      </div>
      <div className="allrooms_container">
        {filteredData.map((item, index) => {
          return <TheRoom item={item} key={item + index} index={index} />;
        })}
      </div>
      {showMessage && (
        <div className="showMessage_container">
          <h3>"There Is No Room With These Situations"</h3>
        </div>
      )}
    </div>
  );
};

export default Rooms;
