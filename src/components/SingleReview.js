import React from "react";

const SingleReview = ({ item }) => {
  console.log(item);
  return (
    <div className="single_review">
      <div className="info_review">
        <div className="info_review_left">
          <img src={item.image_src} alt={item.name} />
        </div>
        <div className="info_review_right">
          <div className="review_name">
            {item.name} {item.lastname}
          </div>
          <div>{item.job.toUpperCase()}</div>
        </div>
      </div>

      <div className="review_text">{item.text}</div>
    </div>
  );
};

export default SingleReview;
