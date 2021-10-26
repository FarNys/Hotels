import React, { useEffect, useState } from "react";
import reviewData from "../DataReview";
import SingleReview from "./SingleReview";
import "../Styles/Review.css";

const Review = () => {
  return (
    <div className="review_all_container">
      <h1 className="review_title">What did Our Customers say</h1>
      <article className="review_container">
        {reviewData.map((item, index) => {
          return <SingleReview item={item} key={index} />;
        })}
      </article>
    </div>
  );
};

export default Review;
